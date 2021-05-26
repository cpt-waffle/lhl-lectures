const { Pool } = require('pg');
// to add a pass to a user... ( example )
// ALTER USER development with PASSWORD 'development';
const pool = new Pool({
    user: 'development',
    host: 'localhost',
    database: 'w05d03',
    password: 'development',
    port: 5432,
});


pool.connect().then(() => {
    console.log("We are connected :)")
}).catch(e => {
    console.log('--------------- ERROR -----------');
    console.log(e);
})


module.exports = pool;