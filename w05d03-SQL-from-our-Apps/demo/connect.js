const {Pool, Client} = require('pg');

// console.log(Pool);
// console.log(Client);

const pool = new Pool({
  user: 'labber',
  host: 'localhost',
  password: 'labber',
  database: 'w05d03',
  port: 5432
})

// pool.query('SELECT * FROM employees;', (err, res) => {
//   if (err) throw err

//   console.log("=====================================POOL QUERY");

//   console.log(res.rows)
// })


const getEmployees = () => {
  return pool.query('SELECT * FROM employees').then( res => {
    console.log("=====================================POOL QUERY");
    return res.rows;
  }).catch(err => {
    console.log("------------ERROR---------------")
    console.log(err)
  })
}

getEmployees().then(employees => {
  console.log("our employees are back from promise query");
  console.log(employees);
  return 3.14
}).then(pi => {
  console.log("PI IS BACK")
  console.log(pi);
});





// const client = new Client({
//   user: 'labber',
//   host: 'localhost',
//   password: 'labber',
//   database: 'w05d03',
//   port: 5432
// })

// client.connect();

// client.query('SELECT * FROM employees;', (err, res) => {
//   if (err) throw err

//   console.log("=====================================CLIENT QUERY");
//   console.log(res.rows);

// })
