import { Keypair } from '@solana/web3.js';

export function generateKeypair() {
    const keypair = Keypair.generate();
    return {
        publicKey: keypair.publicKey.toBase58(),
        secretKey: Array.from(keypair.secretKey),
    };
}