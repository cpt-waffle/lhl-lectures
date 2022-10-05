const PORT = 8080;
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())

app.set('view engine', 'ejs');


// database of users
const users = {
  1: {id: 1, email: 'obiwan@gmail.com',  password: 'helloThere'},
  2: {id: 2, email: 'gimli@gmail.com',   password: 'andMyAxe'},
  3: {id: 3, email: 'a@b.com',           password: '123'},
};

app.use((req, res, next) => {
  console.log("MIDDLEWARE THAT I'VE MADE HAS BEEN HIT!!");
  // we do some logic....
  next();
})


app.get('/', (req, res) => {
  // how do i get the cookie back from the response?
  /// cookie-parser!
  console.log("------------------------");
  console.log(req.cookies);
  console.log(req.headers.cookie);
  const templateVars = {};
  templateVars.user = users[req.cookies.user_id];
  res.render('home', templateVars);
})

app.get('/login', (req, res) => {
  res.render('login');
})

app.post('/login', (req, res) => {
  ///////////// they must give us their credentials
  console.log(req.body);
  ///////////// how do we check if these credentials are VALID??
  // - loop through my database of users
  for (key in users) {
    console.log("key:  ", key);
    console.log("value:  ", users[key].email);
    if (req.body.email === users[key].email) {
      if (users[key].password === req.body.pass) {
        //////////
        res.cookie('user_id', key);
        return res.redirect(`/`);
      } else {
        //////////
        return res.send('Error! User invalid! :(');
      }
    }
  }
  // - for every email i loop through, check if it matches req.body.email
  // - if matches, check if passwords match
  // - if email, and pass match LOGIN!!!!
  return res.send('Error! User invalid! :(');
})


app.post('/logout', (req, res) => {
  res.clearCookie('user_id');
  res.redirect('/');
})

// when I'm logged in, I want to see a message saying
// Logged in as ______________


///  What if.....
// we have routes for logged in users, and routes for not logged in users?

////////////// how to authenticate someone 

/// everything with /______   means you are not logged in
/// everything with /:id/____ means you are logged in

///////////////////// AUTH ROUTES

// app.get('/:id/', (req, res) => {
//   console.log("YOU ARE NOW LOGGED IN --------------------------");
//   console.log(req.params.id);
//   const user_id = req.params.id;
//   const user = users[user_id];
//   console.log(user);
//   return res.render('auth_home', {user});
//   // const user = users[req.params.id];
// })



app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));


// Cookies


// - tracking of where you are and where have you been
// - preferences
// - id and signatures 