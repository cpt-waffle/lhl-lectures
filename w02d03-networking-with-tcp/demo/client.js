const net = require('net');
const client = net.createConnection({
  host: 'localhost',
  port: 3001
})
const name = "Vas";

const stdin = process.stdin;
stdin.setEncoding('utf8');

client.setEncoding('utf8')
client.write(JSON.stringify({type: 'connected', msg: `${name} has connected`}));

stdin.on('data', (input) => {
  client.write(JSON.stringify({type: 'msg', msg: input, name: name}));
})

client.on('data', (data) => {
  const payload = JSON.parse(data);
  if (payload.type === 'connected') {
    console.log(payload.msg);
  } else {
    console.log(`${payload.name}: ${payload.msg}`);
  }
})