const PORT = 8080;

const users = {
  1: {id: 1, email: 'obiwan@gmail.com',  password: 'helloThere'},
  2: {id: 2, email: 'gimli@gmail.com',   password: 'andMyAxe'},
  3: {id: 3, email: 'a@b.com',           password: '123'},
  4: {id: 4, email: 'a1@b.com',           password: '123'},
};

const urlsDatabase = {
  Bvxn6: {shortURL: 'Bvxn6', longURL: 'www.google.ca', user_id: 1},
  as324: {shortURL: 'as324', longURL: 'www.reddit.com', user_id: 1}
}


const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true})); // req.body


app.get('/', (req, res) => {
  // res.cookie('fruit', 'banana')
  // res.cookie('fruit1', 'apple')
  // res.cookie('fruit2', 'coconut')
  // res.cookie('fruit3', 'grapes')
  console.log(req.headers.cookie);
  console.log(req.cookies); // .user_id = id
  const userId = req.cookies.user_id; // <-------------
  // find that user from our object database [id]
  const user = users[userId]; 
  // set them into template vars 
  const templateVars = { user };
  // and send them into the render
  console.log(templateVars);
  return res.render('home', templateVars);
})

//      string       callback
app.get('/login', (req, res) => {
  return res.render('login');
})

// a route that takes in post request for login 
app.post('/login', (req, res) => {
  // i need a way to send a request (as a client)
  // with credentials, email and password
  console.log(req.body.email);
  console.log(req.body.pass);
  console.log(req.body);
  // loop through my users database
  console.log("loop----");
  for (let i in users) {
    console.log(i);
    console.log(users[i]);
    if (users[i].email === req.body.email ) {
      if(users[i].password === req.body.pass) {
        res.cookie('user_id', users[i].id);
        return res.redirect(`/`)
      }
      return res.send('cannot login, wrong email/pass');
    }
  }
  // if email matches then check password
  // if password and email matches
  // login 
  // if no --> tell em to leave/access denied

  return res.send("cannot login, wrong email/pass");
})

app.post('/logout', (req,res) => {
  res.clearCookie('user_id');
  return res.redirect('/');
})



//////////////// Logged In Routes //////////////////////

// app.get('/:id/', (req,res) => {
//   const templateVars = {};
//   console.log(req.params);
//   templateVars.user = users[req.params.id]
//   console.log(templateVars);
//   return res.render('home_loggedin', templateVars);
// })


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));