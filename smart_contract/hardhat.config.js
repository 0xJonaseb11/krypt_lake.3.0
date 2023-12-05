require("@nomicfoundation/hardhat-toolbox");

// require('@nomiclabs/hardhat-waffle');
require('dotenv').config(); 

module.exports = {
  solidity: {
    version: '0.8.9',
  },
  networks: {
    hardhat: {},
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/xK2JBsKJTCXfuz3iKesCyniq-URMcRGQ',
      accounts: [`0x${process.env.PRIVATE_KEY}`], 
    },
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
};
