const net = require('net');
const port = 3001;

const { generateRandomEmoji, generateRandomId } = require('./helpers');

const clients = [];

const writeToAllClients = (data, client, listOfClients) => {
  for(singleClient of listOfClients) {
    if(singleClient.id !== client.id) {
      singleClient.write(`\t${client.avatar}: ${data}`)
    }
  }
}

// create a tcp server
const server = net.createServer();

server.on("connection", (connection) => {
  connection.setEncoding('utf8')
  
  // assign id 
  connection.id = generateRandomId();
  connection.avatar = generateRandomEmoji();
  
  // add connection to our list of clients
  clients.push(connection)

  // console.log("what is this connection", connection)
  // when someone connects print out message on server
  console.log(`user ${connection.id} ${connection.avatar} is now connected to our server`)
  
  connection.write("🙉 hello from the server\n")
  connection.write(`your avatar is ${connection.avatar} and your id is ${connection.id}\n`);

  connection.on('data', (data) => {
    console.log(`${connection.avatar}: ${data}`)
    writeToAllClients(data, connection, clients)
  })

})

server.listen(port,  () => {
  console.log(`🙉 server is listening on port ${port}`);
})