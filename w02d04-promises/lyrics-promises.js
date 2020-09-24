// Write a program that reads files ( in data folder)
// and prints em in the correct order
// 🎶

const fs = require('fs').promises;

fs.readFile('./data/file1.txt', 'utf8').then((data) => {
    console.log(`🎶 ${data} 🎶`);
    return fs.readFile('./data/file2.txt', 'utf8')
}).then((data) => {
    console.log(`🎶 ${data} 🎶`);
    return fs.readFile('./data/file3.txt', 'utf8')
}).then((data) => {
    console.log(`🎶 ${data} 🎶`);
    let number = 33;
    return fs.readFile('./data/file4.txt', 'utf8')
}).then((data) => {
    console.log(`🎶 ${data} 🎶`);
    return fs.readFile('./data/file5.txt', 'utf8')
}).then((data) => {
    console.log(`🎶 ${data} 🎶`);
})
.catch((e) => {
    throw new Error(e);
})

// const p1 = fs.readFile('./data/file1.txt', 'utf8');
// const p2 = fs.readFile('./data/file2.txt', 'utf8');
// const p3 = fs.readFile('./data/file3.txt', 'utf8');

// console.log('--------------------------');
// Promise.all([p1, p2, p3]).then((val) => {
//     console.log(val);
// }).catch((e) => {

// })

// p1.then((data) => {} );
