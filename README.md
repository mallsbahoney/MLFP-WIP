
# MLFP (MallsLabs Fiat Protocol)

MLFP is a Solana-powered protocol integrating MoonPay and Raydium to enable seamless, real-time fiat-to-crypto and crypto-to-fiat payments — usable globally by everyday users and merchants. It unlocks cross-chain interaction, automatic conversions, and real-world commerce through just a wallet app.

...

> Two wallets. One protocol. Infinite use cases.

Both wallets allow auto conversion for all incoming crypto into fiat, and all incoming fiat into crypto.

User Wallets are meant for every day personal use, while Merchant Wallets are meant for every day business use.

The wallets integrate directly with MoonPay & Raydium to use Solana as the main coordination layer for fiat transctions and crypto transactions - both on-chain & cross-chain.

Both wallets are built around 9 main automated flows that run in the backend to make the frontend user experience easy & smooth:

Buy Solana with Fiat
Front end: User sends Buy details —> 
Back end: MoonPay API —> triggers Buy for Solana with Fiat —> KYC (if first time) —> generated fiat payment link —> payment sent by bank account —> crypto sent by MoonPay to destination address

Buy Native Token with Fiat
Front end: User sends Buy details —> 
Back end: MoonPay API —> triggers Buy for Native Token with Fiat —> KYC (if first time) —> generated fiat payment link —> payment sent by bank account —> crypto sent by MoonPay to destination address

Buy Any Solana Token with Fiat 
Front end: User sends Buy details —> 
Back end: MoonPay API —> triggers Buy for Solana with Fiat —> KYC (if first time) —> generated fiat payment link —> payment sent by bank account —> crypto sent by MoonPay to destination address -> triggers automated Swap request for SOL to Token —> Raydium API -> Swap completed —> User wallet receives Token

Sell Solana for Fiat
Front end: User sends Sell details —> 
Back end: MoonPay API —> Trigger Sale for Solana to Fiat —> KYC (if first time) —> generated crypto payment address —> triggers automated Solana txn to generated crypto payment address —> fiat sent by MoonPay to destination bank account 

Sell Any Solana Token for Fiat
Front end: User sends Sell details —> 
Back end: Raydium API —> automated swap of (token) to SOL —> MoonPay API —> Trigger Sale for Solana to Fiat —> KYC (if first time) —> generated crypto payment address —> triggers automated Solana txn to generated crypto payment address —> fiat sent by MoonPay to destination bank account 

Convert Any Native Token into Solana 
Front end: User sends Swap details —> 
Back end: MoonPay API —> Trigger Swap for Native Token to Solana —> KYC (if first time) —> generated crypto payment address —> User manually sends Native Token to generated crypto payment address from external wallet —> Solana sent by MoonPay to destination wallet address 

Convert Any Native Token into Solana Wrapped Token
Front end: User sends Swap details —> 
Back end: MoonPay API —> Trigger Swap for Native Token to Solana —> KYC (if first time) —> generated crypto payment address —> User sends Native Token to generated crypto payment address from external wallet —> Solana sent by MoonPay to destination wallet address —>  triggers a Swap of Solana to Wrapped Token —> Swap completed —> User receives Wrapped token

Convert Solana into a Native Token
Front end: User sends Swap details —> 
Back end: MoonPay API —> Trigger Swap for Solana to Native Token —> KYC (if first time) —> generated crypto payment address —> Triggers automated txn of Solana to generated crypto payment address from external wallet—> Native Token sent by MoonPay to destination wallet address 

Convert Any Solana Token into a Native Token
Front end: User sends Swap details —> 
Back end: Raydium API —> Swaps token into SOL —> MoonPay API —> Trigger Swap for Solana to Native Token —> KYC (if first time) —> generated crypto payment address —> Triggers automated txn of Solana to generated crypto payment address from external wallet —> Native Token sent by MoonPay to destination wallet address 
