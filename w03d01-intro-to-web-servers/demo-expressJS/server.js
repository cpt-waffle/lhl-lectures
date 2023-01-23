const express = require('express');
const app = express();
const PORT = 8080;

const catsDatabase = {
  1: 'https://i.kym-cdn.com/photos/images/newsfeed/001/394/314/c62.jpg' ,
  2: 'https://i.cbc.ca/1.5359228.1577206958!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/smudge-the-viral-cat.jpg',
  3: 'https://www.idlememe.com/wp-content/uploads/2021/11/polite-cat-meme-idlememe-1-300x300.jpg',
  4: 'https://i.imgur.com/drvA0ew.jpg'
}

// views
// UI for the client
//  step 1  -- install ejs  -- npm install ejs
//  step 2  -- set the view engine to EJS
app.set('view engine', 'ejs');
//  step 3  -- make a folder called "views" (plural)
//  step 4  -- anytime you want send a view to the client
// use the command called `res.render('view_name');


// <%= .... %> <--- embed something into HTML 
// <%  .... %> <--- JS logic goes here

let homePageCounter = 1;

app.get('/', (req, res) => {
  // I want to add, a tracker, of how many times, my home page was visited
  // I will add a variable, with a counter 1, and anytime someone visits the 
  // home page, i will increment the counter
  console.log("home page /", homePageCounter);
  homePageCounter++;
  // res.send('hello world!');

  // res.render('viewName', object:{})
  //                           ^--- template variables or templateVars
  // templateVars ---> an object that has key/val pairs, that shares those 
  // key/vals, WITH THE EJS VIEW
  const templateVars = {};
  templateVars.counter = homePageCounter;
  // {counter: homePageCounter}
  res.render('home', templateVars);
})

app.get('/cats', (req, res) => {
  console.log("/cats page");
  // res.send('Cats!!!!');
  const templateVars = {cats: catsDatabase};
  console.log('templateVars = ',templateVars);
  res.render('cats', templateVars);
})

app.get('/food', (req, res) => {
  console.log("/food page");
  res.send("get a burrito for lunch");
})

app.listen(PORT, () => console.log(`Server is on ${PORT}`));
