// We have 3 files 
// each of them have a number written in the file
// Read each file, get the value from each file
// and print out the sum of all the numbers.

const fs = require('fs');

// you have functions that are built
// and they all get exported out
//       module.exports ()
//        require()
//  16x  export default / export 
//        import 

fs.readFile('./data1.txt', 'utf8', (err, data1) => {
    if (err) throw err;
    fs.readFile('./data2.txt', 'utf8', (err, data2) => {
        if (err) throw err;
        fs.readFile('./data3.txt', 'utf8', (err, data3) => {
            if (err) throw err;
            console.log(Number(data1) + Number(data2) + Number(data3));
        })
    })
})
