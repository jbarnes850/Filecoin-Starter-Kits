# Filecoin Starter Kits

![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)

Welcome to the Filecoin Starter Kits repository! This project provides developers with a comprehensive set of tools and examples to build on the Filecoin network. Whether you're new to Filecoin or an experienced developer, you'll find resources here to jumpstart your project.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Starter Kits](#starter-kits)
- [Quick Start Guide](#quick-start-guide)
- [Repository Structure](#repository-structure)
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

Please refer to each starter kit's individual README for specific requirements.

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

## Repository Structure

- `main` branch: Contains this README and shared resources.
- `src/`: Contains each starter kit as a separate repository.
- `common-components/`: A library of reusable frontend components (in development).

## Contributing

We welcome contributions to improve the starter kits or add new ones! Please see our [CONTRIBUTING.md](./CONTRIBUTING.md) file for guidelines.

## Support

If you need help or have questions:
- Open an issue in this repository
- Join our [Discord community](https://discord.gg/filecoin)
- Visit the [Filecoin documentation](https://docs.filecoin.io/)

Happy building with Filecoin!