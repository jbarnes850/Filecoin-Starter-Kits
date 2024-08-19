```mermaid
graph TD
    A[State/Storage Integration PoC] --> B[Smart Contracts]
    A --> C[Client Application]
    A --> D[Relayer]
    A --> E[Scripts]
    A --> F[Tests]

    B --> B1[Data Management Contract DMC]
    
    C --> C1[Send Retrieval Request]
    C --> C2[Check Request Status]
    C --> C3[Process Retrieved Data]
    
    D --> D1[Event Listener]
    D --> D2[IPFS Content Retrieval]
    D --> D3[Data Submission to DMC]
    
    E --> E1[Deployment Scripts]
    E --> E2[Client Simulation Scripts]
    E --> E3[Relayer Simulation Script]
    
    F --> F1[Contract Tests]
    
    G[External Services]
    G --> G1[IPFS]
    G --> G2[Filecoin Network]
    
    A --> G
