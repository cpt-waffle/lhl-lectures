const PORT = 8080;
// step 0            -- npm i pg
// step 1            -- require PG
const { Pool } = require('pg');
// step 2            -- new Pool
const pool = new Pool({
    user: 'labber',
    password: 'labber',
    host: 'localhost',
    database: 'w05d03',
    port: 5432
});
// step 3 (OPTIONAL) -- pool.connect()
pool.connect(() => {
	console.log("You have connected!");
})
// step 4 (and on..) -- pool.query(....)


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

// SELECTIVE Commands
app.get('/employees/:id', (req, res) => {
	// how to get this ID from url 
	console.log('req.params', req.params);
	const templateVars = {};
	// write our query
	const command = `
	SELECT first_name, last_name, email 
	FROM employees WHERE id = $1`;

	const parameters = [ req.params.id ];

	pool.query(command, parameters).then(data => {
		templateVars.employee = data.rows;
		res.render('employees_index', templateVars);
	}).catch(e => {
		console.log("ERRORS");
		console.log(e);
		res.send("BAD :(");
	})
})

app.get('/departments', (req, res) => {
	const templateVars = {};
	// async
	pool.query(`SELECT * FROM departments`).then(data => {
		templateVars.result = data.rows;
		console.log(data.rows);
		res.render('departments_index', templateVars);
	})
})

app.get('/api/departments', (req, res) => {
	const templateVars = {};

	pool.query(`SELECT * FROM departments`).then(data => {
		templateVars.result = data.rows;
		console.log(data.rows);
		// res.render('departments_index', templateVars);
		res.json(templateVars)
	})
})

app.listen(PORT, () => console.log("Server is listening on:", PORT));