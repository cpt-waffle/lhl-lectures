const {Pool, Client} = require('pg');

console.log("PG Practice!!");


const pool = new Pool({
    user: 'labber',
    host: 'localhost',
    database: 'w05d03',
    password: 'labber',
    port: 5432
});

pool.query('SELECT * FROM employees;', (err, res) => {
    if (err) {
        throw err
    }

    const data = res.rows;
    console.log(data);
    for (let user of data) {
        console.log(user.first_name);
    }
})

// getEmployees ==> res.rows ALL OF THE ROWS

// getEmployee  ==> one Row, first row => res.rows[0]
const getEmployees = () => {
    return pool.query('SELECT * FROM employees WHERE id = $1', [4]).then( res =>{
       return res.rows;
    }).catch(e => {
        console.log(e);
    })

}