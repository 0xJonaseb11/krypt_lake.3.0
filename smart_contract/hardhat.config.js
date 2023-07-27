// require("@nomicfoundation/hardhat-toolbox");

require('@nomiclabs/hardhat-waffle');
module.exports = {
  solidity: '0.8.18',
  networks: {
    sepolia: {
      url: '',//url from alchemy account for the transactions,
      accounts: ['0x661e2973d8903a1bb9200b1f1ab8e902e12c0096dd1c4894dfdae95d67a7adcb'] //Account private key
    }
  }
}
