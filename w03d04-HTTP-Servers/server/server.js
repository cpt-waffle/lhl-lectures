const PORT = 8080;
const express = require('express');
const morgan = require('morgan');
const cookieSession = require('cookie-session');
const bcrypt = require('bcryptjs');

// Index counter for users DB
let index = 4;


const users = {
  1: {id: 1, email: 'obiwan@gmail.com',  password: '$2a$10$zSSHe3wSxVjtwfaMe/NN.uK91LMPH4IK9eCwsIG33d3QtqB.qnM..'},
  2: {id: 2, email: 'gimli@gmail.com',   password: '$2a$10$rLRXwypmo0AQMqdz8YARWe5JrYuFlrYOjgxIHVO7HaqdnK8hmKn1y'},
  3: {id: 3, email: 'a@b.com',           password: '$2a$10$/8eMGSvATCzplO7r3E7Z0ubIiy2T9XQ.t/4Icu0Hu1j5JYuOnKN/e'},
};


const app = express();

app.set('view engine', 'ejs');

// middlware
// ----> req ---> MIDDLEWARE ---> route  
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(cookieSession({
  name: 'session',
  keys: ['235fgs', 'sef25', 'test', 'app', 'hello'],
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))


app.get('/test', (req,res) => {
  res.send("ok!");
})

app.get('/', (req,res) => {
  // res.cookie('weather', "snow");
  // res.cookie('a', "1");
  // res.cookie('b', "2");
  // res.cookie('c', "3");

  // How do i get the cookie out of the request?
  // find the user for the user_id, stored in the cookie
  // and show that you are logged in?
  
  const templateVars = {user: null};
  console.log(req.session);
  const user = users[req.session.user_id];
  templateVars.user = user;
  // const templateVars = {user}; // {user: user}
  res.render('home', templateVars);
})

//////////////  A page to let the user login

app.get('/login', (req, res) => {
  // Login needs to be a form, because we need information from the users
  // the form will need to make a request (POST) to another route, to validate that user
  // if user credentials are correct, "authenticate" them
  res.render('login');
})
//// POST requests, are here for anytime we want to change/create something on the server
app.post('/login', (req, res) => {
  // req.params    GET/POST    app.get('/:id')
  // req.body      POST    FORM
  // req.query      GET    ?a=3&b=4

  // grab the data that the user entered in the form (email, password)
  console.log('req.body =', req.body);

  console.log('--Loop through database');
  for (let id in users) {
    console.log("id: ", id);
    console.log("user =", users[id]);
    // check if any email exists in my "database"
    // if email exists, check if that password matches, 
    if (req.body.email === users[id].email) {
      console.log("found email that matches!!");
      // if email exists, and password matches, "login them in"
      // if (req.body.pass === users[id].password) {
      if (bcrypt.compareSync(req.body.pass, users[id].password)) {
        console.log("email and password has matched!");
        // redirect the user to /auth/:id/_______________
        // res.cookie('fruit', 'banana');
        /////////////res.cookie('user_id', id);
        req.session.user_id = id;
        return res.redirect(`/`)
        // return res.send("YAY you are loggedn in :)")
      // if not, send them an error :(
      } else {
        console.log("email matched, but password did not :(");
        return res.send('Error, pass/email doesnt match');
      }
    }
  }
  console.log('--end loop')

  // one request - one response  x
  return res.send('email and pass dont match');
})

app.post('/logout', (req, res) => {
  // res.clearCookie('user_id');
  req.session = null;
  return res.redirect('/');
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

  const tempUser = {id: index, email: req.body.email, password: bcrypt.hashSync(req.body.pass, 10)};
  users[index] = tempUser;
  // res.cookie('user_id', users[index].id)
  req.session.user_id = users[index].id;
  index++;
  return res.redirect('/');
})



///////////////////////////AUTHENTICATED ROUTES /////////////////////

//  WRONG WAY OF DOING AUTHENTICATION 

// app.get('/auth/:id/', (req,res) => {
//   const templateVars = {user: users[req.params.id].email};
//   return res.render('auth_home', templateVars);
// })





app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));