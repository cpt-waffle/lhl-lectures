const fs = require('fs');
const readThreeFilesSum = (cb) => {
    fs.readFile('./data1.txt', 'utf8', (err, data) => {
        if (err) {
            throw new Error(err);
        } else {
            const number_one = Number(data);
            console.log(number_one);
            fs.readFile('./data2.txt', 'utf8', (err, data) => {
                if (err) {
                    throw new Error(err);
                } else {
                    const number_two = Number(data);
                    console.log(number_two);
                    fs.readFile('./data3.txt', 'utf8', (err, data) => {
                        if (err) {
                            throw new Error(err);
                        } else {
                            const number_three = Number(data);
                            console.log(number_three);
                            const result = number_one + number_two + number_three;
                            console.log(result);
                            cb(result);
                        }
                    })
                }
            })
        }
    })
}

readThreeFilesSum((result) => {
    console.log("LINE 33: ", result);
})