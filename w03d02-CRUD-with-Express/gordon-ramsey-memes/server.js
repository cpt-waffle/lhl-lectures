const PORT = 8080;
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const app = express();
app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));


const memes = {
	a3Cd23: 'https://pleated-jeans.com/wp-content/uploads/2013/04/3sxnop-1.jpg',
	fsff46: 'https://www.memesmonkey.com/images/memesmonkey/b8/b84a1746dd6c40559f5190e6f99b2eff.jpeg',
	F4c25f: 'https://www.shutupandtakemymoney.com/wp-content/uploads/2020/04/oscar-ramsay-gordon-ramsay-son-meme.jpg'
}

const fakeUUIDGen = () => {
    const str = Math.random().toString(36).substring(7) 
    // my random string generator
    return str;
}

//           req(est) comes from the client, and we res(pond) back
app.get('/', (req, res) => {
    //EJS
    res.render('home');
})

// GET /MEMES -> index (to show all the memes) READ
app.get('/memes', (req,res) => {
    // render takes two arguments, arg 1 is your view file name
    // arg2 is your arguments that you want to be accesable inside of the view
    // make the arg2 an object
    // {memes: memes}
    const templateVars = {memes};
    res.render('memes_index', templateVars);
})
// route order matters
// GET /memes/new ---> new --> to show the form to be filled out
app.get('/memes/new', (req, res) => {
    res.render('memes_new');
})


// specific meme route
// GET /MEMES/:id  ---> show --> (to show a specific (single) meme )
app.get('/memes/:id', (req, res) => {
    console.log(req.params);
    const meme = memes[req.params.id];
    const templateVars = { meme }
    res.render('memes_show', templateVars);
})

// DELETE /MEMES/:id 
// POST /memes/:id/delete

// post requests are used to CHANGE/DELETE/UPDATE/CREATE data 
app.post('/memes/:id/delete', (req, res) => {
    const idToDelete = req.params.id;
    delete memes[idToDelete];
    res.redirect('/memes');
})


app.post('/memes', (req, res) => {
    // req.params ^
    // req.query < not talking about that in depth at all 
    // req.body 
    console.log(req.body);
    //generate the ID (fake id generator)
    const newID = fakeUUIDGen();
    memes[newID] = req.body.memeIMG;
    res.redirect('/memes');
})

// PUT /memes/:id
// PUST /memes/:id 


// add a meme to our database





// CRUD
// CREATE
// READ
// UPDATE
// DELETE

// RESTFUL Convention

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));