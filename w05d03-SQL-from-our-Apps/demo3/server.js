const PORT = 8080;
const express = require("express");
const pool = require('./db/dbInitializeConnection');
// const { Pool } = require('pg');
const app = express();
const morgan = require('morgan');

const dbHelpers = require('./dbHelpers/index')

const {getAllStudents} = dbHelpers(pool);
console.log(getAllStudents);
// Step 1 make a connection with the psql server
// MODULARITY --- connection will happen in a different file...
// we're moving pool = new Pool and then module exporting it 


// const pool = new Pool({
//     user: 'labber',
//     host: 'localhost',
//     database: 'w05d03',
//     password: 'labber',
//     port: 5432
// })


app.set("view engine", "ejs");
app.use(express.static("public")); // with renders, also send out the public folder!
app.use(morgan('dev'));
// step 2 write quries.....

// const getAllStudents = () => {
//     const queryString = 'SELECT * FROM students;';
//     return pool.query(queryString).then(data => {
//         console.log('LINE 30: ', data.rows);
//         return data.rows;  
//     })
// }



app.get('/', (req, res) => {
    const templateVars = {};
    // const queryString = 'SELECT * FROM students;';
    // pool.query is an async function..
    // render may happen before pool.query finishes...
    // in order to make sure they happen in the correct time
    // we will move res.render inside of .then()

    // pool.query(queryString).then(data => {
    //     console.log(data.rows);
    //     templateVars.students = data.rows;
    //     res.render('home', templateVars);
    // })
    getAllStudents().then(students => {
        templateVars.students = students;
        res.render('home', templateVars);
    }).catch(e => {
        console.log(e);
    })

})


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));