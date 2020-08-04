const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
let i = 4;

// fake key generator
const generateKey = function() {
    i++;
    return i;
}

const memeDatabase = {
    1: 'https://miro.medium.com/max/2250/1*k2lSa5DmzHtNXV33-rVKag.jpeg',
    2: 'https://inteng-storage.s3.amazonaws.com/img/iea/yrwQvLJbON/sizes/programmer-memes_md.jpg',
    3: 'https://i.redd.it/qdrnaa2d8xe51.jpg',
    4: 'https://i.redd.it/latsyqzaqnq21.jpg'
}

    app.get('/', (req, res) => {
        console.log('test');
        res.render('home');
    });
/////////////// routes for Memes ///////////////////////
// GET ALL THE MEMES on THIS PAGE!
    app.get('/memes', (req,res) => {
        console.log("this is the meme page");

        // res.render has 2 params to take in
        // param 1: which file should i send to the user?
        // param 2: what data do you want me to share with the file
        // that will be sent out?
        const templateVars = {list: memeDatabase, fruit: 'pair', name: 'vas'};
        res.render('meme_index', templateVars);
    })
    


    // GET memes/new <--- gets me the form so that I am able to submit a new meme
    app.get('/memes/new', (req, res) => {
        console.log("form page route");
        res.render('memes_new');
    })

    // GET A SPECIFIC MEME
    // GET /memes/:id
    app.get('/memes/:id', (req, res) => {
        console.log(req.params);
        const memeID = req.params.id; // memeID
        const meme = memeDatabase[memeID];
        const templateVars = {meme};
        res.render('memes_show', templateVars);
    })

    // POST /_______ <---- to save a meme
    app.post('/memes', (req, res) => {
        console.log(req.body);
        // generate a key ???
        const key = generateKey(); // 
        // set the key pair to database and value
        memeDatabase[key] = req.body.memeURL;
        // redirect??
        // what is the difference between render and redirect???
        
        res.redirect('/memes');
    })
    // UPDATE 
    // POST or PUT 
    // app.post('/memes/:id')


    // delete route
    // POST or DELETE
    // app.post('/memes/:id/delete')
    /////////////// routes for Memes ///////////////////////


app.listen(8080, () => console.log("Server is Online!!!"));

// routes folder
// ---> files that control your routing (aka: controller)
// routes
//   -> memes.js
//      only meme routes
//   -> users.js
//      -> user routes
// GET /users
// GET /users/:id
// POST /users
// POST /users/:id
// -------------------
// GET /users/:id/memes