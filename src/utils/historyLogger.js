import fs from 'fs';

export const logTransaction = (txn) => {
    const path = './backend/db.json';
    let logs = [];
    if (fs.existsSync(path)) {
        logs = JSON.parse(fs.readFileSync(path));
    }
    logs.push({ ...txn, timestamp: new Date().toISOString() });
    fs.writeFileSync(path, JSON.stringify(logs, null, 2));
};