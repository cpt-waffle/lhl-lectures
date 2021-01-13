// const net = require('net');
// const stdn = process.stdin;
// stdn.setEncoding('utf8')

// const client = net.createConnection({
//   host: 'localhost',
//   port: 3000
// });
// client.setEncoding('utf8');

// client.on('connect', () => {
//   console.log("connected!!");
// });

// stdn.on('data', (data) => {
//   client.write(data);
//   console.log(data);
// })





const net = require('net');
const stdin = process.stdin;
stdin.setEncoding('utf8');


const client = net.createConnection({
  host: 'localhost',
  port: 3000
});
client.setEncoding('utf8');

client.on('connect', () => {
  console.log('connected');
})

client.on('data', data => {
  console.log('annon: ', data);
})

stdin.on('data', data => {
  console.log('I wrote:', data);
  client.write(data);
})


