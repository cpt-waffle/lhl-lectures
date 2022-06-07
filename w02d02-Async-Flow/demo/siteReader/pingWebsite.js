// use the below package (docs: https://www.npmjs.com/package/request)
// to read the contents of "https://www.example.edu"
const request = require('request');

// async request function 
request('https://www.example.edu', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

// Promises w2d4 -- Callbacks but nicer
// Async/Await   -- if it can do a promise, it can do async/await