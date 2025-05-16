import React, { useEffect, useState } from 'react';

export default function TransactionHistory() {
    const [logs, setLogs] = useState([]);

    useEffect(() => {
        fetch('/backend/db.json')
            .then(res => res.json())
            .then(setLogs);
    }, []);

    return (
        <div>
            <h3>Transaction History</h3>
            <ul>
                {logs.map((log, idx) => (
                    <li key={idx}>{JSON.stringify(log)}</li>
                ))}
            </ul>
        </div>
    );
}