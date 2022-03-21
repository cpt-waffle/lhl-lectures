const express = require('express');
const app = express();
const PORT = 8080;
// template engine 
// it can send out dynamic webpages to the client
// and it can keep your server architecture clean
///////////// template installation
// npm install ejs
// add this line: 
app.set('view engine', 'ejs');
// make a folder called views/

/// to send ejs templates to the client:
// make a file with ".ejs" at the end of it
const users = [
  {name: 'Vas'},
  {name: 'Gonzo'},
  {name: 'Julia'},
  {name: 'Trishna'},
  {name: 'Christian'}
]

let visitsToHomepage = 0;


app.get('/', (req, res) => {
  visitsToHomepage++;
  console.log('home page has been hit!');
  const templateVar = { users, PI: 3.14, visitsToHomepage };
  //  INSTEAD of saying res.send()
  // res.send("<h1>welcome to my home page!</h1>");
  // res.render("filename")
  res.render("homepage", templateVar);
  // res.render("_FILE_NAME_", {OBJECT})
})

app.get('/users/:id', (req,res) => {
  console.log(req.url);
  const templateVars = {name: users[req.params.id]?.name } ;

  console.log("params--->", req.params);
  res.render('user', templateVars);
})



app.get('/helpimstuck', (req, res) => {
  res.send('Now you are free!');
})

app.get('/moo', (req, res) => {
  res.send('find the cow!!');
})

app.get('/formula1', (req, res) => {
  res.send('Formula Dank!');
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));