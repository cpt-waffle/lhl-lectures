const express = require('express');
const PORT = 2019;
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));


let counter = 0;
let counter2 = 0;

const urlsRoute = require('./routes/urls');
const sessionsRoute = require('./routes/sessions');


app.use((req, res, next) => {
  counter++;
  next();
});


app.use('/urls', (req, res, next) => {
  if (req.headers.cookie) {
    next();
  } else {
    res.send("YOU MUST LOGIN FIRST TO SEE URLS");
  }
})


app.use('/urls', urlsRoute());
app.use('/sessions', sessionsRoute());

app.get('/', (req, res, next) => {

  counter2++;
  // console.log("we hit home!");
  res.send(`<h1>Welcome  ${counter} ${counter2}</h1>`)
})

app.listen(PORT, () => console.log("Server is listening on ", PORT))