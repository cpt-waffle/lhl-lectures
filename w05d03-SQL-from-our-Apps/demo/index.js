const {Pool, Client} = require('pg');

const pool = new Pool({
    user: 'labber',
    password: 'labber',
    port: '5432',
    host: 'localhost',
    database: 'w05d03'
});

// a client, is a single connection/worker that is able to run queries for your database
// 

// a pool, is a collection of connections/workers that is able to run queries for your database


pool.connect().then(() => {
    console.log("We have connected to our database :)");
}).catch(e => {
    console.log('----------- Error -----------');
    console.log(e.message);
});

pool.query('SELECT * FROM employees;').then( data => {
    console.log("QUERY FINISHED!!");
    // console.log(data.rows);
    console.log("First entry is-----");
    console.log(data.rows);
}).catch(err => {
    console.log("ERROR HAS HAPPENED!!");
    console.log(err.message);
})