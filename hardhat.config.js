require("@nomicfoundation/hardhat-toolbox");
require("hardhat-deploy");
require("dotenv/config");
require("hardhat-gas-reporter");
require("solidity-coverage");
require("hardhat-gas-reporter");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.17",
    networks: {
        goerli: {
            url: process.env.GOERLI_RPC_URL,
            accounts: [process.env.GOERLI_PRIVATE_KEY],
            chainId: 5,
            blockConfirmations: 6,
        },
        localhost: {
            url: "http://127.0.0.1:8545",
            //acounts" hardhat sets this one
            chainId: 31337,
        },
    },
    etherscan: {
        apiKey: process.env.ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: process.env.COINMARKETCAP_API_KEY,
        token: "ETH",
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
};
