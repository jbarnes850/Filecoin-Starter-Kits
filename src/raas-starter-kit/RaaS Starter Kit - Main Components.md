graph TD
    A[RaaS Starter Kit] --> B[Smart Contracts]
    A --> C[RaaS Application]
    A --> D[API Frontend]
    A --> E[Configuration]

    B --> B1[DealStatus Contract]
    B --> B2[ILighthouseDealStatus Interface]
    
    C --> C1[eventListener.js]
    C --> C2[Job Handling Logic]
    
    D --> D1[REST API Endpoints]
    D --> D2[Job Registration]
    
    E --> E1[.env Configuration]
    E --> E2[Hardhat Config]
    
    F[External Services]
    F --> F1[Lighthouse Aggregator]
    F --> F2[IPFS]
    
    A --> F
