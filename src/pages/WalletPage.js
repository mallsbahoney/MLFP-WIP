import React from 'react';
import WalletSetup from '../components/WalletSetup';
import TokenManager from '../components/TokenManager';
import MerchantPanel from '../components/MerchantPanel';

export default function WalletPage() {
  return (
    <div>
      <h1>MLFP Wallet</h1>
      <WalletSetup />
      <TokenManager />
      <MerchantPanel />
    </div>
  );
}