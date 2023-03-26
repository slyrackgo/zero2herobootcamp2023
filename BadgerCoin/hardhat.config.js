require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");
/** @type import('hardhat/config').HardhatUserConfig */

const RPC_URL_BNB = process.env.RPC_URL_BNB;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const API_KEY = process.env.API_KEY;

module.exports = {
  networks: {
    bnbTestnet: {
      url: RPC_URL_BNB,
      chainId: 97,
      gas: 6000000,
      accounts: [PRIVATE_KEY],
    },
  },

  etherscan: {
    apiKey: API_KEY,
  },

  solidity: "0.8.18",
};
