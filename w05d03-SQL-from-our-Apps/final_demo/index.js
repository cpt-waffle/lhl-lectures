const bodyParser	= require('body-parser');
const express			= require('express');
const morgan			= require('morgan');
const {Pool} = require('pg');

const app = express();
const PORT = 8080;

// Credentials 
const pool = new Pool({
  user: 'labber',
  host: 'localhost',
  database: 'w05d03',
  port: 5432,
  password: 'labber'
})


app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.set('view engine', 'ejs');


app.get('/test', (req, res) => {
	res.send('ok');
})


app.get('/', (req, res) => {
	res.render('home');
})
// app.get('/sandbox/:id')

app.get('/sandbox', (req, res) => {
	const templateVars = {};
	console.log('req.body', req.body); // POST req with FORMS
	console.log('req.params', req.params); // /employees/:id <--- param
	console.log('req.query', req.query);  // GET FORM tacs on the command to the URL

if (!req.query.command) {
	return res.render('sandbox', templateVars);
}

	pool.query(req.query.command).then(data => {
		templateVars.result = data.rows;
		return res.render('sandbox', templateVars);
	}).catch(e => {
		templateVars.error = e.message;
		return res.render('sandbox', templateVars);
	})

	// return res.render('sandbox', templateVars);


})

app.get('/employees/:id', (req, res) => {
	const templateVars = {};
	// SQL INJECTION
	//                                true/false OR true = TRUE
	//                                     false OR true = TRUE
	// SELECT * FROM employees WHERE id = 1 OR 1 = 1;
	//

	// 

	///  req.params.id = 1 OR 1 = 1;
	//pool.query(`SELECT * FROM employees WHERE id = ${req.params.id}`)

	// pool.query('SELECT * FROM employees where id = $1 AND name = $2', [req.params.id, req.params.name])

	pool.query(`SELECT * FROM employees WHERE id = $1`, [req.params.id]).then(data => {
		templateVars.employees = data.rows;
		return res.render('employees_index', templateVars);
	}).catch(e => {
		return res.send("error has occured please try again :)");
	})

})


app.get('/departments', (req, res) => {  // app.get Is HTTP
	const templateVars = {};
	pool.query('SELECT * FROM departments;').then(data => {
		templateVars.departments = data.rows;
		return res.render('departments_index', templateVars); // RESPONSE
	})
})

app.get('/api/departments', (req, res) => {
	res.send('ok');
})

app.listen(PORT, () => console.log("Server is listening on:", PORT));