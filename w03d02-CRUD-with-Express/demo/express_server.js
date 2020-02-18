const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
  extended: false
}));

let num = 5;

const memesDatabase = {
  1: {picture: 'https://i.kym-cdn.com/entries/icons/original/000/003/193/teddy-bear-poker-face.jpg'},
  2: {picture: 'https://i.kym-cdn.com/entries/icons/original/000/027/475/Screen_Shot_2018-10-25_at_11.02.15_AM.png'},
  3: {picture: 'https://pics.me.me/and-at-this-point-im-afraid-to-ask-2-i-42941971.png'},
  4: {picture: 'https://i.kym-cdn.com/photos/images/newsfeed/000/795/235/fc0.jpg'},
}




// GET /memes
// GET /memes/:id
// GET /memes/new <-

// POST /memes
// POST /memes/:id
// POST /memes/:id/delete


// products // for amazon

// GET /products // SEE all the prods
// GET /products/:id
// product_id/:



app.get('/', (req,res) => {
  res.render('index');
})


app.get('/memes', (req, res) => {
  const templateVars = {memes: memesDatabase};
  res.render('memes_index', templateVars);
})

app.get('/memes/new', (req, res) => {
  res.render('memes_new')
})

app.post('/memes', (req, res) => {
  // HOW DO I GET INFO FROM THE USER INPUT
  console.log(req.body.urlLink);

  // This creates a key and assigns a value to that key

  memesDatabase[num] = { picture: req.body.urlLink }
  num++;
  res.redirect('/memes');
})

app.get('/memes/:id', (req, res) => {
  console.log(req.params);
  const key = req.params.id;
  templateVars = { specificMeme: memesDatabase[key], key: key};

  // Anytime you want to get parameters from THE URL
  // its always going to me req.params
  // ( req.query )
  // Anytime you need to get info from the body of request ( a user fill a form)
  // you will use req.body  ( assuming you are using the body-parcer middlerware)
  res.render('memes_show', templateVars);
})


app.post('/memes/:id/delete', (req,res) => {
  console.log(req.params.id);
  // delete meme number ":id"
  delete memesDatabase[req.params.id];
  res.redirect('/memes');
})


// C - CREATE
// R - READ
// U - UPDATE
// D - DELETE

// RESTFUL routing

app.get('/getMeThePurpleEleghantsInTHeRoom', (req,res) => {
  res.render('elephants');
})


app.listen(8080, () => console.log("Server is running on port 8080!"));