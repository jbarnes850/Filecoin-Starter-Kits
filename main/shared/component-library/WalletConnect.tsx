import React from 'react';
import { formatAddress } from '../utils/addressFormatter';
import Button from '../components/Button';

interface WalletConnectProps {
  isConnected: boolean;
  address: string | null;
  onConnect: () => void;
  onDisconnect: () => void;
}

const WalletConnect: React.FC<WalletConnectProps> = ({
  isConnected,
  address,
  onConnect,
  onDisconnect,
}) => {
  return (
    <div className="wallet-connect">
      {isConnected ? (
        <div className="wallet-connected">
          <p className="wallet-address">Connected: {formatAddress(address || '')}</p>
          <Button onClick={onDisconnect}>Disconnect</Button>
        </div>
      ) : (
        <Button onClick={onConnect}>Connect Wallet</Button>
      )}
    </div>
  );
};

export default WalletConnect;