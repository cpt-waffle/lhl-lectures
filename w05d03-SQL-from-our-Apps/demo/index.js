require('dotenv').config();
const {Pool, Client} = require('pg');

console.log("PG example");
// localhost, user, password, database 

const pool = new Pool({
  user: 'labber',
  host: 'localhost',
  password: 'labber',
  database: 'w05d03',
  port: 5432,
})

// pool.query('SELECT * FROM employees;', (err, res) => {
//   if (err) throw err;

//   console.log(res.rows);
//   for (let user of res.rows) {
//     console.log(user.first_name);
//   }
// })


const getAddresses = () => {
  return pool.query('SELECT * FROM addresses;').then(res => {
    console.log("promise has finished!");
    return res.rows
  }).catch(e => {
    throw e;
  })
}

getAddresses().then(result => {
  console.log("result came in");
  console.log(result);
})

// getUser(id) => pool.query('SELECT * FROM users WHERE id = id).then(res => res.rows[0])