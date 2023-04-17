const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8080;

// objects, arrays 
const catsDatabase = {
  1: 'https://i.kym-cdn.com/photos/images/newsfeed/001/394/314/c62.jpg' ,
  2: 'https://i.cbc.ca/1.5359228.1577206958!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/smudge-the-viral-cat.jpg',
  3: 'https://www.idlememe.com/wp-content/uploads/2021/11/polite-cat-meme-idlememe-1-300x300.jpg',
  4: 'https://i.imgur.com/drvA0ew.jpg'
}

let key = 5; 

// EJS
app.set('view engine', 'ejs');

// to parse the body of your POST requests
// app.use(express.bodyParser.urlencoded({extends: false}));
app.use(express.urlencoded({extended: true}));


// GET / (home)
app.get('/', (req, res)=> {
  console.log("someone is trying to visit our home page!");
  // return res.send(''); // not being used because of the EJS view engine
  return res.render('home');
})
//     request             response

// your browser can only read, HTML, JS, CSS 
app.get('/cats', (req, res) => {
  console.log('someone is trying to visit GET /cats');
  // return res.send('(^-_-^)~');

  //             ''   {}   <--- js object, shares its key/val pairs with the view thats being rendered 
  // res.render(___, ___)
  // const obj = {a: [0,1,2,3], b: 'butter', c: true, d: undefined}
  const templateVars = {cats: catsDatabase};
  // templateVars = {};
  // templateVars.cats = catsDatabase;
  return res.render('cats', templateVars);
})

app.get('/cats/new', (req, res) => {
  console.log("someone is visiting GET /cats/new page");
  return res.render('cats_new');
})

app.post('/cats', (req, res) => {
  console.log("someone is trying to save a cat");
  console.log(req.body); // cat_img
  catsDatabase[key] = req.body.cat_img;
  key++;
  return res.redirect('/cats');
})


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

