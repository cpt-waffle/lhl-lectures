// We have 3 files 
// each of them have a number written in the file
// Read each file, get the value from each file
// Subtract data2 and data3 numbers from data1 number

const fs = require('fs');

let value1 = 0;
let value2 = 0;
let value3 = 0;



fs.readFile('./data1.txt','utf8', (err, data) => {
  if (err) throw err
  value1 = data;
  fs.readFile('./data2.txt','utf8', (err, data) => {
    if (err) throw err
    value2 = data;
    fs.readFile('./data3.txt','utf8', (err, data) => {
      if (err) throw err
      value3 = data;
      console.log('value1 is ',value1);
      console.log('value2 is ',value2);
      console.log('value3 is ',value3);
      console.log('Subtract the values');
      console.log(`${value1} - ${value2} - ${value3} = ${value1 - value2 - value3}`)
    })
  })

})




//   NEVER EVER EVER DO THIS !!!! BAD >:(
// setTimeout(() => {
//   console.log('value1 is ',value1);
//   console.log('value2 is ',value2);
//   console.log('value3 is ',value3);

// }, 10)
