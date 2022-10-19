const {Pool, Client} = require('pg');

console.log('Hello world!');
// add PG to this file....
// need to install it

const pool = new Pool({
    user: 'labber',
    password: 'labber',
    database: 'w05d03',
    host: 'localhost',
    port: 5432
})


// pool.query("SELECT * FROM employees;", (err, res) => {
//     if (err) throw new Error(err);
//     console.log("CALLBACK WAY@@")
//     console.log(res.rows);
// })

// const id = 3;

// pool.query(`SELECT * FROM employees WHERE id=$1 and first_name=$2;`, [id]).then(res => {
//     console.log("PROMISE WAY!!!")
//     console.log(res.rows);
// }).catch(err => {
//     console.log(err)
// })


getEmployee = (id) => {
//....
return data.rows[0]
}






const getEmployees = () => {
    let command = 'SELECT * FROM employees'
    return pool.query(command).then(data => {
        return data.rows;
    })
}

getEmployees(null, 10).then(employees => {
    console.log("IN MY PROMISE.then");
    console.log(employees);
});