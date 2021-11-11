const PORT = 8080;
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');
const bcrypt = require('bcrypt');

const app = express();
app.set('view engine', 'ejs');
// middleware --- ?> 
// REQ --------------> Server ----> MIDDLEWARE <---> Route -----> EJS to HTML conv<--->RES
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cookieSession({
    name: 'session',
    keys: ['key1', 'key2']
  }))

// how middleware is written

// Advanced topic <-- for people that wanted to to know how
// middlware is built..... do not worry about it yet..
app.use((req,res, next) => {
    // console.log("MIDDLEWARE HAS BEEN HIT");
    next();
})

const users = {
    1: {id: 1, email: 'obiwan@gmail.com',  password: bcrypt.hashSync('helloThere', 10)},
    2: {id: 2, email: 'gimli@gmail.com',   password: bcrypt.hashSync('andMyAxe', 10)},
    3: {id: 3, email: 'a@gmail.com',       password: bcrypt.hashSync('test', 10)},
};




const getUserByEmail = (email) => {
    for (key in users) {
        console.log(users[key]);
        if (users[key].email === email) {
            return users[key];
        }
    }
    return null;
}


// build an app.get route
// ^---- sends out the template to client
// need a view template

app.get('/', (req, res) => {
    console.log( req.session.id);
    const templateVars = {user: null};
    if (req.session.id) {// if exists
        templateVars.user = users[req.session.id];
    }
    res.render('homepage', templateVars);
})

app.get('/login', (req, res) => {
    res.render('login');
})

// app.post('/register', (req, res) => {
//     // get user credentials from req.body
//     // make a user object object in your user database
//     // hash the password with it
//     const id = generateUserId() // psudoCode 
//     usersDatabase[id] = {id: id, name: req.body.name, email:req.body.email}
//     bcrypt.hash(req.body.pass, 10).then(result => {
//         usersDatabase[id].pass = result;
//         // {id: fg8sdfji45, name: a@v.ca, email: a@v.ca, pass: '$2b$10$r7mOngDR3qP/gDPfo2G2WOqZGKndQ12FT3zfsT6pbFsT69Srieb2u'}
//     })
// })

// /u/:shortURL  <------ bit.ly/saf903jfskl4
// POST ulrs/ 

app.post('/login', (req, res) => {
    console.log(req.body);
    const user = getUserByEmail(req.body.email);
    if (user) {
        console.log("found!!!");
        // password check
        bcrypt.compare(req.body.pass, user.password).then(result => {
            if (result) {
                req.session.id = user.id;
                res.redirect('/');
            } else {
                res.send("Incorrect Password!");
            }
        })
        // if (req.body.pass === user.password) {
        //     // res.cookie('id', user.id);
        //     req.session.id = user.id;
        //     res.redirect('/');
        // } else {
        //     res.send("Incorrect Password!");
        // }
    } else {
        res.send("not found :(");
    }
    // i need to grab user data from my form
    // I need to check if user exists in my database
    // I need to check if the password matches
    // if both of those conditions are met, then we will 
    // set a cookie and redirect
})


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

