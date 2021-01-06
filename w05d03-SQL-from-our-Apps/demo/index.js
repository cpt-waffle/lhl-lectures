const { Pool } = require('pg');

//database: w05d03
//host: localhost
//port: 5432
//user: development
//pass: development


const pool = new Pool({
    host: 'localhost',
    port: 5432,
    user: 'development',
    password: 'development',
    database: 'w05d03'
});

pool.connect();
// What is $1 ????
// pool.query('SELECT * FROM students;', (err, res) => {
//     console.log(res.rows); // Hello World!
//     console.log(res.rows[0].name);
//   })

// const getStudents = function() { ... }
 const getStudents = () => {
    return pool.query('SELECT * FROM students;')
    .then(res => {
        // console.log(res);
        return res.rows;
    })
    .then(data => {
    console.log(data)
})
}

// getStudents().then(data => {
//     console.log(data)
// })


const getStudent = (id) => {
    //                                                $1 $2 etc are ARGUMENTS from the ARRAY (1 reprents first elemnt of array, 2 rep...)
    return pool.query("SELECT * FROM students WHERE id = $1;", [id]).then(res => {
        return res.rows;
    })
}


getStudent(1).then(data => {
    console.log(data);
})