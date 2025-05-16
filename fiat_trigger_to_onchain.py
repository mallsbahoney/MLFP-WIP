export function fiatTriggerToOnChain(data) {
    if (data.confirmed) {
        return 'Triggering on-chain smart contract action based on fiat confirmation.';
    }
    return 'Awaiting fiat confirmation...';
}