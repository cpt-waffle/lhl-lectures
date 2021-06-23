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
//////////////// export the pool 
module.exports = pool;