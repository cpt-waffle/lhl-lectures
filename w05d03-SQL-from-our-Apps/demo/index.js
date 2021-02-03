const {Pool, Client} = require('pg');

console.log("Hello world!!!");
// HOW DO I CONNECT to Postgresql database?
// npm package that does the connection for us

// is your connection to postgresql
// Pool takes in options...

// Client -- single connection 
// Pool   -- is a bunch of clients toghether



const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'development',
    password: 'development',
    database: 'sqlinapp'
});


pool.connect((err) => {
    if (err) throw new Error(err);
    console.log('connected!');
});

// first arg is your SQL query, second argument is your callback

// CALLBACK WAY
// pool.query('SELECT * FROM students;', (err, res) => {
//     console.log(res.rows);
// })
// PROMISE WAY
const getAllStudents = () => {
    pool.query('SELECT * FROM students;').then(res => {
        console.log("IN PROMISE....")
        console.log(res.rows);
    }).catch(e => console.log(e));
}

// getAllStudents();

const getSpecificStudent = (id) => {
    pool.query("SELECT * FROM students WHERE id = $1", [id]).then(res => {
        console.log(res);
    }).catch(e => console.log(e));
}

getSpecificStudent(process.argv[2]);








// console.log(pool);

