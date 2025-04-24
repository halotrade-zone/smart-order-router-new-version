import { ChainId } from '@thienlk/sdk-core';
import { ADDRESS_ZERO } from '@uniswap/router-sdk';
import { Pool as V4Pool } from '@uniswap/v4-sdk';

import { nativeOnChain } from './chains';

const FAKE_TICK_SPACING = 0;

export const V4_ETH_WETH_FAKE_POOL: { [chainId in ChainId]: V4Pool } = {
  [ChainId.MAINNET]: new V4Pool(
    nativeOnChain(ChainId.MAINNET),
    nativeOnChain(ChainId.MAINNET).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.GOERLI]: new V4Pool(
    nativeOnChain(ChainId.GOERLI),
    nativeOnChain(ChainId.GOERLI).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.SEPOLIA]: new V4Pool(
    nativeOnChain(ChainId.SEPOLIA),
    nativeOnChain(ChainId.SEPOLIA).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.OPTIMISM]: new V4Pool(
    nativeOnChain(ChainId.OPTIMISM),
    nativeOnChain(ChainId.OPTIMISM).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.OPTIMISM_GOERLI]: new V4Pool(
    nativeOnChain(ChainId.OPTIMISM_GOERLI),
    nativeOnChain(ChainId.OPTIMISM_GOERLI).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.OPTIMISM_SEPOLIA]: new V4Pool(
    nativeOnChain(ChainId.OPTIMISM_SEPOLIA),
    nativeOnChain(ChainId.OPTIMISM_SEPOLIA).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.ARBITRUM_ONE]: new V4Pool(
    nativeOnChain(ChainId.ARBITRUM_ONE),
    nativeOnChain(ChainId.ARBITRUM_ONE).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.ARBITRUM_GOERLI]: new V4Pool(
    nativeOnChain(ChainId.ARBITRUM_GOERLI),
    nativeOnChain(ChainId.ARBITRUM_GOERLI).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.ARBITRUM_SEPOLIA]: new V4Pool(
    nativeOnChain(ChainId.ARBITRUM_SEPOLIA),
    nativeOnChain(ChainId.ARBITRUM_SEPOLIA).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.POLYGON]: new V4Pool(
    nativeOnChain(ChainId.POLYGON),
    nativeOnChain(ChainId.POLYGON).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.POLYGON_MUMBAI]: new V4Pool(
    nativeOnChain(ChainId.POLYGON_MUMBAI),
    nativeOnChain(ChainId.POLYGON_MUMBAI).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.CELO]: new V4Pool(
    nativeOnChain(ChainId.CELO),
    nativeOnChain(ChainId.CELO).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.CELO_ALFAJORES]: new V4Pool(
    nativeOnChain(ChainId.CELO_ALFAJORES),
    nativeOnChain(ChainId.CELO_ALFAJORES).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.GNOSIS]: new V4Pool(
    nativeOnChain(ChainId.GNOSIS),
    nativeOnChain(ChainId.GNOSIS).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.MOONBEAM]: new V4Pool(
    nativeOnChain(ChainId.MOONBEAM),
    nativeOnChain(ChainId.MOONBEAM).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.BNB]: new V4Pool(
    nativeOnChain(ChainId.BNB),
    nativeOnChain(ChainId.BNB).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.AVALANCHE]: new V4Pool(
    nativeOnChain(ChainId.AVALANCHE),
    nativeOnChain(ChainId.AVALANCHE).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.BASE_GOERLI]: new V4Pool(
    nativeOnChain(ChainId.BASE_GOERLI),
    nativeOnChain(ChainId.BASE_GOERLI).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.BASE_SEPOLIA]: new V4Pool(
    nativeOnChain(ChainId.BASE_SEPOLIA),
    nativeOnChain(ChainId.BASE_SEPOLIA).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.BASE]: new V4Pool(
    nativeOnChain(ChainId.BASE),
    nativeOnChain(ChainId.BASE).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.ZORA]: new V4Pool(
    nativeOnChain(ChainId.ZORA),
    nativeOnChain(ChainId.ZORA).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.ZORA_SEPOLIA]: new V4Pool(
    nativeOnChain(ChainId.ZORA_SEPOLIA),
    nativeOnChain(ChainId.ZORA_SEPOLIA).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.ROOTSTOCK]: new V4Pool(
    nativeOnChain(ChainId.ROOTSTOCK),
    nativeOnChain(ChainId.ROOTSTOCK).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.BLAST]: new V4Pool(
    nativeOnChain(ChainId.BLAST),
    nativeOnChain(ChainId.BLAST).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.ZKSYNC]: new V4Pool(
    nativeOnChain(ChainId.ZKSYNC),
    nativeOnChain(ChainId.ZKSYNC).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.WORLDCHAIN]: new V4Pool(
    nativeOnChain(ChainId.WORLDCHAIN),
    nativeOnChain(ChainId.WORLDCHAIN).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.UNICHAIN_SEPOLIA]: new V4Pool(
    nativeOnChain(ChainId.UNICHAIN_SEPOLIA),
    nativeOnChain(ChainId.UNICHAIN_SEPOLIA).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.UNICHAIN]: new V4Pool(
    nativeOnChain(ChainId.UNICHAIN),
    nativeOnChain(ChainId.UNICHAIN).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.MONAD_TESTNET]: new V4Pool(
    nativeOnChain(ChainId.MONAD_TESTNET),
    nativeOnChain(ChainId.MONAD_TESTNET).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.SONEIUM]: new V4Pool(
    nativeOnChain(ChainId.SONEIUM),
    nativeOnChain(ChainId.SONEIUM).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
  [ChainId.AURA_EUPHORIA]: new V4Pool(
    nativeOnChain(ChainId.AURA_EUPHORIA),
    nativeOnChain(ChainId.AURA_EUPHORIA).wrapped,
    0,
    FAKE_TICK_SPACING,
    ADDRESS_ZERO,
    79228162514264337593543950336,
    0,
    0
  ),
};

export const V2_FACTORY_ADDRESS: { [chainId in ChainId]?: string } = {
  [ChainId.MAINNET]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  [ChainId.GOERLI]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  [ChainId.SEPOLIA]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  [ChainId.OPTIMISM]: '0x0c3c1c532F1e39EdF36BE9Fe0bE1410313E074Bf',
  [ChainId.OPTIMISM_GOERLI]: '0xB656dA17129e7EB733A557f4EBc57B76CFbB5d10',
  [ChainId.OPTIMISM_SEPOLIA]: '0xB3c2a920b73af0398655C3F352BcAdcA70000df3',
  [ChainId.ARBITRUM_ONE]: '0xf1D7CC64Fb4452F05c498126312eBE1F799B0ACb',
  [ChainId.ARBITRUM_GOERLI]: '0x4893376342d5D7b3e31d4184c08b265e5aB2A3f6',
  [ChainId.ARBITRUM_SEPOLIA]: '0x7bDED29Cf1F6C021f568934Db7F929B8C7a7dda7',
  [ChainId.POLYGON]: '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32',
  [ChainId.POLYGON_MUMBAI]: '0x5757371414417b8C6CAad45bAeF941aBc7d3Ab32',
  [ChainId.CELO]: '0x79a530c8e2fA8748B7B40d7B972710196F26331F',
  [ChainId.CELO_ALFAJORES]: '0x79a530c8e2fA8748B7B40d7B972710196F26331F',
  [ChainId.BNB]: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
  [ChainId.AVALANCHE]: '0x9Ad6C38BE94206cA50bb0d90783181662f0Cfa10',
  [ChainId.BASE]: '0xDaE286A89c7Af8F8F830E0fFD0C7D2B538Ec2601',
  [ChainId.BASE_GOERLI]: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f',
  [ChainId.BASE_SEPOLIA]: '0xf164fC0Ec4E93095b804a4795bBe1e041497b92a',
  [ChainId.BLAST]: '0xAc463983b91F9D627Fb7d0AEcB8B3Bc42E1F544D',
  [ChainId.ZKSYNC]: '0x1BB72E0CbbEA93c08f535fc7856E0338D7F7a8aB',
  [ChainId.WORLDCHAIN]: '0xD1a91A739f5F8F5C40F6fdf60B6F6EADA9Fc33f5',
  [ChainId.UNICHAIN_SEPOLIA]: '0x72E08C9e66f281BCB2D8F15cf60AEf2aeFfFc166',
  [ChainId.UNICHAIN]: '0x1b09F2b1c20D39b31ad9F315FD0e980742233478',
  [ChainId.MONAD_TESTNET]: '0x359c9cbc4b2EB5EbE584A4D9fDD4b32Ef5F3D0c0',
  [ChainId.SONEIUM]: '0xd8C850AF31C482e59aE2a46C96a8614f63E11fBE',
  [ChainId.AURA_EUPHORIA]: '0x6685B976504631b6C189d521586C02c7055371e6',
};
