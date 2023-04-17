// We have 3 files 
// each of them have a number written in the file
// Read each file, get the value from each file
// Subtract data2 and data3 numbers from data1 number

const fs = require('fs').promises;

// .then() --->
// syntatictic sugar 

let data1 = 0;
let data2 = 0;
let data3 = 0;

fs.readFile('./data1.txt', 'utf8').then((data) => {
  console.log(data);
  data1  = data;
  return fs.readFile('./data2.txt', 'utf8') // pending
}).then(data => {
  console.log(data);
  data2  = data;
  return fs.readFile('./data3.txt', 'utf8')
}).then(data => {
  data3  = data;
  console.log(data3);
  console.log(`${data1} - ${data2} - ${data3} = ${data1 - data2 - data3}`);
}).catch(err => {
  throw err;
})


//  async / await
// BONUS QUICK MENTION :) 
// 
// const data = await fs.readFile('./data1.txt', 'utf8')
//
// technical dept
// dependencies 