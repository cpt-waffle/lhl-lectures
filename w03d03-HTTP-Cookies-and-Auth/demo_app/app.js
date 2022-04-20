// setup your const variables
const PORT = 8080;

// require all of packages
const express = require('express');

// middleware
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

//ejs
// set view engine to ejs
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// "Database"
const users = {
  1: {id: 1, email: 'obiwan@gmail.com',  password: 'helloThere'},
  2: {id: 2, email: 'gimli@gmail.com',   password: 'andMyAxe'},
  3: {id: 3, email: 'a@b.com',       password: '123'},
};
let num = 4;

app.get('/', (req, res) => {
  // res.send('<h1>Hello ! and Happy Wed!</h1>');
  const templateVars = { user: null };
  users[num] = {id: num, email: 'aa@aa.ca', password: '33525'};
  num++;
  
  console.log(users);
  // find out the cookie
  // im grab that id 
  // and find the user that corresponds to that ID
  // add the email of the user that is "logged in"
  console.log("----> cookies here ---->", req.cookies);
  const user = users[req.cookies.user_id]; // cookie is nulll user = null
  templateVars.user = user;
  res.render('homepage', templateVars);
})
// get 
app.get('/login', (req, res) => {
  res.render('login');
})

const findUserByEmail = (email) => {
  const givenEmail = email;
  // loop through my object of users
  // i will "authenticate them"!
  for (let userKey in users) {
    console.log(userKey);
    console.log(users[userKey]);
    // if givenEmail == the current user im looping through, then i found the right user
    if (users[userKey].email === givenEmail) {
      // that means i found the right user
      return users[userKey];
      //  badd, dont do this line below !
      // return res.redirect(`/${userKey}`);

    }
  }
  return undefined;
}


app.post('/login', (req, res) => {
  console.log(req.body);
  const user = findUserByEmail(req.body.email);
  if (user) {
    res.cookie('user_id', user.id);
    return res.redirect('/');
  }

  return res.send('Error, bad email, or pass!');
})


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

// whenever you make a request, (1st time, 1000th , etc) server will treat you
// like a 1st time request!!