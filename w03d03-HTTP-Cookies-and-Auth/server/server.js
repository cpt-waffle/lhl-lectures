const PORT = 8080;
const express = require("express");
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

// database of users
const users = {
  1: {id: 1, email: 'obiwan@gmail.com',  password: 'helloThere'},
  2: {id: 2, email: 'gimli@gmail.com',   password: 'andMyAxe'},
  3: {id: 3, email: 'a@b.com',           password: '123'},
};

const app = express();

app.set('view engine', 'ejs');

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
//   morgan
// 
// REQ -----------/-------------->  SERVER  ===> {MIDDLEWARE} ===> app.get('/') 

app.get('/login', (req, res) => {
  return res.render('login');
})

app.post('/login', (req, res) => {
  // credentials 
  // how do i get what the user has written in the form???
  console.log(req.body);
  // we have to get user credentials that the client wrote (form)
  // "verify" those credentials
//  ---------------- LOOP through our "database"
  for (let key in users) {
    //  ---------------- for every iteration, we need to check IF 
    //  IF user were looping through matches req.body info
    if (users[key].email === req.body.email) {
      //   IF does, then check passwords
      if (users[key].password === req.body.pass) {
        //  IF email and pass match = login!
        // return res.send(":) you match! we will log you in");
        /// SET A COOKIE !!!!
        res.cookie('user_id', users[key].id)
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
  res.clearCookie('user_id');
  return res.redirect('/');
})


app.get('/', (req,res) => {
  console.log("someone visits home page!");
  // i have to figure out who is currently logged in and visiting this page....

  console.log(req.headers.cookie);
  console.log('user_id ==?>   ',req.cookies.user_id);
  const user = users[req.cookies.user_id];
  const templateVars = {user};
  return res.render('home', templateVars);
})

// // ---------- LOGGED IN ROUTES GO HERE!!!~
// app.get('/:id/', (req,res) => {
//   console.log(req.params);
//   const user = users[req.params.id];
//   console.log(user);
//   const templateVars = {user};
//   return res.render('auth_home', templateVars);
// })

// //.... 

app.get('/test', (req, res) => {
  return res.send(":)");
})



app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));