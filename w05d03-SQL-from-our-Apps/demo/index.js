const {Pool, Client} = require('pg');

console.log("Datbase from JS Practice");

// Credentials 
const pool = new Pool({
  user: 'labber',
  host: 'localhost',
  database: 'w05d03',
  port: 5432,
  password: 'labber'
})
//         SQL QUERY
// pool.query('SELECT * FROM employees;', (err, res) => {
//     if (err) {
//         throw err;
//     }
//     console.log("yay")
//     for (let row of res.rows) {
//         console.log(row.email);
//     }
// })

const getEmployees = () => {
    // make sure your helper method returns POOL.QUERY
    return pool.query('SELECT * FROM employees;').then(res => {
        console.log("PROMISE WAY!")
        // .then from pool.query returns the data you want pass
        return res.rows;
    }).catch(e => {
        console.log('ERROR: ', e );
    })
}

getEmployees().then((data) => {
    console.log("line 35");
    console.log(data);
})

// POOL vs CLIENT ?

// Client --