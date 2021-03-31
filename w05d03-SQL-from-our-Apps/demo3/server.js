/// seperation of concerns ( refactor to move config and create dbHelpers )
// 1- we will need a file that will have the responsibility of JUST connecting to the database
// it return that pool connection.
// 2 - we are going to move our QUERY calls, into a file and  make them into functions
// HINT HINT this is where promises will be IMPORTANT!!!!!


const PORT = 8080;
const { response } = require("express");
const express = require("express");
const app = express();
const morgan = require('morgan');
// 0 - npm install pg
// 1 - require PG Pool

const pool = require('./db/dbInitializeConnection');
// 2 - require dbHelpers and then initialize them BY PASSING POOL into them
const dbHelpersInitialize = require('./dbHelpers/index');
const helpers = dbHelpersInitialize(pool);

console.log(helpers);

app.set("view engine", "ejs");
app.use(express.static("public")); // with renders, also send out the public folder!
app.use(morgan('dev'));

app.get('/', (req, res) => {
    const templateVars = {};
    helpers.getStudents().then((rows) => {
        templateVars.students = rows;
        res.render('home', templateVars);
    });
    // pool.query('SELECT * FROM students;').then(response => {
    //     console.log(response.rows)
    //     templateVars.students = response.rows;
    //     res.render('home', templateVars);
    // })
})

//Client side rendering example here
app.get('/marks', (req, res) => {
    res.send('ok');
})


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));