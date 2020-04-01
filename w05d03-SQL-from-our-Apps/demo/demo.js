const { Client } = require('pg')
const client = new Client({
	user: 'development',
	password: 'development',
	database: 'w05d03'
})
client.connect()

const getStudents = () => {
	return client.query("SELECT * FROM STUDENTS").then( res => {
		return res.rows;
	});
}

const getStudent = (id) => {
	const query = `SELECT * FROM STUDENTS WHERE id = ${id};`;
	return client.query(query).then( res => {
		return res.rows;
	});

}

const getMarks = () => {
	const query = `
		SELECT name, quiz_results.mark, quizes.total
		FROM students 
		JOIN quiz_results ON students.quiz_results_id = quiz_results.id 
		JOIN quizes ON quiz_results.quiz_id = quizes.id;
	`;

	return client.query(query).then( res => {
		return res.rows;
	})
}


module.exports = { getStudents, getStudent, getMarks };