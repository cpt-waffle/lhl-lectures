const express = require('express');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');
const app = express();
const bcrypt = require('bcrypt');



//database
const users = [
    {email: 'a@a.com', password: bcrypt.hashSync('1234', 10)}
];
//{email, password}

const findUser = email => {
    for (let user of users) {
        if (user.email === email) {
            return user;
        }
    }
    return false;
}

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieSession({
    name: 'session',
    keys: ['email']
  }))
   


app.get('/', (req, res) => {
    console.log("someone has landed here");
    console.log(req.session)
    const templateVars = { user: req.session.email};
    res.render('homepage', templateVars);
})

app.post('/login', (req,res) => {
    console.log(req.body)
    console.log()
    if (req.body.email && req.body.pass) {
        const user = findUser(req.body.email)
        if (user) {
            console.log(' user found--> ',user);
            console.log(' pass entered-->', req.body.pass);
            bcrypt.compare(req.body.pass, user.password, (err, result) => {
                console.log("RESULT!!!!!!!!!");
                console.log(result);
                if (result) {
                    // res.cookie('email', user.email);
                    req.session.email = user.email;
                    res.send('Logged in!');
                } else {
                    res.send("Invalid user/password");
                }
            })
        } else {
            res.send('invalid user!');
        }
    } else {
        res.send('Error: Please enter user/pass');
    }
})

app.get('/register', (req,res) => {
    res.render('registration');
})

app.post('/register', (req,res) => {
    // console.log(req.body);
    bcrypt.hash(req.body.pass, 10, (err, hash) => {
        // res.send(hash);
        const tempUser = {email: req.body.email, password: hash};
        users.push(tempUser);
        res.redirect('/');
    })
})

app.get('/users', (req,res) => {
    res.json(users); 
})

app.get('/test', (req, res) => {
    bcrypt.hash('password', 10, (err, hash) => {
        res.send(hash);
    })
})

app.listen(8080, () => console.log('Server is on!'));