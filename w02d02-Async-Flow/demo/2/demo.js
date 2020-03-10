// Data 1
// Data 2
// Data 3

// print each line by line of the file in ORDER
const fs = require('fs');

const addNumbers = (cb) => {
  fs.readFile('./data1.txt', 'utf8', (error, fOneData) => {
    if (error) throw error;
    console.log(fOneData);
    fs.readFile('./data2.txt', 'utf8', (error, fTwoData) => {
      if (error) throw error;
      console.log(fTwoData);
      fs.readFile('./data3.txt', 'utf8', (error, fThreeData) => {
        if (error) throw error;
        console.log(fThreeData);
        let result = Number(fOneData) + Number(fTwoData) + Number(fThreeData);
        cb(result);
      })
    })
  })
}

addNumbers( (val) => {
  console.log(" the Value is finally is =>", val);
})
