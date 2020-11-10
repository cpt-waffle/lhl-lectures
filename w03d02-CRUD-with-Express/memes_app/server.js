const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// magical function that generates a key with 6 characters....
const randomString = require("randomstring");

app.use(bodyParser.urlencoded({ extended: false }));

const memes = {
	a3Cd23: 'https://pleated-jeans.com/wp-content/uploads/2013/04/3sxnop-1.jpg',
	fsff46: 'https://www.memesmonkey.com/images/memesmonkey/b8/b84a1746dd6c40559f5190e6f99b2eff.jpeg',
	F4c25f: 'https://www.shutupandtakemymoney.com/wp-content/uploads/2020/04/oscar-ramsay-gordon-ramsay-son-meme.jpg'
}

app.set('view engine', 'ejs');
// dont flip the order of req and res! the order MATTERS!
app.get("/", (req, res) => {
    console.log("welcome to home page");
    res.render('homepage');
})
// CRUD
// Create - POST, PUT
// Read   - GET
// Update - POST, PATCH, PUT
// Delete - POST, DELETE


// RESTFUL Convention
app.get('/memes', (req, res) => {
    console.log("memes page");
    console.log("does this work??");
    // first param of render is FILE, 
    // second param of render is OBJECT <--- variables or vars
    const templateVars = {foo: [1,2,3,4], listOfMemes: memes}
    res.render('memes_index', templateVars);
})

app.get('/memes/new', (req, res) => {
    console.log("memes/new");
    res.render('memes_new');
})

app.get('/memes/:id', (req, res) => {
    console.log('/memes/:id page!');
    console.log(req.params.id);
    const templateVars = {memeImg: memes[req.params.id]};
    res.render('memes_show', templateVars);
})

app.post('/memes', (req, res) => {
    console.log("POST /MEMES OK!!");
    // req.params <----- paramters in the URL /memes/:id
    // req.body  <------ responsible for FORM inputs
    console.log(req.body);
    const key = randomString.generate(6);
    console.log(key);
    console.log(req.body.memeURL);
    memes[key] = req.body.memeURL;
    // res.send("POST /MEMES OK!!");
    res.redirect('/memes');
})

app.post('/memes/:id/delete', (req, res) => {
    console.log(req.params.id);
    delete memes[req.params.id];
    // redirects <---->
    res.redirect('/memes');
})

app.listen(8080, () => console.log('Server is Listening on Port 8080!!'))