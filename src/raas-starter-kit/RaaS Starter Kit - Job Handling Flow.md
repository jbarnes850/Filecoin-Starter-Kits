```mermaid
graph TD
    A[Start] --> B[User Submits Job]
    B --> C[API Receives Job Request]
    C --> D[Validate Job Parameters]
    D --> E[Register Job]
    E --> F[Monitor Smart Contract Events]
    F --> G{Job Type?}
    G --> |Replication| H[Create New Deal]
    G --> |Renewal| I[Renew Existing Deal]
    G --> |Repair| J[Repair Existing Deal]
    H --> K[Upload to Aggregator]
    I --> K
    J --> K
    K --> L[Update Local State]
    L --> M[Periodically Check Deal Status]
    M --> N{Need Action?}
    N --> |Yes| O[Execute Required Job]
    N --> |No| M
    O --> P[Update Smart Contract]
    P --> Q[End]
