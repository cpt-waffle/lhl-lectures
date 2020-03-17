const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');


const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(morgan('dev'));


const memesList = [
    {url:'https://i.redd.it/antyobs25se21.jpg '},
    {url: 'https://pics.me.me/can%E2%80%99t-wait-for-fifa-21--https-t-co-vfjmozro0z-70806889.png'},
    {url: 'http://www.quickmeme.com/img/40/406f035bdaaecb519cc5488baed8d051b4684eb845336fa8f91a78c7baa9862f.jpg'},
];


app.get('/', (req,res) => {
    res.render('homepage');
})

// tldr
// NOUN -> meme  PLURAL -> memes
//GET /memes // get all the memes from server
//GET /memes/new <---- get the form to post 
//GET /memes/:id <--- specific meme
//POST /memes

// index
app.get('/memes', (req,res) => {
    let user = '';
    if (req.cookies.username) {
        user = req.cookies.username;user = req.cookies.username;
    }
                                                // user: user <-- shorthand
    const templateVars = {listOfMemes: memesList, user};
    res.render('memes_index', templateVars);
})
// new 
app.get('/memes/new', (req,res) => {
    res.render('memes_new');
})
// show 


app.get('/login', (req,res) => {
    res.render('login');
})

app.post('/login', (req,res) => {
    // get the email
    // check if the email exists
    // if email exists, check if password that was entered matches that email and password
    // if matches set cookie
    res.cookie('username', req.body.email);
    // otherwise tell them to go away!
    res.send('ok')
})


app.post('/memes',(req, res) => {
    console.log(req.body.memeURL);
    if (req.body.memeURL) {
        let tempMeme = { url: req.body.memeURL}
        memesList.push(tempMeme);
        res.redirect('/memes');
    } else {
        res.send("Your meme was not posted, because you did not provide one!");
    }
})


app.listen(8080, () => console.log("Server is Online!"));
