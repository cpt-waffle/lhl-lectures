const fs = require('fs');

const threeFileAdder = (cb) => {
  fs.readFile('data1.txt', 'utf8', (err, dataOne) => {
    if (err) {
      return error;
    } else {
      fs.readFile('data2.txt', 'ascii', (err, dataTwo) => {
        if (err) {
          return error;
        } else {
          fs.readFile('data3.txt', 'utf8', (err, dataThree) => {
            if (err) {
              return error;
            } else {
              let sum = Number(dataOne) + Number(dataTwo) + Number(dataThree);
              console.log(sum);
              cb(sum);
            }
          })
        }
      })
    }
  })
}

threeFileAdder((val) => {
  console.log("val is ", val);

});



// callbacks to catch the input

// ALSO cntrl + c to kill a program WILL NOT WORK!!!!!
// if (cntr + c was pressed) exit(1)




