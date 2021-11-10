// require express
const PORT = 8080;
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// app = express();
const app = express();
// Making a login/registration pages!!
// using cookies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
// COOKIES!!!!!!
// a variable that your browser keeps
// ^-- credential 


// Client <---------REQ-----------> Server <---->  MIDDLEWARE <----> ROUTES <----RES-------------->

const users = {
    1: {id: 1, email: 'obiwan@gmail.com',  password: 'helloThere'},
    2: {id: 2, email: 'gimli@gmail.com',   password: 'andMyAxe'},
    3: {id: 3, email: 'a@gmail.com',       password: 'test'},
};

// Now users will have their own urls that they created
// we will change the urlDatabase from what you have
// to this:
const urlDatabase = {
    'Xvb6n': {longURL: 'www.google.ca' , shortURL: 'Xvb6n', user_id: 1},
    'A6bv4': {longURL: 'www.reddit.ca' , shortURL: 'A6vct', user_id: 2}
}
//  for (let url in urlDatabase) {
//    <p><%= url %> <%= urlDatabase[url].longURL %> 
//} 


//  1 - make a login page
//  2 - creates / authenticates the account
//  3 - redirect

// i have a username
const findUserByEmail = (email) => {
    for (key in users) {
        if (users[key].email === email) {
            return users[key];
        }
    }
    return null;

}
// ix have an object full of users
// i must loop through this object
// return me back a user that matches emails


app.set('view engine', 'ejs');

// route <--- for testing
app.get('/test', (req, res) => {
    res.send('hello world :)');
})


// created the form!
app.get('/login', (req,res) => {
    res.render('login');
})
// app get register ( for the form)
// app post register (for the getting info from user)

app.post('/login', (req,res) => {
    console.log("Someone is trying to login!!");
    console.log(req.body);
    // foundUser   <--- a User object {id, email, pass} if found OR null if not found
    const foundUser = findUserByEmail(req.body.email)
    if (foundUser) {
        // check their pass
        // if pass maches what they user inputed in the form (req.body.password)
        // set a cookie
        // if not tell em to go away!
        console.log("FOUND USER <----", foundUser);
        // res.send('found user!!  :)');
        res.cookie('user_id', foundUser.id);
        res.redirect(`/`);
    } else {
        res.send('user does not exist :(');
    }
    // res.redirect('/');
})

app.get('/', (req,res) => {
    const templateVars = {user: null};
    console.log("-----------------------");
    console.log(req.cookies);
    console.log("-------------------------");
    // Find the user that the req.cookies.user_id belongs to 
    // save it in the template vars to show
    if (req.cookies.user_id) {
        templateVars.user = users[req.cookies.user_id]
    }
    res.render('homepage', templateVars);
})

// app.listen()
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));