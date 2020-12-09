const PORT = 8080;
const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const app = express();
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cookieSession({
    name: 'session',
    keys: ['key1']
  }))

let userCounter = 4;

const users = {
    1: {id: 1, email: 'obiwan@gmail.com',  password: 'helloThere'},
    2: {id: 2, email: 'gimli@gmail.com',   password: 'andMyAxe'},
    3: {id: 3, email: 'a@gmail.com',       password: 'test'},
};

const urlsDatabase = {
    bVnK6: {longURL: 'www.google.ca', shortURL: 'bVnK6', user_id: 1},
    XnV2D: {longURL: 'www.tsn.ca', shortURL: 'XnV2D', user_id: 2},
    fdfgs: 'www.reddit.com'
}
/**
 * for (let url in urlsDatabase) {
 *  <%= urlsDatabase[url].longURL
 * 
 * }
 */

//  GET /urls
//  POST /urls
//  GET /urls/:shortURL

app.get('/', (req, res) => {
    // GETS US the cookies that WERE already set from the client
    console.log(req.session.user_id);
    const templateVars = { user: undefined };
    if ( req.session.user_id) {
        templateVars.user = users[req.session.user_id];
    }
    console.log(templateVars.user);
    console.log(templateVars.user.password);
    console.log(bcrypt.hashSync(templateVars.user.password, 10));

    res.render('home', templateVars);
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', (req,res) => {
    console.log(req.body);
    let user = null;
    for (let id in users) {
        if (users[id].email === req.body.email) {
            user = users[id];
        }
    }
    if (user) {
        // res.redirect(`/?user_id=${user.id}`);  <-- BAAAAAAAD!!!!! DONT DO THIS ANYMORE (since 2000's)
        // res.cookie SETS a COOKIE
        res.cookie('user_id', user.id);
        req.session.user_id = user.id;
        res.redirect('/');
    } else {
        res.send(' <h2>LOGIN FAIL :( </h2>');
    }
})

app.listen(PORT, console.log(`Server is listening on PORT = ${PORT}`));