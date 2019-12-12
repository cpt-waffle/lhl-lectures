const express = require('express');
const morgan = require('morgan');
const PORT = 8787;
// console.log(express);
const app = express();
let numberOfVisits = 0;
const urlsRoutes = require('./routes/urls/urls');
const sessionRoutes = require('./routes/sessions/session_controller');



app.use(morgan('tiny'));


app.set('view engine', 'ejs');

app.use('/urls', (req,res,next) => {
// Check the cookie if the user is logged in,
// and if the user is logged, and the user exists in the db
// then next()
// otherwise redirect('/login')
console.log('Middle ware to CHECK if user is logged in!!');
next();
})


app.use('/login', sessionRoutes());
app.use('/urls', urlsRoutes());



 app.use((req, res, next) => {
  const buffer = [];
  req.on('data', chunk => {
    console.log(chunk);
    buffer.push(chunk);
  }).on('end', () => {
    const str = Buffer.concat(buffer).toString();
    const parced = str.split('&');
    console.log(parced);
    const obj = {bodyParcer: 'MY BODY PARCER'};
    parced.forEach( arg => {
      let keyVal = arg.split('=');
      obj[keyVal[0]] = keyVal[1];
    })
    req.body = obj;
    next();
  })
 })


app.get('/', (req,res) => {
  console.log("Now we are in the '/' route");
  console.log(req.headers.cookie);
  res.render('home', {numberOfVisits});
  // res.send(404)
})



app.listen(PORT, () => console.log("We are live"));