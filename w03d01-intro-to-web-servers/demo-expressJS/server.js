// 0 - since we are using an NPM library/framework
//    we want to npm initialize...
// 1 - make a file called index/server.js
// 2 - follow the docs!!

///////////////////////////////
/// installing EJS
// 1 - npm install ejs
// 2 - set 'view engine' to ejs
// 3 - you are REQUIRED to make a 'views/' folder


const express = require('express');
const app = express(); // createServer equivalent 

const cats = ['Puma', 'Rosy', 'Mr Buttons', 'Bob', 'Hannah'];

// set engine AFTER app was created
app.set('view engine', 'ejs');

app.get('/', (request, response) => {
    console.log("/ has been hit!");
    // response.send('Welcome to homepage!');
    response.render('homepage');
})

// ITS ALWAYS REQ FIRST , RES SECOND
app.get('/eth', (req, res) => {
    console.log("/eth has been hit!");
    // HTML

    // res.send('<body><h2>BUY</h2><h3>ETH!!</h3><span><i>:)</i></span></body>');
    // res.send command gets changed when using EJS
    // to the command called: "res.render('filename')  <--- without the .ejs"
    res.render('eth');
})
// How do you list a bunch of items on a page?
app.get('/cats', (req,res) => {
    console.log("/cats has been hit!");

    // res.render() takes 2 parameters!!!
    // parameter 1 ---> filename that will be sent out to the client as request
    // parameter 2 ---> OBJECT {}, is SHARED/PASSED between server.js and
    //                     filename.ejs
    const obj = {fruit: 'apple', cats: cats};
    res.render('cats', obj);
})
///       
app.get('/cats/:cat_id', (req,res) => {
    console.log(req.params);
    // req.params.id is a number
    // i will find the value responsible for the id/index of my array
    // and send it to view using our object
    const obj = {cat: cats[req.params.cat_id]}
    res.render('cats_show', obj);
})


// if I have a route that is able to display more information about that item
// how do i re-use the logic for all the other items?



app.listen(8080, () => {
    console.log(`Server is listening on port 8080`);
})