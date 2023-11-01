const PORT = 8080;

const express = require("express");
const morgan = require("morgan");
const cookieParser = require('cookie-parser');


// config -------------------
const app = express();

app.use(morgan('dev'));
app.use(cookieParser())
// body-parser
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');

// user database
const users = {
  1: {id: 1, email: 'obiwan@gmail.com',  password: 'helloThere'},
  2: {id: 2, email: 'gimli@gmail.com',   password: 'andMyAxe'},
  3: {id: 3, email: 'a@b.com',           password: '123'},
  4: {id: 4, email: 'a1@b.com',           password: '123'},
};





app.get('/', (req, res) => {
  console.log(req.headers.cookie);
  const user = users[req.cookies.user_id];
  const templateVars = {user};
  console.log('Cookies: ', req.cookies)
  // return res.send('hello world!');
  // res.cookie('fruit1', 'banana');
  // res.cookie('fruit2', 'apple');
  // res.cookie('fruit3', 'orange');
  // res.cookie('fruit4', 'grapes');
  return res.render('home', templateVars);
})

app.get('/login', (req, res) => {
  return res.render('login');
})

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
      if (users[key].password === req.body.pass) {
        // if password matches LOG THEM IN [x]
        console.log('password matches as well');
        // /1

        // return res.send("we will log you in right now!");
        res.cookie('user_id', key);
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

app.post('/logout', (req, res) => {
  res.clearCookie('user_id');
  return res.redirect('/');
})

app.get('/register', (req, res) => {
  return res.render('register');
})

let id = 5;
app.post('/register', (req, res) => {
  // loop through our database just to check if email already exists
  for (let key in users) {
    if (users[key].email === req.body.email) {
      // if it does send "they cant register"
      return res.send("Error: email already exists");
    }
  }
  // if it doesnt add them into the object
  users[id] = {id, email: req.body.email, password: req.body.pass};
  // set a cookie
  res.cookie('user_id', id);
  id++;
  // redirect to home page
  return res.redirect('/');
})

// This is baaad, we dont want to do the code bellow :(
// app.get('/:id', (req, res) => {
//   const templateVars = {user: users[req.params.id]};
//   return res.render('auth_home', templateVars);
// })



app.listen(PORT, () => console.log(`Server is on and listening on ${PORT}`));

