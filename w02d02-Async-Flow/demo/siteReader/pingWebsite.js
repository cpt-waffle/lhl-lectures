// use the below package (docs: https://www.npmjs.com/package/request)
// to read the contents of "https://www.example.edu"
const request = require('request');

request('https://www.example324234234.edu', (err, res, body) => {
  console.log("Error", err);
  console.log("resonse:", res);
  console.log("body: ", body);

})