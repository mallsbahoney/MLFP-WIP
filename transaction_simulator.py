export function simulateTransactionFlow(steps) {
    const log = [];
    for (const step of steps) {
        log.push(`Simulating: ${step}`);
    }
    return log;
}