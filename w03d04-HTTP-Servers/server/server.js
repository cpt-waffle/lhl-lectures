const PORT = 8080;
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bcrypt = require('bcryptjs');

// plain text passwords

const users = {
  1: {id: 1, email: 'obiwan@gmail.com',  password: '$2a$10$v.GllU.LRhlRnZY12xeGj.7saDEAOV3FIowojn4AiedvfFaj6Sxnu'},
  2: {id: 2, email: 'gimli@gmail.com',   password: '$2a$10$zJjZdib5JKXlgtLrsmsQUeOlwUq/D33n91LFDPARFOUXAsd64jmbG'},
  3: {id: 3, email: 'a@b.com',           password: '$2a$10$nn/lhHacTyhooo2lgLf8UuNGMwyZOwv5hWr83IRWXwk.c2eODDBm2'},
  4: {id: 4, email: 'a1@b.com',           password: '$2a$10$2N/Fh8btFHjtL2QcjcuRVO8gA/TrFRFwast2DwqBBWPocF1xccysW'},
};


// Index counter for users DB
let index = 4;

const app = express();

app.set('view engine', 'ejs');

// middlware
// ----> req ---> MIDDLEWARE ---> route  
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser())

app.use(cookieSession({
  name: 'session',
  keys: ['one', 'two', 'three'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))


app.get('/test', (req,res) => {
  res.send("ok!");
})


app.get('/', (req,res) => {
  const user_id = req.session.user_id; // 1
  console.log(user_id);
  console.log(users);
  const templateVars = {user: undefined};
  if (user_id) {
    templateVars.user = users[user_id];
    console.log(templateVars);
  }
  return res.render('home', templateVars);
})

//////////////  A page to let the user login

app.get('/login', (req, res) => {
  // Login needs to be a form, because we need information from the users
  // the form will need to make a request (POST) to another route, to validate that user
  // if user credentials are correct, "authenticate" them
  return res.render('login');
})
//// POST requests, are here for anytime we want to change/create something on the server
app.post('/login', (req, res) => {
  console.log(req.body);
  // loop through our database of users [x]
  console.log("looping through database of users");
  for (let key in users) {
    console.log(users[key].email);
    // if they match emails, check password [x] 
    // check if the current user im looping through matches the credentials
    //given [x]
    if (users[key].email === req.body.email) {
      console.log('we found an email match!!');
      if (bcrypt.compareSync(req.body.pass, users[key].password)) {
        // if password matches LOG THEM IN [x]
        console.log('password matches as well');
        // /1

        // return res.send("we will log you in right now!");
        // res.cookie('user_id', key);
        req.session.user_id = key;
        return res.redirect(`/`);
      } else {
        // if no email was found once we looped through everything [x]
        // tell them to go away [x]
        return res.send('Bad credentials: invalid user or password');
      }
    }
  }
  return res.send('Bad credentials: invalid user or password');
})

app.get('/register', (req, res) => {
  if (req.session.user_id) {
   return res.redirect('/'); 
  }
  return res.render('register');
})

app.post('/register', (req, res) => {
  // loop through our database just to check if email already exists
  for (let key in users) {
    if (users[key].email === req.body.email) {
      // if it does send "they cant register"
      return res.send("Error: email already exists");
    }
  }
  // if it doesnt add them into the object

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(req.body.pass, salt);

  users[index] = {id: index, email: req.body.email, password: hash};
  // set a cookie
  // res.cookie('user_id', index);
  // SET a SESSION
  req.session.user_id = index;
  index++;
  // redirect to home page
  return res.redirect('/');
})

app.post('/logout', (req, res) => {
  // res.clearCookie('user_id');
  req.session = null;
  return res.redirect('/');
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));