const express = require('express');
const bodyParser = require('body-parser');
const randomstring = require("randomstring");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');

const memes = {
	a3Cd23: 'https://pleated-jeans.com/wp-content/uploads/2013/04/3sxnop-1.jpg',
	fsff46: 'https://www.memesmonkey.com/images/memesmonkey/b8/b84a1746dd6c40559f5190e6f99b2eff.jpeg',
	F4c25f: 'https://www.shutupandtakemymoney.com/wp-content/uploads/2020/04/oscar-ramsay-gordon-ramsay-son-meme.jpg'
}

// cntl + ! + enter
app.get('/', (req, res) => {
    console.log("someone came in!");
    res.render('home');
})

// GET /urls
// GET /urls/:shortURL


// C R U D 
// Create 
// Read
// Update
// Delete 
// RESTFUL CONVENTION

// GET 

// POST

// READ
app.get('/memes', (req, res) => {
    const template_variables = {
        list: memes,
    }
    console.log(memes);
    // Find a correct file and SEND it to the client(response).
    res.render('memes_index', template_variables);
    //             ^--- file name, variable or template_variables
})



// We want to be able to create and add a new meme
// every meme has a 6 character key <--- ???
// CREATE ROUTE (POST)

app.get('/memes/new', (req,res) => {
    console.log("new meme route");
    res.render('memes_new');
})


app.post('/memes', (req, res) => {
    console.log('MEME POST ROUTE!!!!!!!!!!');
    // I need to grab information from the form and save it
    console.log(req.body.memeURL);
    // memes <-- obj
    // to save a new key value pair in an object
    // memes[???] = ???
    const randomId = randomstring.generate(6);
    memes[randomId] = req.body.memeURL;
    // take the URL user has submitted, store it into my memes object under a random 6 string key....
    res.redirect(`/memes/${randomId}`)
})

// HOW DO I GET THE ID?!?!?!?!?!?!?
// REQ.PARAMS is responsible for URL parsing
// /memes/23
// /memes/S45g4f
// /memes/fasddd
app.get('/memes/:id', (req,res) => {
    console.log("memes SHOW route")
    //console.log(req.body);
    //console.log(req.query);
    // console.log(req.params);
    // console.log(req.params.id)
    // console.log(memes);
    const template_vars = {
        meme: memes[req.params.id]
    }
    res.render('memes_show', template_vars)
})

app.post('/memes/:id/delete', (req, res) => {
    delete memes[req.params.id];
    res.redirect('/memes')
})



app.listen(8080, () => console.log('Server is online!!'));