// We have 3 files 
// each of them have a number written in the file
// Read each file, get the value from each file
// Subtract data2 and data3 numbers from data1 number

const fs = require('fs');

const readThreeFiles = (cb) => {
  fs.readFile('./data1.txt', 'utf8', (err, data1) => {
    if (err) throw err
    fs.readFile('./data2.txt', 'utf8', (err, data2) => {
      if (err) throw err
      fs.readFile('./data3.txt', 'utf8', (err, data3) => {
        if (err) throw err

        cb(data1, data2, data3);
      })
    
    })
  
  })
}


readThreeFiles((r1, r2, r3) => {
  console.log('Subtracting the results');
  console.log(`${r1} - ${r2} - ${r3} = ${r1-r2-r3}`);
})