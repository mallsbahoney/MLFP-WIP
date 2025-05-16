import React from 'react';
import { simulateRaydiumSwap } from '../api/raydium';

export default function TokenManager() {
  const handleWrap = async () => {
    const res = await simulateRaydiumSwap('SOL', 'wBTC');
    console.log('Wrapped:', res);
  };

  const handleUnwrap = async () => {
    const res = await simulateRaydiumSwap('wBTC', 'SOL');
    console.log('Unwrapped:', res);
  };

  return (
    <div>
      <h2>Token Management</h2>
      <button onClick={handleWrap}>Wrap Token</button>
      <button onClick={handleUnwrap}>Unwrap Token</button>
    </div>
  );
}