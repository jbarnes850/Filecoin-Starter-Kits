graph TD
    A[Start] --> B[Install Foundry]
    B --> C[Clone FEVM Foundry Kit]
    C --> D[Install Dependencies]
    D --> E[Set up Private Key]
    E --> F[Fund Deployer Address]
    F --> G[Build Contracts]
    G --> H[Deploy Contract]
    H --> I[Verify Deployment]
    I --> J[Interact with Contract]
    J --> K[End]

    E --> E1[Export as Environment Variable]
    E --> E2[Use .env File]
    E1 --> F
    E2 --> F

    H --> H1[Handle Gas Issues]
    H1 --> H
