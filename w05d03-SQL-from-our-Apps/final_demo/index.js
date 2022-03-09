const PORT = 8080;
// step 0  -- npm install pg
// step 1  -- require PG
const { Pool } = require('pg');
// step 2 -- new Pool!
const pool = new Pool({
    user: 'labber',
    password: 'labber',
    host: 'localhost',
    database: 'w05d03',
    port: 5432
})
// step 3 -- optional pool.connect!
pool.connect().then(() => {
    console.log("We have connected!");
}).catch(e => {
    console.log("ERROR :(");
    console.log(e.message);
})
// step 4 -- use pool.query for your queries 

const bodyParser	= require('body-parser');
const express			= require('express');
const morgan			= require('morgan');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.set('view engine', 'ejs');


app.get('/', (req, res) => {
	res.render('home');
})
// app.get('/sandbox/:id')

app.get('/sandbox', (req, res) => {
	// I just want the TEXT from the form
	// which then I WILL USE in my query...
	console.log("req.params", req.params);
	console.log("req.body", req.body);
	console.log("req.query", req.query);
	const templateVars = {};
	if (!req.query.command) {
		return res.render('sandbox', templateVars);
	}
	pool.query(req.query.command).then(data => {
		console.log(data.rows);
		templateVars.result = data.rows;
		res.render('sandbox', templateVars);
	}).catch( e => {
		templateVars.error = e.message;
		res.render('sandbox', templateVars);
	})
})

app.get('/employees/:id', (req, res) => {
	console.log(req.params.id);
	const templateVars = {};
	// CALL A QUERY for a sepcific employee
	// ASYNC
	pool.query(`SELECT * FROM employees WHERE id = $1`, [ req.params.id ]).then((data) => {
		console.log("RESPONSE HERE!!!!");
		templateVars.employee = data.rows
		// console.log(res.rows);
		res.render('employees_index', templateVars);
	})
	// send that employee down into templatevars
	// render the information on the page
})




app.get('/departments', (req, res) => {
	const templateVars = {};
	const command = "SELECT * FROM departments;";
	pool.query(command).then(data => {
		console.log(data.rows);
		templateVars.departments = data.rows;
		res.render('departments_index', templateVars);
	})

})

app.get('/api/departments', (req, res) => {
	const templateVars = {};
	const command = "SELECT * FROM departments;";
	pool.query(command).then(data => {
		console.log(data.rows);
		templateVars.departments = data.rows;
		res.json(templateVars);
	})
})

app.listen(PORT, () => console.log("Server is listening on:", PORT));