// to connect postgres with javascript files 
// we installed a package called pg (node-postgres) by running npm install pg

// step 0 - require 
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

// to see if we actually connected to the server
// we are going to run an optional command called connect()

pool.connect().then(() => {
    console.log("We are connected :)")
}).catch(e => {
    console.log('--------------- ERROR -----------');
    console.log(e);
})

// THE WRONG WAY!!!!! ( DANGER DANGER DANGER )
// const queryStr = `SELECT * FROM students WHERE id ${param};` // BAD DONT USE ${}

// const arg = process.argv.slice(2)[0];
// console.log("ARG WAS PASSED -->", arg);

const findUserById = (id) => {
    const queryStr = `SELECT * FROM students WHERE id = $1;`
    // return the pool.query ( Promise )
    return pool.query(queryStr, [id]).then(res => {
        console.log("DONE!!!");
        // inside return your res.rows[0] OR res.rows....
        return res.rows[0];
    })
}
// CORRECT WAY !!! USE THE Parameterized query


findUserById(3).then(val => {
    console.log("VAL IS on line 43!!");
    console.log(val);
});