const PORT = 8080;
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

// bodyParser.urlencoded({ extended: false }) ==> (req, res, next) => { ... }
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'ejs');


const users = {
    1: {id: 1, email: 'obiwan@gmail.com',  password: 'helloThere'},
    2: {id: 2, email: 'gimli@gmail.com',   password: 'andMyAxe'},
    3: {id: 3, email: 'a@gmail.com',       password: 'test'},
};

let counter = 0;

app.use('/', (req, res, next) => {
    console.log("MIDDLEWARE HERE!!!!!");
    next();
})


app.get('/', (req, res) => {
    // res.send("<h1>Welcome to Vasiliy's server</h1>");
    console.log(req.cookies);
    const templateVars = {email: req.cookies.email};
    res.render('home', templateVars);
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/logout', (req, res) => {
    res.clearCookie('email');
    res.redirect('/login');
})
// app.get('/:id', (req,res) => {
//     res.send(`LOGGEDN IN AS ${users[req.params.id].email}`);
// })
// GET AND A POST !!
//  get is client to ASK FOR INFO
//  POST is when client wants to change/add/delete/alter something on the server

const findUser = (email='a@gmail.com', database) => {
    // loop through the database
    for (user in database) {
        console.log("USER --->", database[user].email);
        if (email === database[user].email) {
            return database[user];
        }
    }

    return null;
    // and if i find an email that matches THE SAME EMAIL
    // i will return that user.
    // if i find no user i will return null/false/undefined
}


app.post('/login', (req, res) => {

    console.log(req.body);
    const user = findUser(req.body.email, users);
    if (user) {
        // check password
        if (user.password === req.body.password) {
            res.cookie('email', user.email); // set the auth 
            res.redirect('/');
            return;
        }
    }
    res.send('USER DOES NOT EXIST');
})



app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));