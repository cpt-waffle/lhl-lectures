const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const PORT = 8080;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

// CRUD
// Create Read Update Delete
// CRAP
// create replicate append process
// DAVE
// Del add view edit

// HEY THIS WILD WAS URL STUFF IS TERRIBLE
// LETS MAKE A CONVENTION
// GET
// GET /memes
// GET /memes/:id
// GET /memes/new
// POST
// POST /memes
// POST /memes/:id
// POST /memes/:id/delete

// GET /memes/create <-- to create meme
// Hey we should refactor this!
// find a new place to work
let i = 4;

const memesList = {
    0: {id: 0, name: 'build failed', url: 'https://i.redd.it/ir5c02qa0by41.png'},
    1: {id: 1, name: 'neural network for babies', url: 'https://preview.redd.it/8d1stdly7by41.jpg?width=640&crop=smart&auto=webp&s=aa4f8637b80149ba8cea86d29b0807f439a8e2be'},
    2: {id: 2, name: 'cartoon', url: 'https://preview.redd.it/lao6k24o8by41.png?width=640&crop=smart&auto=webp&s=8da237eb6faaffb9c01a939c5b0024461e08f4d5'},
    3: {id: 3, name: 'sudo -su', url: 'https://preview.redd.it/3yc9z5crqay41.jpg?width=640&crop=smart&auto=webp&s=cf17a251f0666665ec7e7f989c6a2af894f68278'},
};


app.get('/', (req,res) => {
    res.redirect('/memes');
})

app.get('/memes', (req,res) => {
    const templateVars = {list: memesList};
    res.render('memes_home', templateVars);
})

app.get('/memes/new', (req,res) => {
    res.render('memes_new');
})

app.get('/memes/:id', (req,res) => {
    res.send("test");
})


app.post('/memes', (req,res) => {
    let meme = {id: i, name: req.body.name, url: req.body.url};
    // generateUUID() <--- method in generating a random string of 4 chars
    memesList[i] = meme;
    i++;
    res.redirect('/memes');
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));