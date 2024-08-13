import React from 'react';
import InteractContract from '../ContractInteraction/InteractContract';

const Interact: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Interact with Contract</h1>
      <p className="mb-4">
        This page allows you to interact with the deployed contract on the Filecoin network.
        Make sure you have deployed a contract before attempting to interact with it.
      </p>
      <InteractContract />
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Next Steps</h2>
        <ul className="list-disc list-inside">
          <li>Use the "Get Value" button to retrieve the current value from the contract.</li>
          <li>Check the console for any interaction errors or additional information.</li>
          <li>You can deploy a new contract on the Deploy page if needed.</li>
        </ul>
      </div>
    </div>
  );
};

export default Interact;