

const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  const transactions = await Transactions.deploy();
   
  // await transactions.deployed();

  console.log("Transactions deployed to: ", transactions.target);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error("Error deploying contract:", error);
    process.exit(1);
  } finally {
    console.log("Application finished");
  }
}

runMain(); 

