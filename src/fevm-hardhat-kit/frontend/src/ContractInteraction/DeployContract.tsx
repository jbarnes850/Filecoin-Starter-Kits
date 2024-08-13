import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ethers } from 'ethers';
import { getSigner } from '../utils/ethers';
import { setContract } from '../store/contractSlice';

const DeployContract: React.FC = () => {
  const [deploying, setDeploying] = useState(false);
  const dispatch = useDispatch();

  const handleDeploy = async () => {
    setDeploying(true);
    try {
      const signer = await getSigner();
      const factory = new ethers.ContractFactory(
        ['function get() public view returns (uint)'],
        '0x608060405234801561001057600080fd5b50600560008190555060b6806100276000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c80636d4ce63c14602d575b600080fd5b60336047565b604051603e91906064565b60405180910390f35b60008054905090565b6000819050919050565b605e81604f565b82525050565b6000602082019050607760008301846057565b9291505056fea2646970667358221220b3b9e7c9f9b6d2b5b7e4d4b1b9b0b9b0b9b0b9b0b9b0b9b0b9b0b9b0b9b0b9b064736f6c63430008090033',
        signer
      );
      const contract = await factory.deploy();
      await contract.deployed();
      dispatch(setContract({ address: contract.address, abi: contract.interface.format() }));
      alert(`Contract deployed at ${contract.address}`);
    } catch (error) {
      console.error('Error deploying contract:', error);
      alert('Error deploying contract. See console for details.');
    } finally {
      setDeploying(false);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Deploy Contract</h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleDeploy}
        disabled={deploying}
      >
        {deploying ? 'Deploying...' : 'Deploy Contract'}
      </button>
    </div>
  );
};

export default DeployContract;