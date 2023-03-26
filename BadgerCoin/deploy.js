const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deployer Adderess:", deployer.address);
  console.log(
    "Deployer account balance:",
    await deployer.getBalance().toString()
  );

  const BadgerToken = await ethers.getContractFactory("BadgerCoin");
  const badgerToken = await BadgerToken.deploy();

  console.log(`BadgerToken Address:${badgerToken.address}`);

  await run(`verify:verify`, {
    address: badgerToken.address,
    constructorArguments: [],
  });
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

module.exports.tags = ["all"];
