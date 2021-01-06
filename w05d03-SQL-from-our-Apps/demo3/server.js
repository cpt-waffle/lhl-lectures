const PORT = 8080;
const express = require("express");
const app = express();
const morgan = require('morgan');
// #1 require pg pool
const db = require('./db/db');
const dbHelpers = require('./dbHelpers/index');
const connection = dbHelpers(db);

app.set("view engine", "ejs");
app.use(express.static("public")); // with renders, also send out the public folder!
app.use(morgan('dev'));

// const { Pool } = require('pg');

// const pool = new Pool({
//     host: 'localhost',
//     user: 'development',
//     password: 'development',
//     database: 'w05d03',
//     port: 5432
// })
// // #3 connect
// pool.connect();


/// HOW DO I USE PG in EXPRESS JS
// when a client HITS home page
// i will grab all the users from db
// and display them on the page...
app.get('/', (req, res) => {
  // nodeJS is ASYNC 
//   db.query('SELECT * FROM students;').then(response => {
// //     console.log(response.rows);
//     // add data into templateVars
//     const templateVars = {students: response.rows};
//     res.render('home', templateVars);
//   })
  connection.getStudents().then( data => {
    console.log("........................")
    console.log(data);
    const templateVars = {students: data};
    res.render('home', templateVars);     
  })
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));