const bodyParser	= require('body-parser');
const express			= require('express');
const morgan			= require('morgan');
const app = express();
const PORT = 8080;
// step 1 add pg
// npm i pg
const { Pool } = require('pg');

const pool = new Pool({
	user: 'labber',
	host: 'localhost',
	database: 'w05d03',
	password: 'labber',
	port: 5432
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.set('view engine', 'ejs');


app.get('/test', (req, res) => {
	// async
	pool.query('SELECT * FROM employees').then((data) =>{
		console.log("TEST ROUTE HIT!!", data.rows);
		res.json({data: data.rows});
	}).catch(e => {

	})
})


app.get('/', (req, res) => {
	res.render('home');
})
// app.get('/sandbox/:id')

app.get('/sandbox', (req, res) => {
		const templateVars = {};
		res.render('sandbox', templateVars);
})

app.get('/employees/:id', (req, res) => {
	const templateVars = {};
	console.log(req.params);
	// SELECT * FROM employees WHERE id = 4; DROP TABLE employees;
	// SQL INJECTION!
	// req.params.id = '4; DROP TABLE employees;'
	// STEP 1 of making a guard against SQL inject is 
	// use $1 for the paramters ($ notation from docs)
	// STEP 2 == all parameters go into an array,
	// STEP 3 -- PASS paramsArray as a 2ndary argument in the pool
	// query function
	const paramsArray = [req.params.id];
	pool.query(`SELECT * FROM employees WHERE id = $1`, paramsArray).then(data => {
		templateVars.employee = data.rows;
		res.render('employees_index', templateVars);
	}).catch(e => {
		res.send('You have done something wrong!');
	})

})

app.get('/departments', (req, res) => {  // app.get Is HTTP
	const cmd = "SELECT * FROM departments;";
	const templateVars = {};
	pool.query(cmd).then((data) => { // Database calls 
		templateVars.departments = data.rows;
		res.render('departments_index', templateVars); // RESPONSE
	})

})

app.get('/api/departments', (req, res) => {
	res.send('ok');
})

app.listen(PORT, () => console.log("Server is listening on:", PORT));