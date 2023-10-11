const { error } = require("fp-ts/lib/Console");
const { ethers } = require("hardhat");
const { __awaiter } = require("tslib");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log(`Deploying from account: ${deployer.address}`);

    const Transactions = await ethers.getContractFactory("Transactions");
    const transactions = await Transactions.deploy();

    await transactions.deployed();

    console.log(`Transactions contract address: ${transactions.address}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });