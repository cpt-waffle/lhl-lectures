// We have 3 files 
// each of them have a number written in the file
// Read each file, get the value from each file
// Subtract data2 and data3 numbers from data1 number

const fs = require('fs');
fs.readFile('./data1.txt', 'utf8', (err, num1) => {
  if (err) throw err;
  fs.readFile('./data2.txt', 'utf8', (err, num2) => {
    if (err) throw err;
    fs.readFile('./data3.txt', 'utf8', (err, num3) => {
      if (err) throw err;
      console.log('DATA!!!! (Correctly got)');
      console.log(num1, num2, num3);
      console.log(`${num1} - ${num2} - ${num3} = `, Number(num1) - Number(num2) - Number(num3));
    })
  })
})




