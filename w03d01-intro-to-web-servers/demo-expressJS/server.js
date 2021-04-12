const PORT = 8080;
const express = require('express');
const server = express();

const dogMemes = [
    'https://i.chzbgr.com/original/2902277/hDD87016B/these-husky-memes-are-just-what-you-need-this-sunday',
    'https://cdn.akc.org/content/article-body-image/via_pinterest.jpg',
    'https://i.pinimg.com/originals/7a/08/e0/7a08e0154173be47f57e97811fcb7b85.jpg',
    'https://i.imgflip.com/3w5th4.jpg',
    'https://i.chzbgr.com/full/6749445/h4EC265C3/doge-memes-of-shiba-inu-being-adorable'
];
  


server.set('view engine', 'ejs');

// request ALWAYS is first
// response ALWAYS is second
server.get('/', (req, res) => {
    console.log("HOME PAGE");
    res.render('home'); // this renders the file inside ./views/home.ejs
})

server.get('/dogmemes', (req, res) => {
    // res.render() takes in 2 parameter
    // parameter 1 -- the file name that will be send/rendered out to the client
    // parameter 2 -- an OBJECT that can be passed into the file (ejs) and used to embed data on that file
    const templateVars = {name: 'Vasiliy', fruit: 'orange', memes: dogMemes};
    res.render('dogmemes', templateVars);
})

// bonus!  if you need an example of req.params :) 
server.get('/dogmemes/:id/', (req, res) => {
    console.log(req.params);
    const templateVars = {meme: dogMemes[req.params.id]}
    res.render('dogmemes_show', templateVars);
})


server.get('/name',(req,res) => {
    const templateVars = {name: 'Vas'};
    res.render('name', templateVars);
})


server.listen(PORT, () => {
    console.log("Server is on!");
})