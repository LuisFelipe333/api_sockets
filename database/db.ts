
const { Client } = require('pg');
require('dotenv').config()

const connectionData = {
    user: 'user',
    host: '127.0.0.1',
    database: '',
    password: '',
    port: 5300
}

const client = new Client(connectionData);

client.connect(function(err: any) {
    if (err) throw err;
});

module.exports = client;