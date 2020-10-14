const { Pool } = require('pg');
// Setup a connection to PSQL with the correct credentials.
const pool = new Pool({
    user: 'development',
    password: 'development',
    database: 'w05d03',
    host: 'localhost',
    port: 5432
})

console.log("connection establishing...");

module.exports = pool;