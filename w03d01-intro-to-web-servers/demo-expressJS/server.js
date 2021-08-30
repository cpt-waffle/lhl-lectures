const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    console.log("home page has been hit!!");
    // res.send("<h1<body>>Hello WRod</h1><p>This is my home page! welcome. i hope it looks good </p><h2>Never Gonna Give you Up!</h2></body>");
    // /views/home!!!
    res.render('home');
})
// lets make a cats route!!!

// 1 - declare a route /cats
// 2 - respond back with a cats_home view
// 3 - create cats_home view
// 4 - add some html to cats_home view
let fruit = 'apple';

app.get('/cats', function(req, res) {
    const templateVars = {};
    templateVars.cats = ['Puma', "Rosy"];
    templateVars.name = 'Susan';
    console.log(templateVars);
    // res.render takes 2 paramters, One is required ("what view we will render?")
    // 2nd param --- an object that will share its keys/values with that view
    res.render('cats_view', templateVars);
})

app.post('/cats', function(req,res) {
    //...
})



app.listen(8080, function() {
    console.log("Server is listening on port 8080!!!");
})