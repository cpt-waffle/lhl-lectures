console.log('hello world!');

const { Pool } = require('pg');

const pool = new Pool({
    user: 'labber',
    host: 'localhost',
    database: 'w05d03',
    password: 'labber',
    port: 5432
})

pool.connect().then(() => {
    console.log("connected :)");
}).catch(e => {
    console.log("-------- Error -------");
    console.log(e);
})

const queryString = 'SELECT * FROM quizes;';

// pool.query(queryString, (err, res) => {
//     console.log("query completed!");
//     console.log(err);
//     console.log(res.rows);
// })
// WHERE id = 3
const id = process.argv.slice(2)[0];
const name = '%' + process.argv.slice(2)[0] + '%';
pool.query("SELECT * FROM students WHERE name LIKE $1", [name]).then(res => {
    // pool.query before executing, scans through its arguments which are 
    // denoted by $, and adds in the corresponding values from the arguments array
    console.log("query completed!");
    console.log(res.rows);
}).catch(e => {
    console.log(e);
})