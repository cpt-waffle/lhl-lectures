// Using the 'request' library found on NPM
// make a call to the 'http://example.edu/'
// and print out its website contents.
// What is Error?, Response?, Body?

const request = require('request');
let content = '';
request('http://example.edu/', function(err, res, body) {
    // console.log('body *****', body);
    content = body;
})
// DONT EVER DO THIS AND IF U SEE THIS RUN AWAY FROM WORK!!!
