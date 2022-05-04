const { Pool, Client } = require('pg');

console.log("hello !");

const pool = new Pool({
    user: 'labber',
    host: 'localhost',
    database: 'w05d03',
    password: 'labber',
    port: 5432
})
// new Pool() command
// Connects me to the database with 
// my credentials



pool.query('SELECT * FROM employees;', (err, res) => {
    console.log("TEST!!");
    if (err) {
        console.log(err);
    } else {
        console.log(res.rows);
    }
})

pool.query('SELECT * FROM employees;').then( res => {
  console.log('TEST!!! PROMISES!!!');
  console.log(res.rows);
}).catch( err => {

})


// pool.query() command
// is able to do SELECT quaries 
// on my database!!

// port 
// username
// password
// host
// database

// client  = 1 connection = worker
// A client is a connection
// to a database. INSERT, SELECT, DROP, etc
// (in the realm of the client permissions)


// pool  = 1 connection = MANY workers (8 - 10)
