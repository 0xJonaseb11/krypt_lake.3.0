// require("@nomicfoundation/hardhat-toolbox");

require('@nomiclabs/hardhat-waffle');
module.exports = {
  solidity: '0.8.19',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/Ki5RIbUpckyesiTV7r7zg43yfsvqzuD6',
      accounts: ['5ce8ebc0825bbea4a417d92c4c0085270b1a04684476df0518adb5208fc9f965'] //Account private key
    }
  }
}
