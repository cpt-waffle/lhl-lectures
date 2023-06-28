const bodyParser	= require('body-parser');
const express			= require('express');
const morgan			= require('morgan');
const {Pool}      = require('pg');
const app = express();
const PORT = 8080;

const pool = new Pool({
  user: 'labber',
  host: 'localhost',
  password: 'labber',
  database: 'w05d03',
  port: 5432
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
	// req.params <--- parameters in the url --> sandbox/:id/:banana
	// req.body   <--- are the values that the user entered PARSED BY A POST REQUEST
	const templateVars = {};
	console.log('params', req.params);
	console.log('body', req.body);
	console.log('query', req.query);
	pool.query(req.query.command).then(data => {
		templateVars.result = data.rows;
		return res.render('sandbox', templateVars);
	}).catch(e => {
		templateVars.error = e.message;
		return res.render('sandbox', templateVars);
	})
})

app.get('/employees', (req, res) => {
	// return res.send("employee page goes here");
	pool.query('SELECT * FROM employees').then(data => {
		console.log(data.rows);
		const templateVars = {};
		templateVars.employees = data.rows;
		return res.render('employees', templateVars);
	})
})


app.get('/employees/:id', (req, res) => {
	const templateVars = {};
	console.log('params', req.params);
	//  SELECT * FROM employees WHERE id = 1 OR 1 = 1;
	//                                 false OR TRUE => true
	pool.query(`SELECT * FROM employees WHERE id = $1`, [req.params.id]).then(data => {
		templateVars.employees = data.rows;
		return res.render('employees_index', templateVars);
	}).catch(e => {
		console.log(e.message);
		return res.send('something went wrong :(');
	})
})


const getDepartments = () => {
	return pool.query('SELECT * FROM departments').then(data => {
		return data.rows;
	}).catch(e => {
		console.log("ERROR", e.message);
		return;
	})
}




app.get('/departments', (req, res) => {  // app.get Is HTTP
	const templateVars = {};
	getDepartments().then(departments => {
		console.log('departments', departments);
		templateVars.result = departments;
		// return res.send("make this together");
		return res.render('departments_index', templateVars);
	})
})

app.get('/api/departments', (req, res) => {

	getDepartments().then(departments => {
		return res.json(departments)
	})

})

app.listen(PORT, () => console.log("Server is listening on:", PORT));