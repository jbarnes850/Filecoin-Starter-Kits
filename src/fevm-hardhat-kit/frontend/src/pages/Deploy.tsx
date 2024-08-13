import React from 'react';
import DeployContract from '../ContractInteraction/DeployContract';

const Deploy: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Deploy Contract</h1>
      <p className="mb-4">
        This page allows you to deploy a simple contract to the Filecoin network.
        Make sure you have set up your environment variables and funded your account
        with test tokens before deploying.
      </p>
      <DeployContract />
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-2">Next Steps</h2>
        <ul className="list-disc list-inside">
          <li>After deployment, note the contract address for future interactions.</li>
          <li>You can interact with the deployed contract on the Interact page.</li>
          <li>Check the console for any deployment errors or additional information.</li>
        </ul>
      </div>
    </div>
  );
};

export default Deploy;