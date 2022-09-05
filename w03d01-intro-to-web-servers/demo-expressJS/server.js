const express = require('express');
const app = express();
const PORT = 8080;

// HTML

// routes + 
// views  + 
app.set('view engine', 'ejs');
// create a views/ folder inside of your server directory

// view engine 

// dynamic views
// and sending information from server to client

const catsArray = ['Mr Meows', 'Mr Buttons', 'Rosy', 'Puma'];
//                    0             1            2     3
app.get('/', (req, res) => {
  console.log("someone is coming to the home page!");
  // res.send('hello World!');
  res.render('home')

})

app.get('/cats', (req, res) => {
  console.log('/cats page has been visited!');
  // res.send('<h1>Rosy, Puma, Mr Meows, Mr Buttons, Cliff</h1>');
  // first param of res.render() is the file that will be rendered
  // second param of res.render(), is an OBJECT, that will be SHARED with the view file.
  const obj = {cats: catsArray};
  res.render('cats', obj);
})

// /urls/:shortURL


app.get('/cats/:catsId', (req, res) => {
  console.log(req.params.catsId);
  if (!isNaN(req.params.catsId)) {
    const templateVars = {cat: catsArray[req.params.catsId]}
    res.render('cats_show', templateVars);
  } else {
    res.send('invalid id :(');
  }
})

// for shopping sites, like amazon, canadianire, canadacomputers, lulu

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})