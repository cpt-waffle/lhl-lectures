const PORT = 8080;
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const morgan = require('morgan')

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }))

let key = 3;

const memeList = {
  '0': {
    img: 'https://preview.redd.it/i3gm65ks3u351.jpg?width=640&crop=smart&auto=webp&s=a0acd2afaf7f3087d8624aefe984888e1ba6e027',
    name: 'First meme'
  },
  '1': {
    img: 'https://preview.redd.it/3f5dxbjjau351.jpg?width=640&crop=smart&auto=webp&s=311d94677a9c6c97cd0d95377bfd8e9290821f4a',
    name: 'bug meme 2nd'
  },
  '2': {
    img: 'https://external-preview.redd.it/nHoYJcin0lEe_WlBu71a2ayXRvHl9_Z8msF6VOuNOds.jpg?width=640&crop=smart&auto=webp&s=e200ea5218d8dbab603d309d3c3aed6abd71f495',
    name: 'third meme'
  },
}

app.set('view engine', 'ejs');
// People mix these words 
// this causes big issues, be careful!!!
app.get('/', (req, res) => {
    res.render('home_page');
  })
  // CRUD
  // C - Create
  // R - Read
  // U - Update
  // D - Delete

// REST-ful Convetion
// provide a pattern that allows easy data manipulation for CRUD 
// Developers name their routes in such a way that everything will have consistency.

// GET /urls ===> displays every single URL 
// GET /memes getting a list of memes to appear on the page!!
app.get('/memes', (req, res) => {
  const templateVars = { list: memeList }
  res.render('memes', templateVars);
})

// PITFALL -- order matters sometimes!! 
// need to put this before /:id!
app.get('/memes/new', (req, res) => {
  res.render('memes_create');
})


// IF i want the id from URL i will use req.params
app.get('/memes/:id', (req, res) => {
    const id = req.params.id;
    const meme = memeList[id];
    const templateVars = { meme: meme }
    res.render('memes_show', templateVars)
  })
  // if i wanted to edit a meme my route would be...
  // PUT OR
  // POST /memes/:id


// POST /memes
// req.params <--- WAS ONLY for URL for the top like :id
// req.body (body-parser) <--- IS FOR some information that was filled out by the end user/client
// aka: form input
app.post('/memes', (req, res) => {
  // info coming from the form
  let tempMeme = { img: req.body.meme_url, name: req.body.meme_name };
  memeList[key] = tempMeme;
  key++;
  //^fake Uid generator

  res.redirect('/memes');
})


// IF i want to delete a meme
// what would be my route?
// METHOD: POST /memes/:id/delete or DELETE /memes/:id

app.listen(PORT, () => console.log('App is working on port ' + PORT));