const PORT = 8080;

const express = require('express');

// middleware
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();

app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const users = {
  1: {id: 1, email: 'obiwan@gmail.com',  password: 'helloThere'},
  2: {id: 2, email: 'gimli@gmail.com',   password: 'andMyAxe'},
  3: {id: 3, email: 'a@b.com',           password: '123'},
};
// GET /urls
// GET /urls/:shortURL
// POST /urls/:shortURL
// POST /urls
// GET /u/:shortURL
// GET /:shortURL

//// /urls
//   urlDatabase = {{}}
//   usersDatabase {{}}
//  templateVars ={ user_id: ''}

// const defaultValues = { user_id: undefined, urls: []}

app.get('/', (req, res) => {
  // res.send('Hello :)');
  console.log(req.headers.cookie);
  console.log('Cookies: ', req.cookies);
  // const templateVars = {...defaultValues, user_id: 3}
  const templateVars = {user_email: undefined};
  if (req.cookies.user_id) {
    console.log('logged in as:', users[req.cookies.user_id].email);
    templateVars.user_email = users[req.cookies.user_id].email
  }
  res.render('homepage', templateVars);
})


app.get('/login', (req, res) => {
  // res.send('LOGIN ROUTE HERE!');
  if (req.cookies.user_id) {
    return res.redirect('/');
  } 
  return res.render('login');
})

app.post('/login', (req, res) => {
  // Where do i get the email and pass from the client???
  console.log('req.body', req.body); 
  const email = req.body.email; // a@b.com
  const password = req.body.password; //123
  // how do i loop through an object of objects?
  for (let id in users) {
    console.log("--------------");
    // does any email match the email that the user entered?
    // does the password match ?
    const currentUserThatsBeingLooped = users[id]; /// object
    if (currentUserThatsBeingLooped.email === email) {
      if (currentUserThatsBeingLooped.password === password) {
        // WE NEED TO AUTHENTICATE this user!!
        // somehow we need to give this user a label that they 
        // are logged in!
        // res.cookie('lightsaber', 'purple');
        // res.cookie('car', 'corolla');
        res.cookie('user_id', id);
        return res.redirect(`/`)
      }
    }
  }
  res.send('u tried to login!!');
})


app.post('/logout', (req, res) => {
  res.clearCookie('user_id');
  res.redirect('/');
})



app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}`));