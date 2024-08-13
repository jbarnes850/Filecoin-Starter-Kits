import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { getContract } from '../utils/ethers';

const InteractContract: React.FC = () => {
  const [value, setValue] = useState<string>('');
  const { address, abi } = useSelector((state: RootState) => state.contract);

  const handleGet = async () => {
    if (!address || !abi) {
      alert('Contract not deployed yet');
      return;
    }

    try {
      const contract = await getContract(address, abi);
      const result = await contract.get();
      setValue(result.toString());
    } catch (error) {
      console.error('Error calling contract:', error);
      alert('Error calling contract. See console for details.');
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Interact with Contract</h2>
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={handleGet}
      >
        Get Value
      </button>
      <span>Value: {value}</span>
    </div>
  );
};

export default InteractContract;