const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dogs = [
  'Husky',
  'Shnozer',
  'Weiner',
  'Chiwawa',
  'Golden Retriever'
]


app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/cats', (req,res) => {
  console.log(req);
  // res.send('<body><h2>hello wrld</h2></body>')
  res.render('homepage');
})

app.get('/dogs', (req,res) => {
  const templateVars = {
    dogs: dogs
  }
  res.render('dogs', templateVars);
})

app.post('/dogs', (req,res) => {
  dogs.push(req.body.dog);
  res.redirect('/dogs');
})

/////// the next pathway after /dogs/_____ is now called breed
// inside of req.params
app.get('/dogs/:id', (req,res) => {
  const templateVars = {
    ttt: dogs[Number(req.params.id)]
  }
  console.log(req.params);
  res.render('specificDog', templateVars);
})





app.listen(8080, () => console.log('Server is on!'));