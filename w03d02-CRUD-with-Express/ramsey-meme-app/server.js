// First thing to start express server!
// REQUIRE IT
const express = require('express');
const bodyParser = require('body-parser');
// 2nd, express()
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
let id = 0;

const memes = {
    a1: 'https://i.imgur.com/hfpO3WV_d.webp?maxwidth=728&fidelity=grand',
    a2: 'https://images.app.goo.gl/VyQVKsLiDf8MDqtY8',
    a3: 'https://s3.scoopwhoop.com/anj/ramsayy/46142255.jpg',
    a4: 'https://i.ytimg.com/vi/XZjdtVYqSzQ/maxresdefault.jpg',
    a5: 'https://www.memesmonkey.com/images/memesmonkey/43/4337838fde4367ebbb9f4726d571e6b2.jpeg',
}


app.get('/', (req, res) => {
    console.log('someone visited this route!');
    // res.send('<h1>Test</h1>');
    res.render('home');
})
// RESTFUL convention is a convention to name routes
// you have word that is your route ( meme )
// we pluralize it
// /memes shows us ALL THE MEMES EVER
app.get('/memes', (req,res) => {

    // res.render() takes 2 arguments
    // arg 1, the file
    // arg 2, an object, with values
    // that object is shared between the file that we are going to render
    let templateVars = {memesList: memes};
    res.render('memes_index', templateVars);
})

// GET /memes/new <--- this page gives us the form, that lets us add information
app.get('/memes/new', (req, res) => {
    console.log("here is the add new meme forum!");
    res.render('memes_new');
})

// GET /memes/:id
app.get('/memes/:id', (req,res) => {
    console.log(req.params);
    let templateVars = { singleMeme: memes[req.params.id]}
    res.render('memes_show', templateVars);
})

// POST  /memes
app.post('/memes', (req, res) => {
    console.log("REQ.BODY ===>",  req.body);
    memes[id] = req.body.new_meme;
    id++;
    res.redirect('/memes');
})



// 3rd, app.listen()
app.listen(8080,() => console.log("Server is online!!"));

// GET  /memes              --> Gets you everything ( all memes)
// GET  /memes/:id          --> gets you something specific ( specific meme)
// GET  /memes/new          --> gets you the form to submit ( but doesnt actually submit YET)
// POST /memes              --> saves something (saves your meme)
// ---------------
// GET  /memes/:id/edit      ---> gives you the form for a specific meme to edit
// POST /memes/:id          ---> edit/save the meme
// POST /memes/:id/delete   ---> deletes something ( deletes a meme )
