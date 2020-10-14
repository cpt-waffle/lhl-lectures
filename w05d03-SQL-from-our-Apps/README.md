## W5D2 - SQL From a Node JS App

### Review (Let's code Toghether!)

Quick Review about SQL from yesterday. We used the `schema.sql` file to run through some basic queries.
To run the schema.
Download it or make a file and enter the data from the `schema.sql`
Then go to the same directory as the `schema.sql` file is in
From there connect to postgres with the command
`psql`
Then run
`CREATE DATABASE w4d2_schema`
Then leave postgres with
`\q`
Afterwards run this command to create tables and populate the them with some data
`psql -d w4d2_schema < schema.sql`

We ran some basic `SELECT` queries,
We talked about `JOINS` and how tables can be connected by `ids` (`... ON students.quiz_results.id = quiz_results.id`)

By now you should be alot more comftable with SQL and writting quaries.

## Main Topic - SQL from our Apps

NOTE: remember to run `npm install` if you want to run this data and also do the steps to populate the the db as shown above.

For all of yesterday you have been running alot of SQL inside the browser and in your terminals. Today we are going to use alot of SQL inside of your NodeJS servers.

## Node-Postgres NPM

We will be using this package for the lecture to connect to the db.

[Documentation Link](https://node-postgres.com/)


## Basic Connection
```js
const { Pool } = require('pg')
const pool = new Pool({
  user: 'random',
  password: 'password',
  database: 'w4d2_schema',
  hostname: 'localhost',
  port: 5432,
  ssl: true
})

pool.connect((err) => {
  if (err) return console.log(err) // Shows error if something happened
}
```

Remember that we needed to make a user with a password to be able to connect to postgres.
The `pg` package gives us tools to make/keep a connection with `postgres` and allow us to run queries inside our server.
This is super useful for things like getting out data and displaying it to the user, or modifying data by user requests in your server (POST to create a new user inside of postgres database, etc)

We also noticed that the query calls are asynchronous!!! Remember how we tried to write a `return` statement and the console.log ran before the query ever finished? This is why we need to use callbacks to access our data.

## Callback example

```js
function getUserWithId(id, callback) {
  client.query('SELECT * FROM students WHERE students.id = $1::integer', [id], (err, res) => {
    console.log(err ? err.stack : res.rows)
    callback(res.rows);
  })
}
//calling the function with a callbaclk!
getUserWithId(1, (rows) => {
  console.log("The result is ", rows)
})
```

## Arguments
You can pass arguments inside of your queries to keep them dynamic.
```js
client.query('SELECT * FROM students WHERE students.id = $1::integer', [id], (err, res) => {
```
The `$1` Refers to the first element inside of the arguments array.

let say part of your query is

```js
'. . .  WHERE students.id = $1::integer LIMIT $2::integer', [1, 5], (err, res) => {
````

`$1` referes to the FIRST element in the array which value is `1`
`$2` referes to the FIRST element in the array which value is `5`


## Moving it all in another file

Now that we figured out all on how to write SQL from a file, Time to make them into functions ( as a library). Why should we do this ? ( you may ask yourself). The idea is quite simple. Picture us one day switching the database entirely to something that is not PSQL. IF that ever happens and all your queries are all over the code base, you will have a hard time trying to refactor all that code.

If however, we have all our code a specific area, all we have to do is refactor the `methods` and be done with it.

`main.js`

```js
const lib = require('./demo');

lib.getStudents().then(rows => {
  console.log(rows);
})
```

`lib.js`

```js
const { Pool } = require('pg')
const pool = new Pool({
  user: 'development',
  password: 'development',
  database: 'w05d03'
})
pool.connect()

const getStudents = () => {
  return pool.query("SELECT * FROM students").then( res => {
    return res.rows;
  });
}

export.default = { getStudents }
```

## References

[Error First Callbacks](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)


### Connecting it with Express Server

For this we create, a `db` file that its purpose is just to connect to our database. Then we would import it into our server.js and after pass to our helper methods that contain psql commands.

```js
// db.js

const { Pool } = require('pg');
// Setup a connection to PSQL with the correct credentials.
const pool = new Pool({
    user: 'development',
    password: 'development',
    database: 'w05d03',
    host: 'localhost',
    port: 5432
})

console.log("connection establishing...");

module.exports = pool;

```

```js

// server.js

const db = require('./db/db'); // require our connection to PSQL
const dbHelpers = require('./dbHelpers/index');
const { getUsers, getMarks } = dbHelpers(db);


```

```js

//dbhelpers.js
module.exports = (db) => {
    const getUsers = () => {
        return db.query("SELECT * FROM students").then(response => {
            return response.rows;
        })
    }

    const getMarks = () => {
        return db.query(`
            SELECT name, quiz_results.mark, total  FROM students
            JOIN quiz_results
            ON students.id = quiz_results.student_id
            JOIN quizes
            ON quizes.id = quiz_results.quiz_id;`
        ).then(response => {
            console.log(response);
            return response.rows;
        })
    }

    return { getUsers, getMarks };
}

```