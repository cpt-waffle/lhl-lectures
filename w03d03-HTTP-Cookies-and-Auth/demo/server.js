const PORT = 8080;
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set('view engine', 'ejs');

app.use(cookieSession({
    name: 'session',
    keys: ['apple']
  }))


const users = {
    1: {id: 1, email: 'obiwan@gmail.com',  password: 'helloThere'},
    2: {id: 2, email: 'gimli@gmail.com',   password: 'andMyAxe'},
    3: {id: 3, email: 'a@gmail.com',       password: 'test'},
};



// bcrypt()

const getUserByEmail = (email) => {
    // loop through my users
    for (let key in users) {
        const user = users[key];
        // if a user email matches the email that i sent them 
        if (user.email === email) {
            // return that user
            return user
        }
        // if i looped through everyone and i found no user x
        // return null
    }
    return null;
}


app.get('/', (req,res) => {
    // console.log("req.query--->", req.query);
    console.log("Home route hit!");
    const templateVars = {};
    console.log('-----> SESSION ----->',req.session.user_id);
    templateVars.user = users[req.session.user_id];
    console.log(templateVars);
    
    res.render("home", templateVars);
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.post('/login', (req, res) => {
    const foundUser = getUserByEmail(req.body.username);
    console.log("FOUND USER IS ----------->", foundUser);
    if (foundUser) {
        if (foundUser.password === req.body.password){
            // res.redirect(`/?user_id=${foundUser.id}`); <------------- BAAAAAAAAAAAD DONT DO THIS !!!!
            // res.cookie('user_id', foundUser.id); <--------- NOT GREAT, but a step up from this ^^^^
            req.session.user_id = foundUser.id;
            res.redirect('/');
        } else {
            res.send("Password no match :(");
        }

    } else {
        res.send("no user :(")
    }
})



app.listen(PORT, () => console.log(`Server is Listening to port ${PORT}`));