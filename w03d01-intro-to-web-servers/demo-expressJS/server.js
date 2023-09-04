const express = require('express');
const app = express();

app.set('view engine', 'ejs');

const catsDatabase = {
  1: 'https://i.kym-cdn.com/photos/images/newsfeed/001/394/314/c62.jpg' ,
  2: 'https://i.cbc.ca/1.5359228.1577206958!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/smudge-the-viral-cat.jpg',
  3: 'https://www.idlememe.com/wp-content/uploads/2021/11/polite-cat-meme-idlememe-1-300x300.jpg',
  4: 'https://i.imgur.com/drvA0ew.jpg'
}

let num = 5;

const urlsDatabase = {
  fj0345: 'www.google.ca',
  esfjils: 'www.reddit.com',
}


// MAGICAL LINE
app.use(express.urlencoded({extended: true}));



app.get('/', (req, res) => {
  console.log("GET /");
  // res.send('welcome to my homepage!');
  res.render('home');
})

app.get('/hello', (req, res) => {
  console.log("GET /hello");
  res.send(`
    <html>
      <head>
      </head>
      <body>
        <h1>Good Morning Everybody</h1>
        <p> this is just a paragraph </p>
        <h4> I want to sleep :( </h4>
      </body>
    </html>
  `);
})

app.get('/hi', (req, res) => {
  console.log('GET /hi');
  res.send('hi');
})

app.get('/banana', (req,res) => {
  console.log('GET /banana');
  return res.send('🍌');
})

app.get('/cats', (req, res) => {
  // "<%="

  // "<% "
  console.log("GET /cats");
  const templateVars = {cats: catsDatabase};
  templateVars.cats = catsDatabase;
  
  res.render('cats', templateVars);
})

app.get('/cats/new', (req, res) => {
  res.render('cats_create');
})

app.post('/cats', (req, res) => {
  console.log("POST /cats");
  console.log(req.body);
  catsDatabase[num] = req.body.cat_img;
  num++;
  res.redirect('/cats');
});


app.listen(8080, () => console.log(`Server is listening on port 8080`));
