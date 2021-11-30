// Using the 'request' library found on NPM
// make a call to the 'http://example.edu/'
// and print out its website contents.
// What is Error?, Response?, Body?

const request = require('request');
console.log("START--------------------");
request('http://example.edu/', (err, res, body) => {
    console.log("body", body);

})

console.log("END--------------------");
