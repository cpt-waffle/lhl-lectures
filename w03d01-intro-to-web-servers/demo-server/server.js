// Rule 1 - define express
const express = require('express');
// Rule 2 - app = express() // call express
const server = express();
server.set('view engine', 'ejs');
const puppies = [
    'https://i.chzbgr.com/original/2902277/hDD87016B/these-husky-memes-are-just-what-you-need-this-sunday',
    'https://cdn.akc.org/content/article-body-image/via_pinterest.jpg',
    'https://i.pinimg.com/originals/7a/08/e0/7a08e0154173be47f57e97811fcb7b85.jpg',
    'https://i.imgflip.com/3w5th4.jpg',
    'https://i.chzbgr.com/full/6749445/h4EC265C3/doge-memes-of-shiba-inu-being-adorable'
]


// making our route/instruction
// function() {...} === () => {...}
server.get('/', (req, res) => {
    console.log("someone has come in!!!");
    res.render('homepage');
})

server.get('/puppies', (req,res) => {
    console.log('Puppy route has been hit!');
    // render, takes 2 parameters ( 1 manditory, 1 optional)
    // first parameter is the file you want to sent out to the client
    // 2nd parameter are variables, that you may want to embbed in that file
    // they are stored in an object, key being the var name, value being the value.
    let templateVars = {puppies: puppies};
    res.render('puppies_all', templateVars);
})
server.get('/puppies/joke', (req,res) => {
    res.send('its just a prank brooo!');
})


// How to get an id for a specified user!
server.get('/puppies/:id', (req,res) => {
    console.log(req.params);
    console.log('Specific puppy route!');
    let templateVars = {puppy: puppies[req.params.id]}
    res.render('puppies_show', templateVars);
})



// first arg is port, second arg is callback, and callback executes ones listen() is fully done 
// and server is online!!
// Rule 3 use  listen() to start the server

server.listen(8080, () => console.log('Server is ALIVE!!!!!!!!!'));