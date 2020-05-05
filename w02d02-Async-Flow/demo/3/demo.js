// We have 3 files in our system
// Each file contains ONE single number
// Your task is to go through each file, get the value of each file, and SUM all of it in one number

const fs = require('fs');
const arr = [];
setTimeout(() => {
    console.log("TIME RAN");
}, 10000)
const map = (arr, cb) => {
    let result = [];
    for (let elem of arr) {
        result.push(cb(elem))
    }
    return result;
}



                                                // ONCE file read completed run this callback
fs.readFile('./data1.txt', {encoding: 'utf8'} ,(err, data) => {
    if (err) throw err;
    console.log('cb1 readfile',data);
    arr.push(data);
    // fs.readFile('./data2.txt', {encoding: 'utf8'} ,(err, data) => {
    //     if (err) throw err;
    //     arr.push(data);
    //     console.log('cb2 readfile',data);
    //     fs.readFile('./data3.txt', {encoding: 'utf8'} ,(err, data) => {
    //         if (err) throw err;
    //         arr.push(data);
    //         console.log('cb3 readfile',data);
    //         console.log(arr);
    //         let sum = 0;
    //         for (let num of arr) {
    //             sum += Number(num);
    //         }
    //         console.log("SUM IS ", sum);
    //     });
    // });
});


