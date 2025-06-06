
# MLFP (MallsLabs Fiat Protocol)

MLFP (working title) is a Solana-powered universal wallet integrating MoonPay and Raydium to enable seamless, real-time fiat-to-crypto and crypto-to-fiat payments — usable globally by everyday users and merchants. It unlocks cross-chain interaction, automatic conversions, and real-world commerce through just a wallet app.

Preview Wallet here: https://ohara.ai/mini-apps/miniapp_cmbgl7p8r0hcd0skj34727y85

...

> One wallet. Infinite use cases.

Please use included demo link above for usage example, and use the HTML simulator code to see a visualization of the back end flows of the wallet.

Concept Summary:

This is a decentralized crypto wallet that uses Solana as the main coordination layer for fiat on/off ramps. Wrapped tokens are used to represent other chain's native tokens, as they can easily be swapped back into SOL, and then swapped into the native token via MoonPay. 

Solana is used as the main coordination layer because of its speed & low gas fees. 

User Wallets are for everyday use.

Each user has separate log-in info to activate Merchant Mode.

Merchant Mode is the same interface connected to the same user wallet, but is receive only: meaning it removes the ability to see held token balances or send from them. This allows any merchant to safely access a wallet's Merchant Mode on any device, without risking any existing funds.

There are 9 automated back flows that power the wallet, but the user flow can be summarized like this:

-Paying with CASH = MoonPay buy of SOL which goes to recipient address.

-Paying with CRYPTO = Direct token send to recipient’s address using SOL or any SOL token.

-Once the Solana crypto is in the recipient’s wallet, it is either held, swapped to a diff token, or sold via MoonPay for cash. 

This wallet allows auto conversion for all incoming crypto into fiat, and all incoming fiat into crypto.

This wallet can be used for every day personal use, and/or used for every day business use.

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

If a user is using already held crypto to pay witnout the need for conversion, it is simply a standard Solana transaction, and any automated flow occurs locally once the crypto is received.
