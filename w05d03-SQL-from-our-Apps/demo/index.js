const {Pool, Client} = require('pg');
// CREATE user aa WITH password 'aa';
const pool = new Pool({
    user: 'labber',
    host: 'localhost',
    database: 'w05d03',
    password: 'labber',
    port: 5432
})

pool.connect().then(() => {
    console.log("We are actually connected!");
}).catch(e => {
    console.log('------- ERROR --------');
    console.log(e.message);
})

// Callback example
//         |=> your SQL command
// pool.query('SELECT * FROM departmens;', (err, res)=> {
//     console.log('error: ', err);
//     console.log('res: ', res);
// })

pool.query('SELECT * FROM departments;').then(res => {
    console.log('res:', res);
}).catch(e => {
    console.log(e);
})