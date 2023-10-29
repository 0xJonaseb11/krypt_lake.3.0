require('@nomiclabs/hardhat-waffle');
require('dotenv').config(); // Add dotenv for loading environment variables

module.exports = {
  solidity: {
    version: '0.8.19',
  },
  networks: {
    hardhat: {},
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/xK2JBsKJTCXfuz3iKesCyniq-URMcRGQ',
      accounts: [process.env.PRIVATE_KEY], // No need to prepend '0x'
    },
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};
