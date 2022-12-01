const PORT = 8080;
const express = require("express");
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const cookieSession = require('cookie-session');

// Index counter for users DB
let index = 4;

// Database of Users
const users = {
  1: {id: 1, email: 'obiwan@gmail.com',  password: '$2a$10$zpXHivNusNQY6A1XPMR5ZeyONbVnKdzVV2yvq98jK/oDguOQsBluK'},
  2: {id: 2, email: 'gimli@gmail.com',   password: '$2a$10$i5zdZcePonYRMVBIyXz/senB7fTIyy0R/h9Qy72NBamQyqfH9QF6u'},
  3: {id: 3, email: 'a@b.com',           password: '$2a$10$0loxH9QD/g1i7nDTn1V7pecP.Sqj3PQrQ2A7c5JUpPAf9ne3VurSG'},
};

const app = express();

app.set('view engine', 'ejs');

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use(cookieSession({
  name: 'banana', // this is what the user will see when they inspect their cookies
  keys: ['hello', 'world', 'test', 'bla'],

  // Cookie Options
  maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))

///////// 
// Request -----> Server--->middleware --> middlware ---> route handler ----> middleware
// <--------------------------------------------------------------- Response
app.use((req, res, send) => {
  console.log("START OF MY MIDDLEWARE!");
  send();
  console.log("END OF MIDDLEWARE");

})



app.get('/login', (req, res) => {
  return res.render('login');
})

app.post('/login', (req, res) => {
  // credentials 
  // we have to get user credentials that the client wrote (form)
  // "verify" those credentials
  // console.log(req.body);
//  ---------------- LOOP through our "database"
  for (let key in users) {
    //  ---------------- for every iteration, we need to check IF 
    //  IF user were looping through matches req.body info
    if (users[key].email === req.body.email) {
      //   IF does, then check passwords
      //  if (users[key].password === req.body.pass) {
      if (bcrypt.compareSync(req.body.pass, users[key].password)) {
        //  IF email and pass match = login!
        // return res.send(":) you match! we will log you in");
        /// SET A COOKIE !!!!
        // res.cookie('user_id', users[key].id)
        req.session.user_id = users[key].id;
        return res.redirect(`/`);
      } else {
        //IF it doesnt send error
        return res.send("error: user or pass incorrect");
      }
    }
  }
  // IF we finish loop and no match was found, send error
  return res.send("error: user or pass incorrect");

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
  const salt = bcrypt.genSaltSync(10);
  const pass = bcrypt.hashSync(req.body.pass, salt);
  const tempUser = {id: index, email: req.body.email, password: pass};
  users[index] = tempUser;
  // res.cookie('user_id', users[index].id)
  req.session.user_id = users[index].id;
  index++;
  return res.redirect('/');
})


app.get('/', (req,res) => {
  console.log("/ GET was hit!!!!!!!!!!!!!!!!!");
  const user = users[req.session.user_id];
  // console.log("users", users);
  const templateVars = {user};
  return res.render('home', templateVars);
})


app.get('/test', (req, res) => {
  return res.send(":)");
})



app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));