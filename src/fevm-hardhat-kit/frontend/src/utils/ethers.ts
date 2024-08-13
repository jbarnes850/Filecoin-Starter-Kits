import { ethers } from 'ethers';

declare global {
  interface Window {
    ethereum?: any;
  }
}

export const getProvider = () => {
  if (typeof window.ethereum !== 'undefined') {
    return new ethers.providers.Web3Provider(window.ethereum);
  }
  throw new Error('No Ethereum provider found');
};

export const getSigner = async () => {
  const provider = getProvider();
  await provider.send("eth_requestAccounts", []);
  return provider.getSigner();
};

export const getContract = async (address: string, abi: any) => {
  const signer = await getSigner();
  return new ethers.Contract(address, abi, signer);
};