const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Dwitter", function () {
  it("Should return the new name", async function () {
    const Dwitter = await ethers.getContractFactory("Dwitter");
    const dwitter = await Dwitter.deploy();
    await dwitter.deployed();

    expect(await dwitter.name()).to.equal("Abhi");

    const setName = await dwitter.setName("Javed!");

    // wait until the transaction is mined
    await setName.wait();

    expect(await dwitter.name()).to.equal("Javed!");
  });
});
