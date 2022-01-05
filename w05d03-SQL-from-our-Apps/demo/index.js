const {Pool, Client} = require('pg');

const pool = new Pool({
    user: 'labber',
    password: 'labber',
    host: 'localhost',
    database: 'w05d03',
    port: '5432'
});

// Client
// - worker that is able to do query calls
// Pool 
// - a bunch of workers that are able to do query calls....
pool.connect().then(() => {
    console.log('We have Connected successefully');
}).catch(e => {
    console.log(e);
})


pool.query('SELECT * FROM employees', (err, res) => {
    console.log('res ===> ', res.rows);
    console.log(err);
})

pool.query('SELECT * FROM employees WHERE id = 2').then((res) => {
    console.log(res.rows);
}).catch(err => {
    console.log('err', err);
})



console.log("USING FUNCTION ------");
getEmployees().then((allMyEmployees) => {
    console.log('all my employees');
    console.log(allMyEmployees);
})