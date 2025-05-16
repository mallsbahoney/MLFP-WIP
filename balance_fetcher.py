import { Connection, PublicKey } from '@solana/web3.js';

export async function fetchSolBalance(walletAddress, rpcUrl) {
    const connection = new Connection(rpcUrl);
    const publicKey = new PublicKey(walletAddress);
    const balance = await connection.getBalance(publicKey);
    return balance / 1e9;
}