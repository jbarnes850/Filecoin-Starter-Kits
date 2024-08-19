# Contributing to Filecoin Starter Kits

Hey there! Thanks for your interest in contributing to the Filecoin Starter Kits. We're excited to have you on board! This guide will walk you through the basics of how to contribute to our project. We've tried to keep things simple and straightforward, so whether you're a seasoned open-source contributor or just getting started, you should find everything you need here.

Our goal is to make your experience as a contributor enjoyable and rewarding. So, let's dive in and see how you can help make the Filecoin Starter Kits even better!

## Table of Contents

1. [Introduction to Filecoin](#introduction-to-filecoin)
2. [Getting Started](#getting-started)
3. [Development Environment Setup](#development-environment-setup)
4. [Code Style and Standards](#code-style-and-standards)
5. [Testing Guidelines](#testing-guidelines)
6. [Documentation](#documentation)
7. [Submitting Changes](#submitting-changes)
8. [Community and Communication](#community-and-communication)
9. [Licensing](#licensing)

## Introduction to Filecoin

Before diving into contributions, it's crucial to understand the Filecoin network and its ecosystem. Filecoin is a decentralized storage network designed to store humanity's most important information. As a contributor, you'll be helping developers interact with this groundbreaking technology.

Key resources:

- [Filecoin Documentation](https://docs.filecoin.io/)
- [Filecoin Specification](https://spec.filecoin.io/)
- [FVM (Filecoin Virtual Machine)](https://fvm.filecoin.io/)

## Getting Started

1. **Fork the repository**: Click the 'Fork' button at the top right of this repository.
2. **Clone your fork**:

   ```
   git clone https://github.com/YOUR-USERNAME/filecoin-starter-kits.git
   ```

3. **Set up upstream remote**:

   ```
   git remote add upstream https://github.com/ORIGINAL-OWNER/filecoin-starter-kits.git
   ```

4. **Create a new branch**:

   ```
   git checkout -b feature/your-feature-name
   ```

5. **Make your changes**: Implement your feature or bug fix.
6. **Commit your changes**:

   ```
   git commit -am 'Add some feature'
   ```

7. **Push to your fork**:

   ```
   git push origin feature/your-feature-name
   ```

8. **Submit a pull request**: Go to the original repository and click 'New pull request'.

## Development Environment Setup

1. Install Node.js (v14 or later) and npm.
2. Install Rust and Cargo for certain Filecoin tools.
3. Set up a local Filecoin network using [Lotus](https://lotus.filecoin.io/lotus/install/local-network/).
4. For FEVM development, install Hardhat or Foundry as per the kit you're working on.

## Code Style and Standards

We follow strict coding standards to ensure consistency across the project:

- **JavaScript/TypeScript**: Run `npm run lint` before submitting your PR.
- **Solidity**: Follow the [Solidity Style Guide](https://docs.soliditylang.org/en/v0.8.17/style-guide.html).
- **Go**: Adhere to the [Effective Go](https://golang.org/doc/effective_go) guidelines.
- **Rust**: Follow the [Rust Style Guide](https://rust-lang.github.io/api-guidelines/about.html).

Ensure your code is well-commented and self-explanatory where possible.

## Testing Guidelines

Thorough testing is crucial for maintaining the quality and reliability of the Filecoin Starter Kits:

- **Unit Tests**: Write unit tests for all new functions and methods.
- **Integration Tests**: Ensure your changes work well with existing components.
- **End-to-End Tests**: For frontend changes, include Cypress tests.
- **Smart Contract Tests**: Use Hardhat or Foundry for testing smart contracts.

Run tests using `npm test` and ensure all tests pass before submitting your PR.

## Documentation

Good documentation is as important as good code:

- Update README files if you change functionality.
- Add JSDoc comments for new JavaScript/TypeScript functions.
- For significant changes, update or create new documentation in the `docs/` directory.

## Submitting Changes

1. Ensure all tests pass and linting issues are resolved.
2. Update the README.md with details of changes to the interface, if applicable.
3. Increase the version numbers in any examples files and the README.md to the new version that this Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
4. Submit a pull request to the main repository.
5. The core team will review your pull request and provide feedback or merge it.

## Community and Communication

- Join the [Filecoin Slack](https://filecoin.io/slack) for real-time communication with the community.
- Participate in discussions on [Filecoin Discussion Forum](https://discuss.filecoin.io/).
- Follow [@Filecoin](https://twitter.com/Filecoin) on Twitter for latest updates.

## Licensing

By contributing to Filecoin Starter Kits, you agree that your contributions will be licensed under the MIT License.

Thank you for your interest in contributing to Filecoin Starter Kits. Your efforts help make the Filecoin ecosystem more accessible and powerful for developers worldwide!
