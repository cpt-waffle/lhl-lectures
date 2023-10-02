const express = require('express');

const app = express();
let number = 0;

urlsDatabase = {
  'f92345f': 'www.google.ca',
  '93Dx452': 'www.news.ca'
}

const catsDatabase = {
  1: 'https://i.kym-cdn.com/photos/images/newsfeed/001/394/314/c62.jpg' ,
  2: 'https://i.cbc.ca/1.5359228.1577206958!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/smudge-the-viral-cat.jpg',
  3: 'https://www.idlememe.com/wp-content/uploads/2021/11/polite-cat-meme-idlememe-1-300x300.jpg',
  4: 'https://i.imgur.com/drvA0ew.jpg'
}

app.set('view engine', 'ejs');

app.get('/', (request, response) => {
  console.log('GET /');
  response.render('homepage');
});

app.get('/hi', (req, res) => {
  console.log('GET /hi');

  res.send('hello!');
})

app.get('/banana', (req, res) => {
  console.log('GET /banana');
  number++;
  res.render('banana', {number, PI: 3.14});
})

app.get('/cats', (req, res) => {
  console.log('GET /cats');
  const templateVars = {catsDatabase};
  res.render('cats', templateVars);
})

app.get('/cats/:id', (req, res) => {
  console.log("GET /CATS/:id");
  console.log(req.params.id);
  const picture = catsDatabase[req.params.id];
  console.log(picture);
  const templateVars = {picture};
  res.render('cats_specific', templateVars);
})




app.listen(8080, () => console.log(`Server is listening on port 8080`));