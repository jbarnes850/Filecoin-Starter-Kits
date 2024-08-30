import { TutorialDataMap } from 'src/app/types/types';


export const tutorialData: TutorialDataMap = {
  'fevm-hardhat': {
    title: 'FEVM Hardhat Kit Tutorial',
    steps: [
      {
        title: "Set up the environment",
        description: "Install Node.js, npm, and clone the FEVM Hardhat Kit repository.",
        code: `
git clone https://github.com/filecoin-project/fevm-hardhat-kit.git
cd fevm-hardhat-kit
npm install
`,
      },
      {
        title: "Configure the network",
        description: "Update the hardhat.config.js file with your network details.",
        code: `
// hardhat.config.js
module.exports = {
  networks: {
    calibration: {
      url: "https://api.calibration.node.glif.io/rpc/v1",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
`,
      },
      {
        title: "Write a smart contract",
        description: "Create a new Solidity file in the contracts directory.",
        code: `
// contracts/SimpleStorage.sol
pragma solidity ^0.8.17;

contract SimpleStorage {
    uint256 private value;

    function setValue(uint256 newValue) public {
        value = newValue;
    }

    function getValue() public view returns (uint256) {
        return value;
    }
}
`,
      },
      {
        title: "Compile and test",
        description: "Compile your contract and run tests.",
        code: `
npx hardhat compile
npx hardhat test
`,
      },
      {
        title: "Deploy the contract",
        description: "Deploy your contract to the Filecoin network.",
        code: `
npx hardhat run scripts/deploy.js --network calibration
`,
      },
    ],
  },
  'fevm-foundry': {
    title: 'FEVM Foundry Kit Tutorial',
    steps: [
      {
        title: "Set up the environment",
        description: "Install Foundry and clone the FEVM Foundry Kit repository.",
        code: `
curl -L https://foundry.paradigm.xyz | bash
foundryup
git clone https://github.com/filecoin-project/fevm-foundry-kit.git
cd fevm-foundry-kit
forge install
`,
      },
      {
        title: "Configure the network",
        description: "Update the foundry.toml file with your network details.",
        code: `
# foundry.toml
[rpc_endpoints]
calibration = "https://api.calibration.node.glif.io/rpc/v1"
`,
      },
      {
        title: "Write a smart contract",
        description: "Create a new Solidity file in the src directory.",
        code: `
// src/SimpleStorage.sol
pragma solidity ^0.8.17;

contract SimpleStorage {
    uint256 private value;

    function setValue(uint256 newValue) public {
        value = newValue;
    }

    function getValue() public view returns (uint256) {
        return value;
    }
}
`,
      },
      {
        title: "Compile and test",
        description: "Compile your contract and run tests.",
        code: `
forge build
forge test
`,
      },
      {
        title: "Deploy the contract",
        description: "Deploy your contract to the Filecoin network.",
        code: `
forge create --rpc-url $CALIBRATION_RPC_URL --private-key $PRIVATE_KEY src/SimpleStorage.sol:SimpleStorage
`,
      },
    ],
  },
  'fvm-deal-making': {
    title: 'FVM Deal Making Kit Tutorial',
    steps: [
      {
        title: "Set up the environment",
        description: "Clone the FVM Deal Making Kit repository and install dependencies.",
        code: `
git clone https://github.com/filecoin-project/fvm-starter-kit-deal-making.git
cd fvm-starter-kit-deal-making
npm install
`,
      },
      {
        title: "Prepare data for storage",
        description: "Use FVM Data Depot to prepare your data for storage on Filecoin.",
        code: `
# Example using FVM Data Depot CLI
fvm-data-depot prepare --input ./my-data --output ./prepared-data
`,
      },
      {
        title: "Deploy the DealClient contract",
        description: "Deploy the DealClient smart contract to the Filecoin network.",
        code: `
npx hardhat run scripts/deploy.js --network calibration
`,
      },
      {
        title: "Submit a storage deal",
        description: "Use the React frontend to submit a storage deal.",
        code: `
# Start the frontend application
npm run dev

# Open the browser and navigate to the deal submission page
# Fill in the deal parameters and submit
`,
      },
      {
        title: "Monitor deal status",
        description: "Use Hardhat tasks to check the status of your storage deal.",
        code: `
npx hardhat check-deal-status --deal-id <DEAL_ID> --network calibration
`,
      },
    ],
  },
  'raas': {
    title: 'RaaS Starter Kit Tutorial',
    steps: [
      {
        title: "Set up the environment",
        description: "Clone the RaaS Starter Kit repository and install dependencies.",
        code: `
git clone https://github.com/filecoin-project/raas-starter-kit.git
cd raas-starter-kit
npm install
`,
      },
      {
        title: "Deploy the DealStatus contract",
        description: "Deploy the DealStatus smart contract to the Filecoin network.",
        code: `
npx hardhat run scripts/deploy.js --network calibration
`,
      },
      {
        title: "Set up the event listener",
        description: "Configure and start the event listener for deal management.",
        code: `
# Update config.js with your contract address and RPC URL
npm run start-listener
`,
      },
      {
        title: "Implement the API",
        description: "Set up the API for job registration (renew, replicate, repair).",
        code: `
// api/index.js
const express = require('express');
const app = express();

app.post('/api/register-job', async (req, res) => {
  // Implement job registration logic
  // Interact with the DealStatus contract
});

app.listen(3000, () => console.log('API server running on port 3000'));
`,
      },
      {
        title: "Integrate with aggregator services",
        description: "Connect your RaaS implementation with Lighthouse or other aggregator services.",
        code: `
const lighthouse = require('@lighthouse-web3/sdk');

async function replicateDeal(dealId, newProvider) {
  // Initialize Lighthouse SDK
  const lighthouseSDK = await lighthouse.create();

  // Implement deal replication logic
  const result = await lighthouseSDK.replicateDeal(dealId, newProvider);

  return result;
}
`,
      },
    ],
  },
  'state-storage': {
    title: 'State/Storage Integration PoC Tutorial',
    steps: [
      {
        title: "Set up the environment",
        description: "Clone the State Storage Starter Kit repository and install dependencies.",
        code: `
git clone https://github.com/filecoin-project/state-storage-starter-kit.git
cd state-storage-starter-kit
npm install
`,
      },
      {
        title: "Deploy the Data Management Contract",
        description: "Deploy the DMC smart contract to the Filecoin network.",
        code: `
npx hardhat run scripts/deploy.js --network calibration
`,
      },
      {
        title: "Set up the client application",
        description: "Configure and start the client application simulation.",
        code: `
# Update config.js with your contract address and IPFS node details
npm run start-client
`,
      },
      {
        title: "Implement the IPFS relayer",
        description: "Set up the relayer for IPFS content retrieval.",
        code: `
// relayer/index.js
const IPFS = require('ipfs-http-client');

async function retrieveContent(cid) {
  const ipfs = await IPFS.create();
  const content = await ipfs.cat(cid);
  return content;
}

module.exports = { retrieveContent };
`,
      },
      {
        title: "Run the end-to-end workflow",
        description: "Execute the complete workflow to store data on IPFS and manage state on FVM.",
        code: `
// Example workflow
const { storeOnIPFS, updateState, retrieveAndValidate } = require('./workflow');

async function runWorkflow() {
  const data = 'Hello, Filecoin!';
  const cid = await storeOnIPFS(data);
  await updateState(cid);
  const retrievedData = await retrieveAndValidate(cid);
  console.log('Retrieved data:', retrievedData);
}

runWorkflow();
`,
      },
    ],
  },
};