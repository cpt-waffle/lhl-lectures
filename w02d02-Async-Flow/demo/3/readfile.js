const fs = require('fs');
let sum = 0;

// console.log(fs);
const fileAdder = function (cb) {
    fs.readFile('./data2.txt', 'utf8', function(err, data1) {
        fs.readFile('./data3.txt', 'utf8', function(err,data2) {
            fs.readFile('./data1.txt', 'utf8', function(err,data3) {
                console.log(data1)
                console.log(data2)
                console.log(data3)
                sum = Number(data1) + Number(data2) + Number(data3);
                cb(sum)
            })
        })
    })
} 


fileAdder( function(result) {
    console.log("FINALLY THE OUTPUT IS::  ",result);
})