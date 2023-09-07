const PORT = 8080;
const express = require('express');
const morgan = require('morgan');
const bcrypt = require('bcryptjs');
const cookieSession = require('cookie-session');

const users = {
  1: {id: 1, email: 'obiwan@gmail.com',  password: '$2a$10$51yaLdhAANrv/GbBk8l4b.shX9BHpHN6NCxyYhutXmdHTb8C1IjzK'},
  2: {id: 2, email: 'gimli@gmail.com',   password: '$2a$10$a6gJ3ehD5uoAKGIP13Z8/eo60YK6634cFwT3izFMXeFUP42JzFNrG'},
  3: {id: 3, email: 'a@b.ca',           password: '$2a$10$LdGQi9cEzTtvO6.j9JrcieiFRxOzHBL5/APnlLr89WMduVxcyovva'},
};

// Index counter for users DB
let index = 4;

const app = express();

app.set('view engine', 'ejs');

// middlware
// ----> req ---> MIDDLEWARE ---> route  
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(cookieSession({
  name: 'banana', // what the session is called on the clients browser
  keys: ['one', 'two', 'three'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

app.get('/test', (req,res) => {
  res.send("ok!");
})


app.get('/', (req,res) => {
  console.log(`Sessions:  `, req.session);
  // const user_id = req.cookies.user_id; // 1
  const user_id = req.session.user_id;
  console.log(user_id);
  console.log(users);
  console.log('req.cookies: ',req.cookies);
  const templateVars = {user: undefined}
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
  console.log("req.body ==>", req.body);

  const formEmail = req.body.email; 
  const formPass  = req.body.pass;
  console.log("------------LOOP-------------")
  for (key in users) {
    console.log("key",key);
    console.log("val", users[key]);
    console.log("i email", users[key].email);
    console.log("i password", users[key].password);
    if (formEmail === users[key].email) {
      // if (formPass === users[key].password) {
      if (bcrypt.compareSync(formPass, users[key].password)) {
        // return res.send("We should log you in :)");
        // res.redirect(`${key}/home`);
        // res.cookie('user_id', key);
        req.session.user_id = key;
        return res.redirect('/');
      } else {
        return res.send("Email or password is incorrect :(");
      }
    }
  }
  console.log("------------LOOP-------------")

  return res.send("Email or password is incorrect :(");
})

app.get('/register', (req, res) => {
  if (req.session.user_id) {
   return res.redirect('/'); 
  }
  return res.render('register');
})

app.post('/register', (req, res) => {
  for (let id in users) {
    if (users[id].email === req.body.email)
      return res.send("Error: email already in use!   :(");
  }
  console.log(req.body);
  const salt = bcrypt.genSaltSync(10);
  const pass = bcrypt.hashSync(req.body.pass, salt);
  const tempUser = {id: index, email: req.body.email, password: pass};
  users[index] = tempUser;
  // res.cookie('user_id', users[index].id);
  req.session.user_id = users[index].id;
  index++;
  return res.redirect('/');
})


app.post('/logout', (req, res) => {
  // res.clearCookie('user_id');
  req.session = null;
  return res.redirect('/');
})


///////////////////////////AUTHENTICATED ROUTES /////////////////////

//  WRONG WAY OF DOING AUTHENTICATION 

// app.get('/auth/:id/', (req,res) => {
//   const templateVars = {user: users[req.params.id].email};
//   return res.render('auth_home', templateVars);
// })





app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));