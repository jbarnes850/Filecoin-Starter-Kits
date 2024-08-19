```mermaid
graph TD
    A[Start] --> B[Prepare Data]
    B --> C[Create Deal Proposal Payload]
    C --> D[Call makeDealProposal]
    D --> E[Emit DealProposalCreate Event]
    E --> F[Boost SP Picks Up Deal]
    F --> G[SP Retrieves Deal Proposal]
    G --> H[Data Transfer Begins]
    H --> I[SP Publishes Storage Deal On-chain]
    I --> J[End]

    B --> B1[Convert to .car file]
    B --> B2[Get carLink]
    B --> B3[Get pieceSize]
    B --> B4[Get DataCID commD]
    B --> B5[Get carSize]
    B --> B6[Get PieceCID commP]

    C --> C1[Prepare DealRequestStruct]
    C --> C2[Prepare extraParamsV1]

    D --> D1[Use Frontend Dapp]
    D --> D2[Use Hardhat Task]
