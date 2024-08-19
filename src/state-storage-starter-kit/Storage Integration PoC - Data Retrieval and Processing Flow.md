graph TD
    A[Start] --> B[Client Sends Retrieval Request]
    B --> C[DMC Emits BlobLoadReq Event]
    C --> D[Relayer Listens for Event]
    D --> E[Relayer Retrieves Content from IPFS]
    E --> F[Relayer Sends Data to DMC]
    F --> G[DMC Stores Data Temporarily]
    G --> H[Client Checks Request Status]
    H --> I{Data Ready?}
    I --> |No| H
    I --> |Yes| J[Client Retrieves Data from DMC]
    J --> K[Client Processes Data]
    K --> L[End]

    M[DMC Functions]
    M --> N[requestBlobLoad]
    M --> O[checkRequestStatus]
    M --> P[retrieve]

    Q[Relayer Functions]
    Q --> R[Listen for BlobLoadReq]
    Q --> S[Fetch from IPFS]
    Q --> T[Send to DMC]
