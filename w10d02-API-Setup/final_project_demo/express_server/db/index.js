const { Pool } = require('pg');

const pool = new Pool({
    user: 'labber',
    host: 'localhost',
    database: 'w05d01',
    password: 'labber',
    port: 5432,
  })


  pool.connect(() => {
      console.log('Connected to the database :)');
  })

  module.exports = pool;