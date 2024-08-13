import React from 'react';
import InteractContract from '../components/ContractInteraction/InteractContract';

const Interact: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Interact with Contract</h1>
      <InteractContract />
    </div>
  );
};

export default Interact;