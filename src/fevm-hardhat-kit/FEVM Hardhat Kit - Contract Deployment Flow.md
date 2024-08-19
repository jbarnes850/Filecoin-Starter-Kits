graph TD
    A[Start] --> B[Clone FEVM Hardhat Kit]
    B --> C[Install Dependencies]
    C --> D[Set up Private Key]
    D --> E[Get Deployer Address]
    E --> F[Fund Deployer Address]
    F --> G[Deploy Contracts]
    G --> H[Verify Deployment]
    H --> I[Interact with Contracts]
    I --> J[End]

    D --> D1[Export as Environment Variable]
    D --> D2[Use .env File]
    D1 --> E
    D2 --> E

    G --> G1[Compile Contracts]
    G1 --> G2[Deploy to Calibrationnet]
    G2 --> H

    I --> I1[Use Hardhat Tasks]
    I --> I2[Use Frontend Application]
