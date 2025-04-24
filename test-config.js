// filepath: /home/thien/smart-order-router-new-version/test-config.js

const { ChainId } = require('@thienlk/sdk-core');
const { V2_FACTORY_ADDRESS } = require('./build/main/util/pool');
const {
  ID_TO_PROVIDER,
  WRAPPED_NATIVE_CURRENCY,
} = require('./build/main/util/chains');
const {
  V3_CORE_FACTORY_ADDRESSES,
  QUOTER_V2_ADDRESSES,
  MIXED_ROUTE_QUOTER_V2_ADDRESSES,
  UNISWAP_MULTICALL_ADDRESSES,
} = require('./build/main/util/addresses');

console.log('\n========== Configuration Check for Aura Euphoria ==========');
console.log('\nChain ID:', ChainId.AURA_EUPHORIA);
console.log('\nRPC URL:', ID_TO_PROVIDER(ChainId.AURA_EUPHORIA));

console.log('\n--- Contract Addresses ---');
console.log('V2 Factory:', V2_FACTORY_ADDRESS[ChainId.AURA_EUPHORIA]);
console.log('V3 Factory:', V3_CORE_FACTORY_ADDRESSES[ChainId.AURA_EUPHORIA]);
console.log('Quoter V2:', QUOTER_V2_ADDRESSES[ChainId.AURA_EUPHORIA]);
console.log(
  'Mixed Route Quoter V2:',
  MIXED_ROUTE_QUOTER_V2_ADDRESSES[ChainId.AURA_EUPHORIA]
);
console.log('Multicall:', UNISWAP_MULTICALL_ADDRESSES[ChainId.AURA_EUPHORIA]);

console.log('\n--- Native Currency ---');
console.log(
  'Wrapped Native Token:',
  WRAPPED_NATIVE_CURRENCY[ChainId.AURA_EUPHORIA].address
);
console.log(
  'Wrapped Native Token Symbol:',
  WRAPPED_NATIVE_CURRENCY[ChainId.AURA_EUPHORIA].symbol
);

console.log('\n=========================================================');
