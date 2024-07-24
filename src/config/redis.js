const Redis = require('ioredis');

const client = new Redis();

client.on('connect', () => console.log('Redis Client Connected'));
client.on('error', (err) => console.log('Redis Client Connection Error', err));

module.exports = client;
