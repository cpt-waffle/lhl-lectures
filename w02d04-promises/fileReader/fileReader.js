// We have 3 files 
// each of them have a number written in the file
// Read each file, get the value from each file
// Subtract data2 and data3 numbers from data1 number

const fs = require('fs');

let data1 = undefined;
let data2 = undefined;
let data3 = undefined;


const readThreeFiles = (cb) => {
  fs.readFile('./data1.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
    data1 = data;
    fs.readFile('./data2.txt', 'utf8', (err, data) => {
      if (err) throw err;
      console.log(data);
      data2 = data; 
      fs.readFile('./data3.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
        data3 = data;
        console.log("all data is:   ",data1, data2, data3);
        console.log(`${data1} - ${data2} - ${data3} = ${data1 - data2 - data3}`);
        const result = data1 - data2 - data3;
        cb(result)
      })
    })
  })
}

readThreeFiles(val => {
  console.log("the value is =" , val);
})