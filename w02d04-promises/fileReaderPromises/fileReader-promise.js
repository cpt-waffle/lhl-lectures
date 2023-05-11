// We have 3 files 
// each of them have a number written in the file
// Read each file, get the value from each file
// Subtract data2 and data3 numbers from data1 number


const fs = require('fs').promises;

// console.log(fs);
let data1 = null;
let data2 = null;
let data3 = null;


fs.readFile('./data1.txt', 'utf8').then((data) => {
  console.log("Data: ", data);
  data1 = data;
  return fs.readFile('./data2.txt', 'utf8')
}).then(data => {
  console.log("Data: ", data);
  data2 = data;
  return fs.readFile('./data3.txt', 'utf8');
}).then(data => {
  data3 = data;
  console.log("Data: ", data);
  console.log(`${data1} - ${data2} - ${data3} = ${data1-data2-data3}`);
}).catch( e => {
  console.log("error occured :(");
  console.log(e);
})



