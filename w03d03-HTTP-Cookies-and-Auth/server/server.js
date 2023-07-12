const PORT = 8080;

const express = require('express');
// 1) npm i morgan 
// 2)
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

// user database
const users = {
  1: {id: 1, email: 'obiwan@gmail.com',  password: 'helloThere'},
  2: {id: 2, email: 'gimli@gmail.com',   password: 'andMyAxe'},
  3: {id: 3, email: 'a@b.com',           password: '123'},
  4: {id: 4, email: 'a1@b.com',           password: '123'},
};


const app = express();
// 3)
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true})); // body-parser;
app.use(cookieParser());

app.set('view engine', 'ejs');

app.get('/test', (req, res) => {
  return res.send("ok!");
})

app.get('/', (req,res) => {
  // res.cookie('fruit', 'banana');
  // res.cookie('fruit', 'apple');
  // res.cookie('fruit', 'orange');
  console.log('req.headers.cookie: ',req.headers.cookie);
  console.log('req.cookies: ',req.cookies);
  const user_id = req.cookies.user_id; // 1
  const templateVars = {email: undefined}
  if (user_id) {
    templateVars.email = users[user_id].email;
  }
  return res.render('home', templateVars);
})


app.get('/login', (req,res) => {
  return res.render('login');
})

// const users = {
//   1: {id: 1, email: 'obiwan@gmail.com',  password: 'helloThere'},
//   2: {id: 2, email: 'gimli@gmail.com',   password: 'andMyAxe'},
//   3: {id: 3, email: 'a@b.com',           password: '123'},
//   4: {id: 4, email: 'a1@b.com',           password: '123'},
// };


// [x] fill out a form with their credentials
// [x] get the credials back to the backend server
// validate those credentials if they exist in our server
   // -[x] looping through users database
   // -[x] finding an object that has the same email as the credential given
   // -[x] checking the password of the object IF that object has matched the credential password 
// if they valid we have to LOG THEM IN
// if they are not valid we have to give them AN ERROR

app.post('/login', (req, res) => {
  console.log("req.body ==>", req.body);

  const formEmail = req.body.email; 
  const formPass  = req.body.banana;
  console.log("------------LOOP-------------")
  for (key in users) {
    console.log("key",key);
    console.log("val", users[key]);
    console.log("i email", users[key].email);
    console.log("i password", users[key].password);
    if (formEmail === users[key].email) {
      if(formPass === users[key].password) {
        // return res.send("We should log you in :)");
        // res.redirect(`${key}/home`);
        res.cookie('user_id', key);
        return res.redirect('/');
      } else {
        return res.send("Email or password is incorrect :(");
      }
    }
  }
  console.log("------------LOOP-------------")

  return res.send("Email or password is incorrect :(");
})

app.post('/logout', (req,res) => {
  res.clearCookie('user_id');
  return res.redirect('/');
})



app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));



// WRONG -----------------Logged in routes
// app.get('/:user_id/home', (req,res) => {
//   return res.render('loggedInHome', {username: users[req.params.user_id].email})
// })

// app.get('/:user_id/stuff', (req,res) => {

// })
// WRONG -----------------Logged in routes