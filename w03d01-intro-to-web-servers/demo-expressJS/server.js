// step 0 npm init and setup .gitignore
// step 1 npm install express
// step 2 server setup

const PORT = 8080; // server port
const express = require('express');

const puppies = [
    'https://i.chzbgr.com/original/2902277/hDD87016B/these-husky-memes-are-just-what-you-need-this-sunday',
    'https://cdn.akc.org/content/article-body-image/via_pinterest.jpg',
    'https://i.pinimg.com/originals/7a/08/e0/7a08e0154173be47f57e97811fcb7b85.jpg',
    'https://i.imgflip.com/3w5th4.jpg',
    'https://i.chzbgr.com/full/6749445/h4EC265C3/doge-memes-of-shiba-inu-being-adorable'
  ]


const app = express();
// EJS
// step 1 - make views folder
// step 2 - npm install ejs
// step 3 - app.set('view engine', 'ejs')
app.set('view engine', 'ejs');


app.get('/', (request, response) => {
//  response.send('<html><body><h1>hello world</h1><img src="https://i.imgflip.com/3w5th4.jpg"/></body></html>');
//  res.render()
  response.render('home');
})


// Request is ALWAYS first
// Resonse is ALWAYS second 
// Order MATTERS!!!!
app.get('/memes', (req, res) => {
    console.log("I've hit the /memes route!!");
    console.log('--------------------------------');
    console.log(puppies);
    // res.render takes 2 parameters
    // first one -- name of the file to be sent out  (MANDATORY)
    // second one -- AN OBJECT (MUST BE) -- that is "shared" with the said file in first arg
    // (second one is optional)
    const templateVars = {name: "Vas", color: 'green', PI: 3.14, array: puppies};
    res.render('memes_index', templateVars);
})

// app.post (i have infomration can you do something with it?)

app.listen(PORT, () => {
    console.log("Server is listening on port ", PORT);
})