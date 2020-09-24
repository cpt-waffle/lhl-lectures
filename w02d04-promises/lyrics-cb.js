// Write a program that reads files ( in data folder)
// and prints em in the correct order
// 🎶

const fs = require('fs');

fs.readFile('./data/file1.txt', 'utf8', (err, data) => {
    if (err) throw new Error(err);
    console.log(`🎶 ${data} 🎶`);
    fs.readFile('./data/file2.txt', 'utf8', (err, data) => {
        if (err) throw new Error(err);
        console.log(`🎶 ${data} 🎶`);
        fs.readFile('./data/file3.txt', 'utf8', (err, data) => {
            if (err) throw new Error(err);
            console.log(`🎶 ${data} 🎶`);
            fs.readFile('./data/file41.txt', 'utf8', (err, data) => {
                if (err) throw new Error(err);
                console.log(`🎶 ${data} 🎶`);
                fs.readFile('./data/file5.txt', 'utf8', (err, data) => {
                    if (err) throw new Error(err);
                    console.log(`🎶 ${data} 🎶`);
                })
            })
        })
    })
})