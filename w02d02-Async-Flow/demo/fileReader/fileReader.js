// There are 3 files in this directory.
// (data1.txt, data2.txt, data3.txt)
// Each file contains one number in it
// Your task is to read every single file
// and provide a sum of all the numbers
// Example 
// (data1.txt == 10, data2.txt == 14, data3.txt == 100)
// (output: 124)

// I gotta read 1 file, finish reading it, then read the other file
// then read the next file AND THEN SUM IT ALL TOGHETHER

// fs is built into NodeJS, no need to npm install it!!

const fs = require('fs');

const readThreeFiles = (cb) => {
    fs.readFile('./data1.txt', 'utf8', (err, data1) => {
        fs.readFile('./data2.txt', 'utf8', (err, data2) => {
            fs.readFile('./data3.txt', 'utf8', (err, data3) => {
                console.log("Output: ", Number(data1) + Number(data2) + Number(data3));
                cb( Number(data1) + Number(data2) + Number(data3))
            })
        })
    })
}

console.log("TEST");
readThreeFiles((sum) => {

})


