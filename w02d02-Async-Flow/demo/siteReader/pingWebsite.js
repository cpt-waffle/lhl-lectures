// use the below package (docs: https://www.npmjs.com/package/request)
// to read the contents of "https://www.example.edu"
const request = require('request');

request('https://www.example.edu', (err, res, body) => {
  console.log("err", err);
  console.log("res", res);
  console.log("body", body);
})