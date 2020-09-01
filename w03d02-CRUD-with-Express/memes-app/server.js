const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('dev'));

app.set('view engine', 'ejs');

let number = 5; // Cheat-sy way of making a custom key

// our "database" of items
const memesObj = {
    '1': 'https://i.redd.it/isljlhhl3dk51.jpg',
    '2': 'https://preview.redd.it/d6lpkz8qfik51.png?width=640&crop=smart&auto=webp&s=e2e462e04b636f90c1f623aa83d4c2c2ad61afe9',
    '3': 'https://preview.redd.it/o284ez9yrck51.jpg?width=640&crop=smart&auto=webp&s=3f9c873ef0d478d889acebb4f535a142513a4e26',
    '4': 'https://preview.redd.it/a9yjtkex74k51.png?width=640&crop=smart&auto=webp&s=c9bfe51fee74d43e2d2f58e41ab7bbeaa456ea91'
}

// first param is URL requested
app.get('/', (req, res) => {

    res.render('home');
})
// a server must be able to 
// Create, Read, Update, Delete some sort of Data for it function



app.get('/memes', (req,res) => {
    const templateVars = {memes: memesObj}
    console.log('/memes route');
    // first thing pass templateVars OBJ as a second parameter
    res.render('memes_index', templateVars);
})
// The RESTFUL convention!!!

// GET /memes/new
app.get('/memes/new', (req, res) => {
    console.log("memes/new route");
    res.render('memes_new');
})

// GET /memes/id 
app.get('/memes/:meme_id', (req, res) => {
    console.log('/memes/:id route');
    console.log(req.params.meme_id); // <--- this is a key of my meme database
     // memesObj <-- database of memes 
    // console.log(memesObj[req.params.meme_id]);
    const templateVars = {
        memeImg: memesObj[req.params.meme_id]
    }
    res.render('memes_show', templateVars);
    // res.send('this supposed to be a single meme');
})

// POST /memes
app.post('/memes', (req, res) => {
    console.log("we are about to save a meme!!!!");
    console.log(req.body);
    // take what info user has sent me 
    // and store it in my object
    // using the "number" variable im going to store the value into my 
    // memeObj
    memesObj[number] = req.body.newMemeURL;
    number++;
    // once im done im going to do ???
    res.redirect('/memes');
    // vs res.render()
})
// /u/:shortURL  =====> res.redirect('https://____________')

// DELETE
//  POST /memes/:id/delete
//  GET /memes/:id/edit <---- GET THE FORM
//  POST /memes/:id     <--- actually saving 



app.listen(8080, () => console.log('Server is listening on port 8080'));