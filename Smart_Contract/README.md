

#### Author : JONAS SEBERA
#### Basic Sample Hardhat Project For Sending ETH 

This project demonstrates a basic Hardhat use case. It is specifically a Web3.0 project that basically illustrates the use of hardhat framework to test, compile and deploy smart contracts. It basically implements a modern way of sending cryptocurrencies (ETH) across the world. It is connected to a fantastic user Interface that makes it really look insane.  

#### Try running some of the following tasks : :

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```


```
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```

#### To install the dependecies to be used throughout this project,  run : :  

```
npm install --save-dev hardhat @nomiclabs/hardhat-waffle ethereum-waffle ethereum-waffle chai @nomiclabs/hardhat-ethereum ethers

```
#### Updated dependency list
````
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox @nomicfoundation/hardhat-network-helpers @nomicfoundation/hardhat-chai-matchers @nomicfoundation/hardhat-ethers @nomicfoundation/hardhat-verify chai ethers hardhat-gas-reporter solidity-coverage @typechain/hardhat typechain @typechain/ethers-v6
````

#### To create a hardhat project, please run : :
```
npx hardhat
hardhat
hardhat test
```
#### To deploy your smart contract, please run : :
```
npx hardhat run scripts/deploy.js --network <network_name>
```   

### Running all tasks
```bash
$ npx hardhat
```
```bash
  check                 Check whatever you need
  clean                 Clears the cache and deletes all artifacts
  compile               Compiles the entire project, building all artifacts
  console               Opens a hardhat console
  coverage              Generates a code coverage report for tests
  flatten               Flattens and prints contracts and their dependencies
  help                  Prints this message
  node                  Starts a JSON-RPC server on top of Hardhat Network
  run                   Runs a user-defined script after compiling the project
  test                  Runs mocha tests
  typechain             Generate Typechain typings for compiled contracts
  verify                Verifies contract on Etherscan
```

---
#### Jonas-sebera