// require("@nomicfoundation/hardhat-toolbox");

require('@nomiclabs/hardhat-waffle');
module.exports = {
  solidity: {
    version: '0.8.19',
    defaultNetwork: 'sepolia',
    networks: {
      hardhat: {},
      sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/Ki5RIbUpckyesiTV7r7zg43yfsvqzuD6',
      accounts: [`0X${process.env.PRIVATE_KEY}`]
    }
  },
  settings: {
    optimizer: {
      enabled: true,
      runs: 200,
    },
  },
 },
};
