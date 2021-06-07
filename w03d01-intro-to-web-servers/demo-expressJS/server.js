const express = require('express');
const PORT = 8080;
const app = express();
const fruits = ['apple', 'mango', 'pineapple', 'grapes', 'peach'];

// the order is always, request object first, response object second <---
// view engine ---
app.set('view engine', 'ejs')
// you can add programmable logic to HTML
// is a way to send html files to the client
app.get('/apple', (req, res) => {
    console.log('soneone hit the apple url');
    res.send('thats a fruit!');
})

app.get('/fruits', (req, res) => {
    console.log(req.params)
    console.log("someone is visiting /fruits!");
    //res.render takes in 2 parameters
    // param 1 -- filename
    res.render('fruits_index', {fruits: fruits});
    //                         ^  param 2 -- an object that is shared with that specific file (we call this object "templateVars");
})

app.get('/fruits/:fruitID', (req, res) => {
    console.log(req.params);
    const index = req.params.fruitID;
    res.render('fruits_show', {fruit: fruits[index]});
})


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));