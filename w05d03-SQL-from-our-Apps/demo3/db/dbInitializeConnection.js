const { Pool } = require('pg');
// 2 - set PG parameters
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'development',
    password: 'development',
    database: 'w05d03'
});
// 3 - (optional ---> put the connect line to see any error or warnings for connecting)
pool.connect((err) => {
    if (err) throw new Error(err);
    console.log('connected from the other side!');
});

module.exports = pool;