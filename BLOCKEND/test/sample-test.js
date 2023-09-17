const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Transactions", function () {
  it("Should return the new greeting once it's changed", async function () {
    const Transactions = await ethers.getContractFactory("Greeter");
    const transactions = await Transactions.deploy();
    await transactions.deployed();

    expect(await transactions.greet()).to.equal("Hello, world!");

    const setGreetingTx = await transactions.setGreeting("Hola, mundo!");

    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await transactions.greet()).to.equal("Hola, mundo!");
  });
});
