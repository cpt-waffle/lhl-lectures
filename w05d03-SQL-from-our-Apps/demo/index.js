const {Pool} = require('pg');
// A Client is a worker that runs your SQL queries and gives you back output

// Pool -- a pool is a BUNCH OF CLIENTS referenced as 1 big obj.
// 


// psql command with the flags
// but now we can do it programatically and withing the JS file...
const pool = new Pool({
    user: 'labber',
    password: 'labber',
    host: 'localhost',
    database: 'w05d03',
    port: 5432
})

pool.connect().then(() => {
    console.log("We have connected :)");
}).catch(e => {
    console.log("------- Error ------");
    console.log(e);
})



// pool.query('SELECT * FROM departments;', (err, res) => {
//     if (err) {
//         throw new Error(err);
//     } else {
//         console.log(res.rows);
//     }
// })


pool.query('SELECT * FROM departments;').then(res => {
    console.log(res.rows);
}).catch(err => {
    console.log(err);
})