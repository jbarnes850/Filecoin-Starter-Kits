import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { connectWallet, disconnectWallet } from '../store/walletSlice';
import { RootState } from '../store/store';
import { getSigner } from '../utils/ethers';

const WalletConnect: React.FC = () => {
  const dispatch = useDispatch();
  const { address, isConnected } = useSelector((state: RootState) => state.wallet);

  const handleConnect = async () => {
    try {
      const signer = await getSigner();
      const address = await signer.getAddress();
      dispatch(connectWallet(address));
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    }
  };

  const handleDisconnect = () => {
    dispatch(disconnectWallet());
  };

  return (
    <div>
      {isConnected ? (
        <div>
          <p>Connected: {address}</p>
          <button onClick={handleDisconnect}>Disconnect</button>
        </div>
      ) : (
        <button onClick={handleConnect}>Connect Wallet</button>
      )}
    </div>
  );
};

export default WalletConnect;