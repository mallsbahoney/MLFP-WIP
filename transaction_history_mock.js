let history = [];

export function logTransaction(tx) {
    history.push({ ...tx, timestamp: new Date().toISOString() });
}

export function getTransactionHistory() {
    return history;
}