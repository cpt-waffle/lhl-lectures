const fs = require('fs');
const commonPath = './data/';

fs.readFile(commonPath + 'file1.txt', 'utf8', (err, data) => {
  console.log(data);
  fs.readFile(commonPath + 'file2.txt', 'utf8', (err, data) => {
    console.log(data);
    fs.readFile(commonPath + 'file3.txt', 'utf8', (err, data) => {
      console.log(data);
      fs.readFile(commonPath + 'file.txt', 'utf8', (err, data) => {
        console.log(data);
        fs.readFile(commonPath + 'file5.txt', 'utf8', (err, data) => {
          console.log(data);
        })
      })
    })
  })
})