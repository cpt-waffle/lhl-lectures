const express = require("express");
const app = express();
const port = 8080;

// intialize EJS
app.set('view engine', 'ejs');

const catsDatabase = {
  1: 'https://i.kym-cdn.com/photos/images/newsfeed/001/394/314/c62.jpg' ,
  2: 'https://i.cbc.ca/1.5359228.1577206958!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/smudge-the-viral-cat.jpg',
  3: 'https://www.idlememe.com/wp-content/uploads/2021/11/polite-cat-meme-idlememe-1-300x300.jpg',
  4: 'https://i.imgur.com/drvA0ew.jpg'
}

let num = 0
app.get('/', (req, res) => {
  console.log("GET /");
  num++;
  // return res.send(`<body><h1>Hello World</h1><ul><li>${num}</li><li>two</li></ul></body>`);
  return res.render('home');
})

app.get('/testing', (req, res) => {
  console.log("GET /testing");
  return res.send('tesing worked :)');
})

app.get('/cats', (req,res) => {
  console.log("GET  /cats");
  // first param is the ejs file name
  // second param is an object that will be SHARED WITH the ejs file
  const templateVars = {a: 3.14, cats: catsDatabase};
  return res.render('cats', templateVars);
})

// urls/:shortURL
app.get('/cats/:id', (req, res) => {
  console.log(req.params)
  console.log('GET /CATS/:id');
  // get the cat from our database
  const cat = catsDatabase[req.params.id];
  // if cat exists display it
  if (cat) {
    return res.render('cat', {cat});
  }

  // if cat doesnt exist, send an error
  return res.send('cat does not exist');
})



app.listen(port, () => console.log("Server is listening on port ", port));