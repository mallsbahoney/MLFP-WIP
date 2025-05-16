const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    const event = req.body;
    console.log('Received Webhook:', event);

    fs.readFile('./backend/db.json', (err, data) => {
        let logs = JSON.parse(data || '[]');
        logs.push(event);
        fs.writeFile('./backend/db.json', JSON.stringify(logs, null, 2), () => {
            res.status(200).send('Event logged');
        });
    });
});

app.listen(3001, () => console.log('Webhook server running on port 3001'));