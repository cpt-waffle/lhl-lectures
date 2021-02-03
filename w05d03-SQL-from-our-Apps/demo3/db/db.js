const { Pool } = require('pg');
const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'development',
    password: 'development',
    database: 'sqlinapp',
  })

  pool.connect((err) => {
    if (err) throw new Error(err);
    console.log('database connected...!')
  })


module.exports = pool;