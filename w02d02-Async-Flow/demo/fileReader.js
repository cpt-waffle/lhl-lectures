const fs = require('fs');

const addFiles = (callback) => {
    let result = 0;
    fs.readFile('./data1.txt', 'utf8', (err, num1) => {
        if (err) {
            throw new Error(err);
        }
        fs.readFile('./data2.txt', 'utf8', (err, num2) => {
            if (err) {
                throw new Error(err);
            }
            fs.readFile('./data3.txt', 'utf8', (err, num3) => {
                if (err) {
                    throw new Error(err);
                }
                result += num1 + num2, num3;
                callback(num1, num2, num3);
            })
        })
    });
    return result;
}

const callback = (num1, num2, num3) => {
    console.log("HELLO CALLBACK");
    console.log('LINE 25 ===> ', Number(num1) + Number(num2) + Number(num3));
}

addFiles(callback);


//  DO NOT DO THIS!!
//  EVER 
//  IF YOU SEE IN THIS PRODUCTION SITE, RUN!!!!!!
// setTimeout(() => {
//     console.log(num1, num2);
// }, 9000);