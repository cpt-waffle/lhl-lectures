// connecting with credentials
// host
// port 
// user
// password
// \c w05d03 -->  connect to the database with the name w05d03
const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'development',
  password: 'development',
  database: 'w05d03'
});

pool.connect((err) => {
    if (err) throw new Error(err);
    console.log('connected!');
});

// console.log(pool);

// pool.query("SELECT * FROM students;", (err, res) => {
//     console.log("COMPLETED!");
//     // console.log(err);
//     console.log(res.rows);
// });


// Client -> task --> completed --> ship | TASK | TASK | TASK | TASK |
           // CLIENT TASK TASK
// Pool -->  // CLIENT TASK TASK
           // CLIENT TASK TASK

const args = process.argv.slice(2);
console.log(args[0]);
const arguments = [1, 'Armand Hilll'];
        
pool.query('SELECT * FROM students WHERE id = $1 AND name = $2;', [ 1, 'Armand Hilll; DROP TABLE students CASCADE' ]).then((res) => {
    console.log("COMPLETED! PROMISE!!!");
    console.log(res.rows);
}).catch((err) => {
 console.log(err);
})

