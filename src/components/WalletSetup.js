import React, { useState } from 'react';

export default function WalletSetup() {
  const [wallet, setWallet] = useState(null);

  const generateWallet = () => {
    const keypair = 'SIMULATED_KEYPAIR';
    setWallet(keypair);
  };

  return (
    <div>
      <h2>Wallet Setup</h2>
      <button onClick={generateWallet}>Generate Wallet</button>
      {wallet && <p>Wallet: {wallet}</p>}
    </div>
  );
}