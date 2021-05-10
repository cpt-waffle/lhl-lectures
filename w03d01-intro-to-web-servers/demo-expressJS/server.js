const express = require('express');

const app = express();

const PI = 3.14;

const dogMemes = [
    'https://i.chzbgr.com/original/2902277/hDD87016B/these-husky-memes-are-just-what-you-need-this-sunday',
    'https://cdn.akc.org/content/article-body-image/via_pinterest.jpg',
    'https://i.pinimg.com/originals/7a/08/e0/7a08e0154173be47f57e97811fcb7b85.jpg',
    'https://i.imgflip.com/3w5th4.jpg',
    'https://i.chzbgr.com/full/6749445/h4EC265C3/doge-memes-of-shiba-inu-being-adorable'
];

// set the view engine to ejs
app.set('view engine', 'ejs');

 // GET /
app.get('/', (req, res) => {
    // res.send('this is my homepage!');
    // render(), takes in 2 parameters
    // first parameter is the filename ( name of the EJS file)
    // second parameter MUST BE ON OBJECT and this object
    // contains key value pairs that are shared between server and EJS file.
    res.render('homepage', {PI});
})

app.get('/memes', (req,res) => {
    const templateVars = {memes: dogMemes};
    res.render('memes', templateVars);
})

app.get('/memes/:id', (req, res) => {
    console.log(dogMemes[req.params.id])
    const templateVars = { specificMeme: dogMemes[req.params.id]}
    if (dogMemes[req.params.id])
        res.render('show', templateVars);
    else {
        res.status(400).send("ERROR MEME DOES NOT EXIST");
    }
})

app.listen(8080, () => {
    console.log("Server is on!");
})