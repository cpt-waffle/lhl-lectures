// Write a program that reads files ( in data folder)
// and prints em in the correct order
// 🎶

const fs = require('fs').promises;

// const readFile = () => return new Promises()

fs.readFile('./data/file1.txt', 'utf8').then((data) => {
    console.log(`🎶 ${data} 🎶`);
    return fs.readFile('./data/file2.txt', 'utf8')
}).then((data) => {
    console.log(`🎶 ${data} 🎶`);
    return fs.readFile('./data/file3.txt', 'utf8')
}).then((data) => {
    console.log(`🎶 ${data} 🎶`);
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