// Put connection here...
const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'development',
    password: 'development',
    database: 'w05d03',
    port: 5432
})
// #3 connect
pool.connect();



// then export it
module.exports = pool;