console.log('Hello World');

const { Client } = require('pg');
const client = new Client({
    user: 'development',
    password: 'development',
    database: 'w05d03'

});
client.connect();


const getStudents = () => {
    return client.query("SELECT * FROM students;").then( res => {
        console.log("COMING FROM THE PROMISE!!!!!");
        return res.rows;
    })
}

const getStudent = (id) => {
    return client.query(`SELECT * FROM students WHERE id = $1::integer;`, [id]).then( res => {
        return res.rows;
    })
}

const getMarkForStudent = (id) => {
    const q = `
        SELECT students.id, students.name, students.email, mark, total FROM students 
        JOIN quiz_results ON students.quiz_results_id = quiz_results.id
        JOIN quizes ON quiz_results.quiz_id = quizes.id WHERE students.id = $1::integer;
    `;
    return client.query(q, [id]).then(res => {
        // console.log(res.rows)
        return res.rows;
    })
}

// SELECT students.id, students.name, students.email, mark, total FROM students 
// JOIN quiz_results ON students.quiz_results_id = quiz_results.id
// JOIN quizes ON quiz_results.quiz_id = quizes.id WHERE students.id = 4;


module.exports = { getStudents, getStudent, getMarkForStudent}