const express = require('express');
const cowsay = require('cowsay')
const app = express();
const fruits = ['apple', 'mango', 'pineapple', 'grapes', 'peach'];
// installation nodes for EJS views
// npm install ejs
// we want to set the view engine with this following command...
app.set('view engine', 'ejs');

// make a folder called 'views' and put your views in that folder (.ejs)

app.get('/', (req, res) => {
    console.log("someone has come to my home page!");
    // res.send("This is my home page!!!");
    const randomVariable = 'This is a random Variable';
    const templateVars = { random: randomVariable, variety: 'variable', arr: [1,2,3,4]}; // needs an object 
    console.log(templateVars.random)
    res.render('home', templateVars);
})


// Views 
// They are files, that get sent out to the user/client as res...
// view = UI for the client
// view engines --- this lets you add data from server onto the view

app.get('/morning', (req, res) => {
    console.log("this is the morning route!");
    res.send('<div><h3>good morning!</h3><li>Hello world</li></div>')
})


// we will make a route called /fruits, that will send the FRUITS array to a view called
// fruits.EJS and we will loop through fruits on the EJS file, and print em out line by line
// in a list
// STEP 1 -- make a route
app.get('/fruits', (req, res) => {
    console.log(cowsay.say({ text: 'fruits page'} ));
    // respond back with something silly, so that we know it works :)
    // res.send(":)")
    // STEP 2 -- we need to make an EJS file and render it..
    // STEP 3 -- send an object as 2nd arugemnt in the render, with fruits arr
    const templateVars = {fruits: fruits}; // === { fruits } shorthand!
    res.render('fruits', templateVars);
})



app.listen(8080, function() {
    console.log("Server is online and listening on port 8080");
})