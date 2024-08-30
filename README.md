# Filecoin Starter Kits

![Version](https://img.shields.io/badge/Version-0.2.0-blue.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)
[![Twitter Follow](https://img.shields.io/twitter/follow/Filecoin?style=social)](https://twitter.com/Filecoin)

Welcome to the Filecoin Starter Kits repository! This project provides developers with a comprehensive set of tools and examples to build on the Filecoin network. Whether you're new to Filecoin or an experienced developer, you'll find resources here to jumpstart your project.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Starter Kits](#starter-kits)
- [Documentation](#documentation)
- [Quick Start Guide](#quick-start-guide)
- [Updating Dependencies](#updating-dependencies)
- [Repository Structure](#repository-structure)
- [Getting Test Tokens](#getting-test-tokens)
- [Contributing](#contributing)
- [Support](#support)

## Overview

This repository contains multiple starter kits, each designed to showcase different aspects of Filecoin development. From smart contract development to storage deal management, these kits cover a wide range of Filecoin functionalities.

## Prerequisites

Before using any of the starter kits, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14.x or later)
- [npm](https://www.npmjs.com/) (v6.x or later) or [yarn](https://yarnpkg.com/) (v1.22.x or later)
- [Git](https://git-scm.com/) (v2.x or later)

Depending on the specific starter kit, you may also need:

- [Rust](https://www.rust-lang.org/) (latest stable version)
- [Go](https://golang.org/) (v1.16 or later)
- [Docker](https://www.docker.com/) (latest stable version)

Please refer to each starter kit's individual README.md for specific requirements.

## Starter Kits

Each starter kit is maintained as a separate repository within the `src` directory of this project. Here are the included kits:

1. **FEVM Hardhat Kit**: A starter kit for building smart contracts on Filecoin using Hardhat.
   - Source: [fevm-hardhat-kit](https://github.com/filecoin-project/fevm-hardhat-kit)
   - Local path: `src/fevm-hardhat-kit`

2. **FEVM Foundry Kit**: A starter kit for building and testing smart contracts on Filecoin using Foundry.
   - Source: [fevm-foundry-kit](https://github.com/filecoin-project/fevm-foundry-kit)
   - Local path: `src/fevm-foundry-kit`

3. **FVM Starter Kit (Deal Making)**: A kit focused on creating and managing storage deals on Filecoin.
   - Source: [fvm-starter-kit-deal-making](https://github.com/filecoin-project/fvm-starter-kit-deal-making)
   - Local path: `src/fvm-starter-kit-deal-making`

4. **RaaS Starter Kit**: A starter kit for working with Filecoin's Retrieval as a Service (RaaS).
   - Source: [raas-starter-kit](https://github.com/filecoin-project/raas-starter-kit)
   - Local path: `src/raas-starter-kit`

5. **State Storage Starter Kit**: A kit for understanding and interacting with Filecoin's state storage.
   - Source: [state-storage-starter-kit](https://github.com/filecoin-project/state-storage-starter-kit)
   - Local path: `src/state-storage-starter-kit`

## Documentation

Comprehensive documentation for this project can be found in the [docs](main/docs) directory:

- [Contributing Guide](/main/docs/CONTRIBUTING.md)
- [Architecture Overview](/main/docs/ARCHITECTURE.md)

## Quick Start Guide

1. Clone this repository:

   ```
   git clone https://github.com/filecoin-project/filecoin-starter-kits.git
   cd filecoin-starter-kits
   ```

2. Initialize and update the submodules:

   ```
   git submodule update --init --recursive
   ```

3. Choose a starter kit and navigate to its directory:

   ```
   cd src/<starter-kit-name>
   ```

4. Follow the specific setup instructions in the starter kit's README.md file.

## Updating Dependencies

To keep all starter kits up-to-date, we've provided a script to update dependencies across all projects:

1. Ensure you're in the root directory of the repository.
2. Run the update script:

   ```
   ./scripts/update-dependencies.sh
   ```

This script will go through each starter kit in the `src` directory and update its dependencies.

Note: After updating dependencies, make sure to test each starter kit to ensure compatibility.

## Repository Structure

- `main` branch: Contains all docs and shared resources.
- `src/`: Contains each starter kit as a separate repository.

## Getting Test Tokens

To test your smart contracts and applications on the Calibration testnet, you'll need test tokens. Here's how to get them:

1. Set up MetaMask for the Calibration testnet. MetaMask uses the t4 address type, which is compatible with Solidity contracts. If you haven't set up MetaMask yet, follow the [MetaMask setup guide](https://docs.filecoin.io/smart-contracts/developing-contracts/metamask-setup/).

2. Open MetaMask in your browser and copy your address.

3. Go to the [Calibration testnet faucet](https://faucet.calibnet.chainsafe-fil.io/).

4. Click "Send Funds", paste your address into the address field, and click "Send funds" again.

5. The faucet will provide you with a transaction ID. You can use this ID in a block explorer to track the progress of your transaction.

For more detailed information about getting test tokens, including how to get tokens on a local testnet, please refer to the [official Filecoin documentation](https://docs.filecoin.io/smart-contracts/developing-contracts/get-test-tokens).

## Contributing

We welcome contributions to improve the starter kits or add new ones! Please see our [CONTRIBUTING.md](./main/docs/CONTRIBUTING.md) file for guidelines.

## Support

If you need help or have questions:

- Open an issue in this repository
- Join our [Discord community](https://discord.gg/filecoin)
- Visit the [Filecoin documentation](https://docs.filecoin.io/)

Happy building with Filecoin!
