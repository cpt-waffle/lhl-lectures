const PORT = 8080;
const express = require('express');
const morgan  = require('morgan');
const cookieParser = require('cookie-parser');
const app = express();

// "database"
const users = {
  1: {id: 1, email: 'obiwan@gmail.com',  password: 'helloThere'},
  2: {id: 2, email: 'gimli@gmail.com',   password: 'andMyAxe'},
  3: {id: 3, email: 'a@b.com',           password: '123'},
};

const urlDatabase = {
  a32fs6: {longURL: 'www.google.ca', shortURL: 'a32fs6', user_id: 1},

}

app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());


app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  // how do i get the cookie out from the request?
  console.log(req.headers.cookie);
  res.cookie('nofrills', 'banana');
  console.log('Cookies: ', req.cookies)
  const templateVars = {user: null};
  const user = users[req.cookies.user_id];
  if (user) {
    templateVars.user = user;
  }
  return res.render('home', templateVars);
})

app.post('/logout', (req, res) => {
  res.clearCookie('user_id');
  return res.redirect('/');
})


// build a login route
app.get('/login', (req,res) => {
  return res.render('login');
})
// build a login route that is a post request
app.post('/login', (req, res) => {
  // check if the user that was entered is inside of our database
  for (let key in users) {
    // if they are, we will send them to the "auth" routes
    if (users[key].email === req.body.email) {
      if (users[key].password === req.body.pass) {
        res.cookie('user_id', users[key].id);
        return res.redirect(`/`)
      }
    }
  }
  // if they are not we will send them the "go away" res
  return res.send(":( ")
})

// app.post('/users', (req, res) => {
//   const id = randomIDGen();
//   const user = {id, email: req.body.email, password: req.body.pass}
//   users[id]= user;
//   res.cookie('user_id', id);
//   res.redirect('/');
// })

///////////////////// Logged in routes ///////////////////////////////

// app.get('/:id', (req, res) => {
//   const user = users[req.params.id];
//   if (user) {
//     const tempalateVars = {user: user};
//     return res.render('auth_home', tempalateVars);
//   } 
//   return res.send('not logged in!');
// })

// BAD IDEA, only for demo purposes, dont use in irl!

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));