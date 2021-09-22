const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin
})

const client = net.createConnection({
  host: '127.0.0.1',
  port: 3001
});

client.setEncoding('utf8');

// listening for data from server
client.on("data", (data) => {
  console.log(data);
})


// ability to write data to server
rl.on('line', (input) => {
  client.write(`${input}\n`)
})

// listening for server to close
client.on('end', () => {
  console.log('disconnected from the server');
  rl.close();
})
