graph TD
    A[FEVM Hardhat Kit] --> B[Contracts]
    A --> C[Tasks]
    A --> D[Scripts]
    A --> E[Configuration Files]
    A --> F[Frontend Application]

    B --> B1[Basic Solidity Examples]
    B --> B2[Filecoin API Examples]
    B --> B3[Basic Deal Client]
    
    C --> C1[Deployment Tasks]
    C --> C2[Interaction Tasks]
    
    D --> D1[Deployment Scripts]
    
    E --> E1[hardhat.config.ts]
    E --> E2[.env]
    
    F --> F1[React Components]
    F --> F2[Redux State Management]
    F --> F3[React Router]
    F --> F4[Tailwind CSS]
    
    G[External Dependencies]
    G --> G1[Filecoin.sol Library]
    G --> G2[OpenZeppelin Contracts]
    
    A --> G
