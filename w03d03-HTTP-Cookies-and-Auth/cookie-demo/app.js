const PORT = 8080;

// "database"
const users = {
  1: {id: 1, email: 'obiwan@gmail.com',  password: 'helloThere'},
  2: {id: 2, email: 'gimli@gmail.com',   password: 'andMyAxe'},
  3: {id: 3, email: 'a@b.com',           password: '123'},
};


const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');


const app = express();

app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));
app.use(cookieParser());

app.set('view engine', 'ejs');

app.get('/', (req,res) => {
  // res.send(":)");
  const templateVars = { email: undefined };
  if (req.cookies.user_id) {
    templateVars.email = users[req.cookies.user_id].email;
  }
  console.log(req.cookies);
  // How Can i get back the cookie from EACH request???
  res.render('index', templateVars);
})


// login page
app.get('/login', (req, res) => {
  res.render('login');
})

app.post('/login', (req, res) => {
  console.log(req.body);
  // req.body.email
  // req.body.pass
  // loop through users object
  for (let key in users) {
    console.log(users[key]);
    // check if req.body.email == matches any users email
    if (users[key].email === req.body.email) {
      // if user email matches, check if password matches
      if (users[key].password === req.body.pass) {
        // if both match, log em in
        // return res.redirect(`/${key}`) <-------- WRONG WAYYYYY;
        ///////////////////////////////// 
        res.cookie('user_id', key);
        ///////////////////////////////// 
        // ENCRYPT THE COOKIE^^
        return res.redirect('/');
      }
    }
  }
  return res.send('Error: Invalid user');
  // if they dont, send response. Error: Invalid Login
})


app.post('/logout', (req, res) => {
  res.clearCookie('user_id');
  return res.redirect('/');
})


/////////////////////////// LOGGED IN ROUTES /////////////////////////

// app.get('/:id', (req, res) => {
//   console.log(req.params);
//   //templateVars is just an object
//   res.render('index', {email: users[req.params.id].email});
// })



app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));