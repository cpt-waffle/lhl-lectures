const fs = require('fs');

const output = (cb) => {
    fs.readFile('./data1.txt', 'utf8', (err, data1) => {
        if (err) {
            console.log(err);
        } else {
            // console.log(data);
            fs.readFile('./data2.txt', 'utf8', (err, data2) => {
                if (err) {
                    console.log(err);
                } else {
                    fs.readFile('./data3.txt', 'utf8', (err, data3) => {
                        if (err) {
                            console.log(err);
                        } else {
                            console.log('the values are: ', data1, data2, data3);
                            const sum = Number(data1) + Number(data2) + Number(data3);
                            cb(sum);
                        }
                    })
                }
            })
            
        }
    })
    
}

output((result) => {
    console.log(result);
    //...
});


// IF YOU SEE THIS RUN!!!!!!
// setTimeout(() => {
//     console.log(number1, number2);
// }, 2000);
