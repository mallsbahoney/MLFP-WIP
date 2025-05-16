import React from 'react';

export default function MerchantPanel() {
  const handleCryptoToFiat = () => {
    console.log('Simulating crypto to fiat payment...');
  };

  const handleFiatToCrypto = () => {
    console.log('Simulating fiat to crypto payment...');
  };

  return (
    <div>
      <h2>Merchant Panel</h2>
      <button onClick={handleCryptoToFiat}>Accept Crypto, Receive Fiat</button>
      <button onClick={handleFiatToCrypto}>Accept Fiat, Deliver Crypto</button>
    </div>
  );
}