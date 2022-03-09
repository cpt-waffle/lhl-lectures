const { Pool, Client } = require('pg');

// credentials of connecting
const pool = new Pool({
    user: 'labber',
    password: 'labber',
    host: 'localhost',
    database: 'w05d03',
    port: 5432
})

pool.connect().then(() => {
    console.log("We have connected!");
}).catch(e => {
    console.log("ERROR :(");
    console.log(e.message);
})

const getEmployees = () => {
    const command = 'SELECT * FROM employees';
    return pool.query(command).then(data => {
        console.log("FINISHED!!");
        return data.rows;
    })
}

//
getEmployees().then(list => {
    console.log("LIST IS HERE!!!");
    console.log(list);
});