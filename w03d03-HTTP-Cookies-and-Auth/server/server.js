const PORT = 8080;
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const users = {
  1: {id: 1, email: 'obiwan@gmail.com',  password: 'helloThere'},
  2: {id: 2, email: 'gimli@gmail.com',   password: 'andMyAxe'},
  3: {id: 3, email: 'a@b.com',           password: '123'},
};

const urlsDatabase = {
  BvnX6: {longUrl: 'www.google.ca', shortUrl: 'BvnX6'},
  XnF5f: {longUrl: 'https://www.old.reddit.com', shortUrl: 'XnF5f'}
}

// GET  /urls   edit urls_index.ejs  loop through url.longURL
// POST /urls  
// POST /urls/:id
// GET /urls/u/:id
// etc...


const app = express();

app.set('view engine', 'ejs');

// middlware
// ----> req ---> MIDDLEWARE ---> route  
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


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
  
  console.log('Cookies: ', req.cookies)
  const templateVars = {user: null};
  const user = users[req.cookies.user_id];
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
      if (req.body.pass === users[id].password) {
        console.log("email and password has matched!");
        // redirect the user to /auth/:id/_______________
        // res.cookie('fruit', 'banana');
        res.cookie('user_id', id);
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
  res.clearCookie('user_id');
  return res.redirect('/');
})


///////////////////////////AUTHENTICATED ROUTES /////////////////////

//  WRONG WAY OF DOING AUTHENTICATION 

// app.get('/auth/:id/', (req,res) => {
//   const templateVars = {user: users[req.params.id].email};
//   return res.render('auth_home', templateVars);
// })





app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));