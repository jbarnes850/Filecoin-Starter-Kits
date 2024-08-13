import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ethers } from 'ethers';
import { getSigner } from '../utils/ethers';
import { setContract } from '../store/contractSlice';

// Simplified ABI and bytecode for demonstration
const simpleCoinABI = [
  "function mint(address receiver, uint amount) public",
  "function balances(address account) public view returns (uint)",
];
const simpleCoinBytecode = "608060405234801561001057600080fd5b50610771806100206000396000f3fe608060405234801561001057600080fd5b50600436106100575760003560e01c80631249c58b1461005c57806318160ddd1461006657806340c10f19146100845780637bd703e8146100b457806370a08231146100e4575b600080fd5b610064610114565b005b61006e6101b9565b60405161007b91906105c9565b60405180910390f35b61009e6004803603810190610099919061043d565b6101bf565b6040516100ab91906105c9565b60405180910390f35b6100ce60048036038101906100c99190610400565b6102a2565b6040516100db91906105c9565b60405180910390f35b6100fe60048036038101906100f99190610400565b6102ba565b60405161010b91906105c9565b60405180910390f35b60008060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905060005481116101635750610165565b50805b33600760006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b60005481565b6000600760009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461021b57600080fd5b81600080848152602001908152602001600020600082825461023e91906105e4565b925050819055508160008082825461025691906105e4565b92505081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546102ab91906105e4565b925050819055505092915050565b60016020528060005260406000206000915090505481565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b60008135905061031581610707565b92915050565b60008135905061032a8161071e565b92915050565b60008135905061033f81610735565b92915050565b60006020828403121561035b5761035a6106eb565b5b600061036984828501610306565b91505092915050565b6000806040838503121561038957610388610";

const DeployContract: React.FC = () => {
  const [deploying, setDeploying] = useState(false);
  const dispatch = useDispatch();

  const handleDeploy = async () => {
    setDeploying(true);
    try {
      const signer = await getSigner();
      const factory = new ethers.ContractFactory(
        simpleCoinABI,
        simpleCoinBytecode,
        signer
      );
      const tokensToBeMinted = 1000000; // Set the initial number of tokens to be minted
      const contract = await factory.deploy(tokensToBeMinted);
      await contract.deployed();
      dispatch(setContract({ address: contract.address, abi: simpleCoinABI }));
      alert(`SimpleCoin contract deployed at ${contract.address}`);
      console.log(`SimpleCoin contract deployed at ${contract.address}`);
      
      // Log the initial balance of the deployer
      const deployerAddress = await signer.getAddress();
      const balance = await contract.balances(deployerAddress);
      console.log(`Initial balance of deployer: ${balance.toString()} tokens`);
    } catch (error) {
      console.error('Error deploying contract:', error);
      alert('Error deploying contract. See console for details.');
    } finally {
      setDeploying(false);
    }
  };

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">Deploy SimpleCoin Contract</h2>
      <p className="mb-4">
        This will deploy a SimpleCoin contract to the Calibration testnet with an initial supply of 1,000,000 tokens. Make sure you have test FIL in your account.
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleDeploy}
        disabled={deploying}
      >
        {deploying ? 'Deploying...' : 'Deploy SimpleCoin Contract'}
      </button>
    </div>
  );
};

export default DeployContract;