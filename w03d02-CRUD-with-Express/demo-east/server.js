const PORT = 8080;

const keyGenerator = () => {
  const result = Math.random().toString(36).substring(5);
  return result;
}

console.log(keyGenerator());




// Step 1: require express 
const express = require('express');
const morgan = require('morgan');

const memes = {
  daf4f: 'https://ichef.bbci.co.uk/images/ic/704xn/p072ms6r.jpg',
  gvdt5: 'https://s18670.pcdn.co/wp-content/uploads/Memes-About-School-Reopening.png'
}

// Step 2: initialize app 
const app = express();

/// config of app
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');


// Step 4: making routes
// GET    POST

app.get('/', (req, res) => {
  return res.render('home');
})
// CRUD
// C - CREATE
// R - READ
// U - UPDATE
// D - DELETE

app.get('/myfavoritepictureofacatmemebecauseitsfunny', (req,res) => {
  return res.render('cat_face');
})

//  GET   /resources
app.get('/memes', (req, res) => {
  const templateVars = {memes};  // memes: memes
  // 2 parameters,  
  // 1 - view_name
  // 2 - an object full of a variables 
  return res.render('memes_index', templateVars);
})

// GET /resources/new
// gets a form to create a new resource
app.get('/memes/new', (req, res) => {
  return res.render('memes_new');
})
// any POST request is to save information or alter information on the server
// Google Search --> GET ? POST
app.post('/memes', (req, res) => {
  console.log(req.body.meme_url);
  // square bracket notation = value
  const id = keyGenerator();
  // saving...
  memes[id] = req.body.meme_url;
  // forces the client to make a get request to a specific resource
  //GET  /urls/:shortURL/edit
  return res.redirect('/memes');
})


// GET /resources/id
//  id, shortURL, number, banana, etc
app.get('/memes/:meme_id', (req, res) => {
  console.log('req.params -->', req.params.meme_id);
  const templateVars = {meme: memes[req.params.meme_id], meme_id: req.params.meme_id};
  return res.render('memes_show', templateVars);
})

// POST /memes/:meme_id/delete

app.post('/memes/:meme_id/delete', (req, res) => {
  delete memes[req.params.meme_id];
  return res.redirect('/memes');
})





// Step 3: Server listens
app.listen(PORT, () => console.log(`Server is on and listening on port ${PORT}`));