// We have 3 files 
// each of them have a number written in the file
// Read each file, get the value from each file
// Subtract data2 and data3 numbers from data1 number

const fs = require('fs');

let data1 = 0;
let data2 = 0;
let data3 = 0;

fs.readFile('./data1.txt', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  console.log('data', data);
  data1 = data;
  fs.readFile('./data2.txt', 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    console.log('data', data);
    data2 = data;
    fs.readFile('./data3.txt', 'utf8', (err, data) => {
      if (err) {
        throw err;
      }
      console.log('data', data);
      data3 = data;
      console.log(`${data1} - ${data2} - ${data3} = ${data1 - data2 - data3}`);
    })
  })
})


