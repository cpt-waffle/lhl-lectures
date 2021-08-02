const PORT = 8080;
// EVERYTHING STARTS FROM CONNECTING the NODE to PSQL
//  Step 1
const { Pool } = require('pg');

const pool = new Pool({
    user: 'labber',
    host: 'localhost',
    database: 'w05d03',
    password: 'labber',
    port: 5432
})

pool.connect().then(() => {
	console.log("We have connected to DB!")
}).catch(e => {
	console.log("Error!");
	console.log(e.message);
})
//



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
	console.log('req.body', req.body);	 	// 7
	console.log('req.query', req.query); 	// 2
	console.log('req.params', req.params);  // 1
	const templateVars = {};
	if (req.query.command) {
		pool.query(req.query.command).then((result) => {
			console.log(result);
			templateVars.result = result.rows;
			res.render('sandbox', templateVars)
		})
	} else {
		res.render('sandbox', templateVars);
	}
})

app.get('/employees/:id', (req, res) => {
	console.log('req.body', req.body);	 	// 7
	console.log('req.query', req.query); 	// 2
	console.log('req.params', req.params);  // 1
	// req.params.id = 4 OR 1 = 1;
	// id == 4 || 1 == 1 === TRUE
	// WRONG WAY--- WE DID NOT SANITIZE INPUT!!
	const query = `SELECT * FROM employees WHERE id = ${req.params.id}`;
	pool.query(query).then(result => {
		const templateVars = {employee: result.rows}
		res.render('employees_index', templateVars);
	}).catch( e => {
		console.log(e)
		const templateVars = {employee: [] };
		res.render('employees_index', templateVars);

	})
})

app.get('/departments', (req, res) => {
	const query = 'SELECT * FROM departments;'
	pool.query(query).then((result) => {
		const templateVars = {a: 'hello world', departments: result.rows}
		console.log(result.rows);
		res.render('departments_index', templateVars);
	})
})

app.get('/api/departments', (req, res) => {
	const query = 'SELECT * FROM departments;'
	pool.query(query).then((result) => {
		const templateVars = {a: 'hello world', departments: result.rows}
		console.log(result.rows);
		res.json(templateVars);
	})
})




app.listen(PORT, ()=> console.log("Server is listening on:", PORT));