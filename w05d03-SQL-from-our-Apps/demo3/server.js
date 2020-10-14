const PORT = 8080;
const express = require("express");
const app = express();
const morgan = require('morgan');
const db = require('./db/db'); // require our connection to PSQL
const dbHelpers = require('./dbHelpers/index');
const { getUsers, getMarks } = dbHelpers(db);

app.set("view engine", "ejs");
app.use(express.static("public")); // with renders, also send out the public folder!
app.use(morgan('dev'));

app.get('/api/marks', (req,res) => {
    getMarks().then(data => {
        res.json({marks: data});
    })
})

app.get('/', (req, res) => {
    getUsers().then(rows => {
        const templateVars = {students: rows};
        res.render('home', templateVars);
    })
})

app.listen(PORT, () => console.log(`Example app listening on port ${PORT}`));