// use the below package (docs: https://www.npmjs.com/package/request)
// to read the contents of "https://www.example.edu"
const request = require('request');

request('https://www.example.edu', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});


// do something else here ( main thread....)