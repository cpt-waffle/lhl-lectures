const PORT = 8080;
const { response } = require("express");
const express = require("express");
const app = express();
const morgan = require('morgan');
app.set("view engine", "ejs");
app.use(express.static("public")); // with renders, also send out the public folder!
app.use(morgan('dev'));
// to add PG into a express server..
// 1 require PG {POOL}

const pool = require('./db/dbInitializeConnection');

const helpers = require('./dbHelpers/index');
const dbHelpers = helpers(pool);

//Client side rendering example here
app.get('/marks', (req, res) => {
    const query = `
    SELECT name, mark, total FROM students
    JOIN quiz_results
        ON students.id = quiz_results.student_id
    JOIN quizes
        ON quizes.id = quiz_results.quiz_id;
    `
    pool.query(query).then(data => {
        res.json(data.rows);
    })
    // res.send('ok');
    
    // SELECT name, mark, total FROM students JOIN quiz_results ON students.id = quiz_results.student_id JOIN quizes ON quizes.id = quiz_results.quiz_id;
})

app.get('/:id', (req, res) => {
    const templateVars = {};
    pool.query("SELECT * FROM students WHERE id = $1;", [req.params.id]).then(data => {
        console.log("data", data);
        templateVars.students = data.rows;
        res.render('home', templateVars);
    })
})


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));