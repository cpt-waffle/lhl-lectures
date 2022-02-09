// get pool and client ?
const { Pool, Client } = require('pg');
const pool = new Pool({
    user: 'labber',
    password: 'labber',
    host: 'localhost',
    database: 'w05d03',
    port: 5432
});

// optional
pool.connect(() => {
    console.log("Connected to database!");
});
// Client and Pool 
// Client -- means 1 worker that's able to make query commands
// Pool   -- means alot of works that are able to make query commands

// You cannot ever RUN queries from the front-end
// pool.query('SELECT * FROM employees;', (err, res) => {
//     console.log("SOMETHING RAN!");
//     console.log(res.rows[0]);
//     // console.log(res);
// })
////////////////////////////// PROMISES
//  i need to make this into a function 
//  How do i do it?
const getEmployees = () => {
    return pool.query('SELECT * FROM employees;').then((res) => {
        console.log("SOMETHING RAN!");
        return res.rows;
    }).catch(err => {
        console.log('ERROR!!');
        console.log(err.message);
    })
}
getEmployees().then(data => {
    console.log("GOT DATA BACK!!");
    console.log(data);
});

// TINYAPP

// 



console.log("SQL from NodeJS file!");
