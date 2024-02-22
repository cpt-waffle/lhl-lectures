// We have 3 files 
// each of them have a number written in the file
// Read each file, get the value from each file
// Subtract data2 and data3 numbers from data1 number

const fs = require('fs');


const readThreeFiles = (callback) => {
  fs.readFile('./data1.txt', 'utf8', (err, data1) => {
    console.log("DATA 1 READ FINISHED ------------------->:   ",data1);
  // if (err) throw err;
  
    fs.readFile('./data2321313.txt', 'utf8', (err, data2) => {
    console.log("DATA 2 READ FINISHED ------------------->:   ",data2);

      // if (err) throw err;
  
      fs.readFile('./data3.txt', 'utf8', (err, data3) => {
        // if (err) throw err;
        console.log("DATA 3 READ FINISHED ------------------->:   ",data3);
        const result = data1 - data2 - data3;
        console.log(data1 - data2 - data3);
        callback(result);
      });
    });
  });

} 

readThreeFiles((result) => {
  console.log("The result is:", result);
})





// const a = fs.readFile('./data3.txt', 'utf8', (err, data3) => {
//   if (err) throw err;
//   console.log(data3);
// });


// console.log(a);