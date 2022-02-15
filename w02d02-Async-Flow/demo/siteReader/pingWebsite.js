const request = require('request');

request('https://www.example.edu/', (err, resp, body) => {
    console.log("err", err);
    console.log("---body---\n", body);
    // console.log(resp);
})