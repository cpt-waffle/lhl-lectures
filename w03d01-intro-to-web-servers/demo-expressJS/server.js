const e = require('express');
const express = require('express');
const app = express();
const port = 8080;
const array = ['mr buttons', 'rosy', 'puma', 'pikachu'];
const catDescriptions = [{
    weight: '5lb',
    color: 'red'
},
{
    weight: '7lb',
    color: 'black'
},
{
    weight: '7lb',
    color: 'black'
},
{
    weight: '4lb',
    color: 'orange'
}
];
// view engine installation
// npm install ejs
// app.set
// make a folder called views
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    console.log("home page hit!");
    // res.send('<h1>Welcome to my homepage!!</h1>');
    res.render('home')
    // /views/home
})

// how to make a route in express
// 1 - create an app.get route
// 2 - fill out the first argument with the route name ie: "/cats"
// 3 - make sure 2nd argument has a callback with the req,res in it 
// 4 - add logic to route, like send information back to client

// to add a view for cats
// in the views folder, make a file and name it...
// add html into that file
// on server instead of res.send use res.render('file_name')
app.get('/cats', (req, res) => {
    console.log("cat route hit!");
    // res.send('<h2>Here is my cats</h2>');

    res.render('cats_page', {cats: array});
    // res.render ( file_name, {object} )
})
// express js is doing with this route
// whenever someone hits /cats/????
// the ??? gets parsed into an :id or :whateverYouNameIt 
// and we can access that parsed value inside of, req.params
app.get('/cats/:id', (req, res) => {
    console.log("specific cat route hit!!");
    console.log(req.params);
    const specificCat = array[req.params.id];
    const desc = catDescriptions[req.params.id];
    const templateVars = {name: specificCat, desc: desc};
    if ( desc ) {
        return res.render('cats_show', templateVars);
    }
    
    return res.send("CAT DOES NOT EXIST :(");

})


app.listen(port, () => {
    console.log("Server is listening on port ", port)
});