graph TD
    A[FEVM Foundry Kit] --> B[Contracts]
    A --> C[Scripts]
    A --> D[Tests]
    A --> E[Configuration Files]

    B --> B1[Basic Solidity Examples]
    B --> B2[Filecoin API Examples]
    B --> B3[Basic Deal Client]
    
    C --> C1[Deployment Scripts]
    C --> C2[Interaction Scripts]
    
    D --> D1[Contract Tests]
    
    E --> E1[foundry.toml]
    E --> E2[.env]
    
    F[External Dependencies]
    F --> F1[Filecoin.sol Library]
    F --> F2[OpenZeppelin Contracts]
    
    A --> F
