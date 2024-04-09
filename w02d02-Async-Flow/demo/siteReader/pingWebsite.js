// use the below package (docs: https://www.npmjs.com/package/request)
// to read the contents of "https://www.example.edu"
const request = require('request');


request("https://api.tvmaze.com/search/shows?q=fruits", function(err, resp, body) {
  // console.log(err);
  // console.log(resp);
  console.log(JSON.parse(body)[0].show.name);

})