const PORT = 8080;
const express = require('express');
const morgan = require('morgan');
const app = express();
const cookieParser = require('cookie-parser');

// middlware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use((req, res, next) => {
  // console.log("MY MIDDLEWARE HIT!");
  next();
})

// "database"
const urlsDatabase = {
  bXnV9: 'www.google.ca',
  A3cd1: 'www.reddit.com'
}



const users = {
  1: {id: 1, email: 'obiwan@gmail.com',  password: 'helloThere'},
  2: {id: 2, email: 'gimli@gmail.com',   password: 'andMyAxe'},
  3: {id: 3, email: 'a@b.com',           password: '123'},
};

const items = {
  1: {user_id: 1, items: 'lightsaber'},
  2: {user_id: 1, items: 'robes'},
  3: {user_id: 2, items: 'axe'},
  4: {user_id: 3, items: 'nothing'},
  5: {user_id: 3, items: 'nothing again'},
  6: {user_id: 3, items: 'nothing again again'},
}


app.set('view engine', 'ejs');
// HTTP is state-less
app.get('/favicon.ico', (req, res) => res.status(204));

app.get('/', (req, res) => {
  // res.send(':)');
  // HOW do I, get the cookie back from the request??
  console.log(req.cookies);
  // when i'm logged in, we have a cookie with the user_id
  // my items have a key that is called user_id
  if (req.cookies.user_id) {
    const itemsArr = [];
    for (let key in items) {
      console.log(key);
      if (items[key].user_id == req.cookies.user_id) {
        itemsArr.push(items[key])
      }
      console.log(items[key]);
    }
    const templateVars = {user: users[req.cookies.user_id], itemsArr};
    console.log(itemsArr);
    return res.render('home', templateVars);
  }
  return res.render('home', {user: null});

})

// Authenticating part!

app.get('/login', (req, res) => {
  res.render('login');
})

app.post('/login', (req, res) => {
  console.log(req.body);
  for (const key in users) {
    console.log("-------------");
    console.log(key);
    console.log(users[key].email);
    if (users[key].email === req.body.user) {
      // return res.send("found a username :) ")
      if (users[key].password === req.body.pass) {
        // return res.send("found a username and PASSWORD MATCHES!!! ");
        // LOGIN HERE!!!
        // return res.redirect(`/${key}`)
        // Encrypted Cookies (AKA cookie-session)
        res.cookie('user_id', key);
        return res.redirect('/');
      }
    }
  }

  return res.send('user or pass does not match :(');
})

// deleteing cookies
app.post('/logout', (req, res) => {
  res.clearCookie('user_id');
  res.redirect('/');
})


// I want to add a feature 
// that is able to authenticate me (log me in )
// and keep me logged in,
// it should say "you are logged in as:"







app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));