const { Pool } = require('pg');
const pool = new Pool({
    host: 'localhost',
    user: 'development',
    password: 'development',
    database: 'w05d03',
    port: 5432
})

pool.connect();

// num = 1;
// pool.query(`SELECT * FROM students WHERE id = $1 ;`, [num] ).then((response) => {
//     console.log(response.rows);
//     console.log('successful');
// })

module.exports = () => {
    const getAllUsers = () => {
        return pool.query('SELECT * FROM students').then(response => {
            console.log('successful');
            console.log(response.rows);
            return response.rows;
        })
    }

    const getUser = (id) => {
        return pool.query('SELECT * FROM students WHERE id = $1', [id]).then(response => {
            return response.rows;
        })
    }

    return { getAllUsers, getUser };
}