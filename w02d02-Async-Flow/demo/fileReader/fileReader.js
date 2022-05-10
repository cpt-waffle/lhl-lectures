// We have 3 files 
// each of them have a number written in the file
// Read each file, get the value from each file
// Subtract data2 and data3 numbers from data1 number

const fs = require('fs');


fs.readFile('./data1.txt', 'utf8', (err, data1) => { // start washing machine

  fs.readFile('./data2.txt', 'utf8', (err, data2) => { // put in dryer

    fs.readFile('./data3.txt', 'utf8', (err, data3) => { // fold clothes
      console.log(`${data1} - (${data2} + ${data3}) = ${Number(data1) - (Number(data2) + Number(data3))}`);
    })
  })
})
