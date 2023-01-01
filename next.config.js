/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NFT_MARKET_CONTRACT_ADDRESS:"",
    NFT_CONTRACT_ADDRESS:"",
    CHAIN_ID:2330
  },
  reactStrictMode: true,
  images: {
    domains: ['https://altcoinchain.infura-ipfs.io'],
  },
}

module.exports = nextConfig
