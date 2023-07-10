const PORT = 8080;

const express = require('express');
const app = express();

const catsDatabase = {
  1: 'https://i.kym-cdn.com/photos/images/newsfeed/001/394/314/c62.jpg' ,
  2: 'https://i.cbc.ca/1.5359228.1577206958!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/smudge-the-viral-cat.jpg',
  3: 'https://www.idlememe.com/wp-content/uploads/2021/11/polite-cat-meme-idlememe-1-300x300.jpg',
  4: 'https://i.imgur.com/drvA0ew.jpg'
}


// step #1 to adding ejs: 
//  initialize
app.set('view engine', 'ejs');
// step #2: make a folder called "views"
// step #3: make EJS files, with end of the file, .ejs

app.get('/', (request, response) => {
  console.log("GET /");
  // return response.send("hello world");
  return response.render('home');
})

let i = 0;
app.get('/cats', (req,res) => {
  console.log("GET /cats");
  i++;
  const templateVars = {
    // a: 1,
    // b:2,
    // c:3,
    // array: [0,0,1],
    // o: {foo:'bar'}
    catsDatabase
  };
  // res.render takes 2 parameters
  //              name of the view (string)
  return res.render('cats', templateVars);
  //                       ^ an object that is shared
})


app.listen(PORT, () => console.log("Server is listening on PORT, ", PORT));