// We have 3 files 
// each of them have a number written in the file
// Read each file, get the value from each file
// Subtract data2 and data3 numbers from data1 number

const fs = require('fs');

fs.readFile('./data1.txt', 'utf8', function(err, data1) {
  if (err) throw err;
  console.log("first async callback!")
  fs.readFile('./data2.txt', 'utf8', function(err, data2) {

    if (err) throw err;
  console.log("second async callback!")
    fs.readFile('./data3.txt', 'utf8', function(err, data3) {
      if (err) throw err;
      console.log("third async callback!")
      console.log("last readfile finished!");
      console.log(data1, data2, data3);
      console.log(Number(data1) - Number(data2) - Number(data3));
    })
  })
})

// Promises (w2d4)
// async / await