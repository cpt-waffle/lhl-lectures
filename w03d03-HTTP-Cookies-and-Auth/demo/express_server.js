// express
// nodemon
// cookie-parser X
// body-parser
// EJS
const PORT = 8080;

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// for (let i in obj) // i is going to be every key in the object
// obj[i]  <--- to access the value
// obj[i].email
const users = {
  1: {id: 1, email: 'obiwan@gmail.com',  password: 'helloThere'},
  2: {id: 2, email: 'gimli@gmail.com',   password: 'andMyAxe'},
  3: {id: 3, email: 'a@b.com',           password: '123'},
};

//////////////////////////////

const urlsDatabase = {
  bx4tl: {shortURL: 'bx4tl', longURL: 'www.google.ca', user_id: 1},
  sdaft: {shortURL: '324ds', longURL: 'www.google.ca', user_id: 1},
  sdf4f: {shortURL: 'sdf4', longURL: 'www.google.ca', user_id: 1},
}


app.get('/', (req, res) => {
  // how do i grab back the cookie that i set, from all of the new upcoming requests?
  console.log(req.headers);
  console.log(req.cookies);
  const tempalateVars = { user: null };
  if (req.cookies.user_id) {
    tempalateVars.user = users[req.cookies.user_id];
  }
  res.render('home', tempalateVars);
})

app.post('/logout', (req, res) => {
  res.clearCookie('user_id');
  res.redirect('/');
})



app.get('/cats', (req, res) => {
  res.send("Mr Meows!");
})

app.get('/login', (req, res) => {
  res.render('login');
})

app.post('/login', (req, res) => {
  console.log('req.body', req.body);
  // what information you ahve sent me from the form?
  // how do i get that information?
  // Is the email in my database????
  // loop through my database object


  for (let id in users) {
    console.log(users[id].email);
    // if email matches the email that the user wrote..
    if (users[id].email === req.body.email) {
      // check if password matches the password in the db
      if (users[id].password === req.body.password) {
        // and if everything matches :) you should be logged in!
        res.cookie('user_id', id);
        res.cookie('banana', 'yes');

        return res.redirect(`/`);
      }
    }
  }
  return res.send("bad login: invalid user, or password");
})

// //////////////////////// LOGIN WITHOUT COOKIES 
// // BAD WAY
// app.get('/:id', (req, res) => {
//   // if req.body grabs items from the body of POST req
//   // req.params grabs the contents of the URL

//   const templateVars = {}
//   res.render('home', {user: users[req.params.id] });
//   //         ^ name of the file to send out, 
//   //                ^ {} values that will be shared with the file
// })

// ////////////



app.get('/dogs', (req, res) => {
  res.send("bark!");
})







app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));