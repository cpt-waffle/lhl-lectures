const PORT = 8080;
const express = require("express");
const app = express();
const morgan = require('morgan');
// #1 require pg pool

app.set("view engine", "ejs");
app.use(express.static("public")); // with renders, also send out the public folder!
app.use(morgan('dev'));

const pool = require('./db/db');
const dbHelpers = require('./dbHelpers/index')(pool);

app.get('/', (req, res) => {
  //                                   // name it differently because of scope
  console.log(dbHelpers);
  dbHelpers.getStudents().then(students => {
    const templateVars = { students };
    pool.query('select * ..')
    res.render('home', templateVars);
  })
})

//Client side rendering example here
app.get('/marks', (req, res) => {
  dbHelpers.getMarks().then( marks => {
    res.json({marks});
  })
})


app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));