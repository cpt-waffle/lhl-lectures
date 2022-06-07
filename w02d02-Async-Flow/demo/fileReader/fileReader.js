// We have 3 files 
// each of them have a number written in the file
// Read each file, get the value from each file
// Subtract data2 and data3 numbers from data1 number

const fs = require('fs');


console.log("before read the file!");


// CALLBACK HELL

fs.readFile('./data1.txt',  'utf8', (err, data1) => {
  fs.readFile('./data2.txt',  'utf8', (err, data2) => {
    fs.readFile('./data3.txt',  'utf8', (err, data3) => {
      console.log(`${data1} - ${data2} -  ${data3}`);
      console.log("= ", data1 - data2 - data3);
    })
  })
})

// Thursday this week
// Promises = async callbacks but prettier to write
// fs.readFile('./data1.txt',  'utf8').then((data) => {

// });

// Promise.all([fs.readFile('./data1.txt',  'utf8'), fs.readFile('./data1.txt',  'utf8'), fs.readFile('./data1.txt',  'utf8')])