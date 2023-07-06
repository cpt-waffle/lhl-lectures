// We have 3 files 
// each of them have a number written in the file
// Read each file, get the value from each file
// Subtract data2 and data3 numbers from data1 number

const fs = require('fs');

//   const laundry =  doLaundry();
//

const readThreeFiles = (cb) => {
  fs.readFile('data1.txt', 'utf8', (err, data1) => {
    if (err) throw err;
    console.log('data1', data1);
    fs.readFile('data2.txt', 'utf8', (err, data2) => {
      if (err) throw err;
      console.log('data2', data2);
      fs.readFile('data3.txt', 'utf8', (err, data3) => {
        if (err) throw err;
        console.log('data3', data3);
        const result = data1 - data2 - data3;
        console.log(`${data1} - ${data2} - ${data3} = ${result}`);
        cb(result);
      })
    })
  })
}

readThreeFiles((r) => {
  console.log("the result is", r);
})