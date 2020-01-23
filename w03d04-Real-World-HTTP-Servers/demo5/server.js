const express = require('express');
const app = express();
const urlRoutes = require('./routes/urls_routes');
const morgan = require('morgan')
let number = 0;


app.use(morgan('dev'));
app.use('/urls', urlRoutes());
// /urls/urls

//const bodyparcer = requre

app.use( '/dogs' , (req,res, next) => {
  if (req.headers.cookie) {
    next();
  } else {
    res.redirect("/");
  }
})

app.get('/', (req, res) => {
  res.send(`<p>Not Logged in!</p>${number}`);
})







app.listen(8080, () => console.log("server is ON!!!"));
