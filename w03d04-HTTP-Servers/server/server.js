const PORT = 8080;
const express = require("express");
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const cookieSession = require('cookie-session');

// database of users
let index = 4;

const users = {
  1: {id: 1, email: 'obiwan@gmail.com',  password: '$2a$10$O4v8JCZckaGqmght4zrw3OnqjassYrf5z9.9wzuY.5sR2fCEpDp62'},
  2: {id: 2, email: 'gimli@gmail.com',   password: '$2a$10$WU1bIYEpEti29gt/46a5Xu2TmOf4TIZLP6YTzCFmwrdak.Pye3bbm'},
  3: {id: 3, email: 'a@b.com',           password: '$2a$10$RIM//AT4F2xgROHcTNxdn.o9GlxsSne39uBxEDZxLpEBah2bt1aS6'},
};

const app = express();

app.set('view engine', 'ejs');

// middleware
//   morgan
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

app.use(cookieSession({
  name: 'banana',
  keys: ['key1', 'key2', 'key3'],

  // Cookie Options
  maxAge: 365 * 24 * 60 * 60 * 1000 // 24 hours
}))


app.use((req, res, next) => {
  console.log("MY MIDDLEWARE");
  console.log("_-------------------_");
  res.greetings = "HELLO WORLD!!!";
  req.aaaa = 'some number';
  next();
  console.log("TEST TEST TEST TEST TEST");
  console.log("X_X_X_X_X_X_X_X_X_X");
})


// 
// REQ -----------/-------------->  SERVER  ===> {MIDDLEWARE} ===> app.get('/') =====> {MIDDLEWARE}

app.get('/login', (req, res) => {
  return res.render('login');
})

app.post('/login', (req, res) => {
  console.log(users);
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
  req.session = null;
  return res.redirect('/');
})


app.get('/register', (req,res) => {
  return res.render('register');
})

app.post('/register', (req,res) => {
  if (!req.body.email || !req.body.pass) {
    return res.send("both fields must be filled out :(")
  }

  for (let key in users) {
    if (users[key].email === req.body.email) {
      return res.send('Error: user email already in use!');
    }
  }

  bcrypt.genSalt(10).then( salt => {
    return bcrypt.hash(req.body.pass, salt);
  }).then(hpass => {
    const tempUser = {id: index, email: req.body.email, password: hpass};
    users[index] = tempUser;
    // res.cookie('user_id', index);
    req.session.user_id = index;
    index++;
    return res.redirect('/');
  })
})


app.get('/', (req,res) => {
  console.log("someone visits home page!");
  // i have to figure out who is currently logged in and visiting this page....
  const user = users[req.session.user_id];
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