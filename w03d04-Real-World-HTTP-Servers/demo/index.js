const express = require('express');
const PORT = 8080;
const app = express();
const cookieParser = require('cookie-parser');
const morgan = require('morgan');


let counter = 0;

app.use(cookieParser())
app.use(morgan('dev'));

app.use((req, res, next) => {
  console.log("a response just came!")
  console.log(req.path)
  console.log(req.method)
  counter++;
  next();
});

app.use('/batman', (req, res, next) => {
  console.log(res.cookies);
  if (req.cookies && req.cookies.user) {
    next();
  }
  else {
    res.redirect('/');
  }
})

app.use('/suitup', (req, res, next) => {
  res.cookie('user', 'bruce');
  res.redirect('/');
})


const bruceWayneRoutes = require('./routes/bruce');
const batman = require('./routes/batman');



app.use('/bruce', bruceWayneRoutes());
app.use('/batman', batman());


app.get('/', (req, res) => {
  res.send(`<h1>Welcome ${counter}</h1>`);
});


app.listen(PORT, () => console.log('Listening on Port ', PORT));