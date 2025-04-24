const { ChainId, CurrencyAmount, Token } = require('@thienlk/sdk-core');
const { JsonRpcProvider } = require('@ethersproject/providers');
const { ID_TO_PROVIDER } = require('./build/main/util/chains');
const { V2_FACTORY_ADDRESS } = require('./build/main/util/pool');
const { Contract } = require('@ethersproject/contracts');
const { ethers } = require('ethers');

// V2 Factory ABI
const V2_FACTORY_ABI = [
  {
    inputs: [
      { internalType: 'address', name: 'tokenA', type: 'address' },
      { internalType: 'address', name: 'tokenB', type: 'address' },
    ],
    name: 'getPair',
    outputs: [{ internalType: 'address', name: 'pair', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
];

// V2 Pair ABI
const V2_PAIR_ABI = [
  {
    inputs: [],
    name: 'getReserves',
    outputs: [
      { internalType: 'uint112', name: '_reserve0', type: 'uint112' },
      { internalType: 'uint112', name: '_reserve1', type: 'uint112' },
      { internalType: 'uint32', name: '_blockTimestampLast', type: 'uint32' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'token0',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'token1',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
];

// V3 Pool ABI (simplified)
const V3_POOL_ABI = [
  {
    inputs: [],
    name: 'slot0',
    outputs: [
      { internalType: 'uint160', name: 'sqrtPriceX96', type: 'uint160' },
      { internalType: 'int24', name: 'tick', type: 'int24' },
      { internalType: 'uint16', name: 'observationIndex', type: 'uint16' },
      {
        internalType: 'uint16',
        name: 'observationCardinality',
        type: 'uint16',
      },
      {
        internalType: 'uint16',
        name: 'observationCardinalityNext',
        type: 'uint16',
      },
      { internalType: 'uint8', name: 'feeProtocol', type: 'uint8' },
      { internalType: 'bool', name: 'unlocked', type: 'bool' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'liquidity',
    outputs: [{ internalType: 'uint128', name: '', type: 'uint128' }],
    stateMutability: 'view',
    type: 'function',
  },
];

// Function to compute V3 pool address
function computeV3PoolAddress(factoryAddress, tokenA, tokenB, fee) {
  const [token0, token1] =
    tokenA.toLowerCase() < tokenB.toLowerCase()
      ? [tokenA, tokenB]
      : [tokenB, tokenA];

  return ethers.utils.getCreate2Address(
    factoryAddress,
    ethers.utils.keccak256(
      ethers.utils.defaultAbiCoder.encode(
        ['address', 'address', 'uint24'],
        [token0, token1, fee]
      )
    ),
    ethers.utils.keccak256(
      '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54' // V3 init code hash
    )
  );
}

async function main() {
  // Configure Aura Euphoria details
  const chainId = ChainId.AURA_EUPHORIA;
  const rpcUrl = ID_TO_PROVIDER(chainId);
  console.log(`\n====== Testing Direct Route Finding on Aura Euphoria ======`);
  console.log(`Chain ID: ${chainId}`);
  console.log(`RPC URL: ${rpcUrl}`);

  // Initialize provider
  const provider = new JsonRpcProvider(rpcUrl);

  // Get current block number to verify connectivity
  let blockNumber;
  try {
    blockNumber = await provider.getBlockNumber();
    console.log(`Connected to Aura Euphoria. Current block: ${blockNumber}`);
  } catch (error) {
    console.error(`Failed to connect to Aura Euphoria RPC:`, error);
    return;
  }

  // Define tokens we want to swap between
  const WBNB = new Token(
    chainId,
    '0x220c08739c70a3e33b8b7e90f6076751415cc6c2', // WBNB
    18,
    'WBNB',
    'Wrapped BNB'
  );

  const TST = new Token(
    chainId,
    '0xa9f74da63d4796f97744c8fc7df422087dce940c', // TST
    18,
    'TST',
    'Test Token'
  );

  console.log(`\nFinding routes between:`);
  console.log(`From Token: ${WBNB.symbol} (${WBNB.address})`);
  console.log(`To Token: ${TST.symbol} (${TST.address})`);

  // Test amount
  const amountIn = CurrencyAmount.fromRawAmount(WBNB, '100000000000000000'); // 0.1 WBNB
  console.log(`\nAmount to swap: ${amountIn.toExact()} ${WBNB.symbol}`);

  console.log(`\n====== CHECKING V2 ROUTES ======`);

  // Get V2 factory address
  const v2FactoryAddress = V2_FACTORY_ADDRESS[chainId];
  console.log(`V2 Factory address: ${v2FactoryAddress}`);

  // Create factory contract
  const factory = new Contract(v2FactoryAddress, V2_FACTORY_ABI, provider);

  try {
    // Step 1: Check direct V2 pool
    console.log(
      `\nChecking for direct V2 pool between ${WBNB.symbol} and ${TST.symbol}...`
    );
    const pairAddress = await factory.getPair(WBNB.address, TST.address);

    if (
      pairAddress &&
      pairAddress !== '0x0000000000000000000000000000000000000000'
    ) {
      console.log(`✅ V2 pool found at ${pairAddress}`);

      // Create pair contract
      const pair = new Contract(pairAddress, V2_PAIR_ABI, provider);

      // Get token order in the pair
      const token0Address = await pair.token0();
      const token1Address = await pair.token1();

      // Check if our tokens match the ones in the pair
      const isToken0WBNB =
        token0Address.toLowerCase() === WBNB.address.toLowerCase();
      const isToken1TST =
        token1Address.toLowerCase() === TST.address.toLowerCase();

      console.log(
        `Token order in pair: ${isToken0WBNB ? 'WBNB-TST' : 'TST-WBNB'}`
      );

      // Get reserves
      const reserves = await pair.getReserves();
      const reserve0 = reserves._reserve0;
      const reserve1 = reserves._reserve1;

      console.log(
        `Reserves: ${ethers.utils.formatUnits(reserve0, 18)} ${
          isToken0WBNB ? 'WBNB' : 'TST'
        }, ${ethers.utils.formatUnits(reserve1, 18)} ${
          isToken0WBNB ? 'TST' : 'WBNB'
        }`
      );

      // Calculate output amount (simplified example)
      const wbnbReserve = isToken0WBNB ? reserve0 : reserve1;
      const tstReserve = isToken0WBNB ? reserve1 : reserve0;

      // V2 constant product formula: x * y = k
      // dx * y / (x + dx) = dy
      // where dx is amount in, dy is amount out, x is reserve of token in, y is reserve of token out
      const amountInWithFee = ethers.BigNumber.from(
        amountIn.quotient.toString()
      ).mul(997); // 0.3% fee
      const numerator = amountInWithFee.mul(tstReserve);
      const denominator = wbnbReserve.mul(1000).add(amountInWithFee);
      const amountOut = numerator.div(denominator);

      console.log(`\n✅ V2 Route Result:`);
      console.log(`Input: ${amountIn.toExact()} ${WBNB.symbol}`);
      console.log(
        `Output: ${ethers.utils.formatUnits(amountOut, 18)} ${TST.symbol}`
      );
      console.log(`Route: ${WBNB.symbol} → ${TST.symbol}`);
      console.log(`Route Type: Direct V2 Swap`);
    } else {
      console.log(
        `❌ No direct V2 pool found between ${WBNB.symbol} and ${TST.symbol}`
      );
    }

    console.log(`\n====== CHECKING V3 ROUTES ======`);

    // Define potential V3 pool addresses
    const V3_FACTORY_ADDRESS = '0x12F37127C0E4B107f33cc3A58A4BE0F82359D509'; // From your provided configuration
    const feeTiers = [100, 500, 3000, 10000]; // Common fee tiers in V3

    console.log(`V3 Factory address: ${V3_FACTORY_ADDRESS}`);
    console.log(`Checking V3 pools with fee tiers: ${feeTiers.join(', ')}`);

    let v3PoolFound = false;

    for (const fee of feeTiers) {
      try {
        // Calculate the pool address
        // Note: This is an approximation and may not match the actual deployment
        const poolAddress = computeV3PoolAddress(
          V3_FACTORY_ADDRESS,
          WBNB.address,
          TST.address,
          fee
        );

        console.log(`\nChecking V3 pool (fee ${fee}) at ${poolAddress}...`);

        // Check if the pool exists by trying to call a function
        const pool = new Contract(poolAddress, V3_POOL_ABI, provider);

        const [slot0, liquidity] = await Promise.all([
          pool.slot0().catch(() => null),
          pool.liquidity().catch(() => null),
        ]);

        if (slot0 && liquidity) {
          v3PoolFound = true;
          console.log(`✅ V3 pool found with fee tier ${fee}`);
          console.log(`Liquidity: ${liquidity.toString()}`);
          console.log(`Current Tick: ${slot0.tick}`);
          console.log(`SqrtPriceX96: ${slot0.sqrtPriceX96.toString()}`);

          // Note: Calculating V3 swap output requires more complex math
          // For accurate pricing, we'd need to use the UniswapV3 SDK and tick math
          console.log(
            `\nV3 price calculation requires the full SDK implementation.`
          );
          console.log(
            `For production use, implement the full Uniswap V3 pricing algorithm.`
          );
        } else {
          console.log(`No V3 pool found with fee ${fee}`);
        }
      } catch (error) {
        console.log(`Error checking V3 pool with fee ${fee}: ${error.message}`);
      }
    }

    if (!v3PoolFound) {
      console.log(
        `\n❌ No V3 pools found between ${WBNB.symbol} and ${TST.symbol}`
      );
    }

    console.log(`\n====== ROUTE FINDING SUMMARY ======`);
    if (
      pairAddress &&
      pairAddress !== '0x0000000000000000000000000000000000000000'
    ) {
      console.log(`✅ V2 route available`);
    } else {
      console.log(`❌ No V2 route available`);
    }

    console.log(
      v3PoolFound ? `✅ V3 route available` : `❌ No V3 route available`
    );
  } catch (error) {
    console.error(`Error finding routes:`, error);
  }
}

main().catch((error) => {
  console.error('Script failed with error:', error);
  process.exit(1);
});
