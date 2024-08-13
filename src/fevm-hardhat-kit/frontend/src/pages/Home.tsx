import React from 'react';
import WalletConnect from '../components/WalletConnection/WalletConnect';

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to FEVM Hardhat Kit</h1>
      <WalletConnect />
    </div>
  );
};

export default Home;