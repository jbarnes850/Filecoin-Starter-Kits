import React from 'react';
import DeployContract from '../components/ContractInteraction/DeployContract';

const Deploy: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Deploy Contract</h1>
      <DeployContract />
    </div>
  );
};

export default Deploy;