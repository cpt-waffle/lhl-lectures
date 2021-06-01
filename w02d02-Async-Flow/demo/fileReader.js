const fs = require('fs');

fs.readFile('./data1.txt', 'utf8', (err, data) => {
    if (err) throw err;
    const resultOne = data;
    console.log('Read first file...');
    fs.readFile('./data2.txt', 'utf8', (err, data) => {
        if (err) throw err;
        const resultTwo = data;
        console.log('Read second file...');
        fs.readFile('./data33.txt', 'utf8', (err, data) => {
            if (err) throw err;
            console.log('Read third file...');
            const resultThree = data;
            console.log(Number(resultOne) + Number(resultTwo) + Number(resultThree));
        })
    })
})
