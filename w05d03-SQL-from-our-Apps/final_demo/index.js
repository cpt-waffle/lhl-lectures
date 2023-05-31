const bodyParser	= require('body-parser');
const express			= require('express');
const morgan			= require('morgan');
// step 1, add pool and/or client
const {Pool, Client} = require('pg');
// step 2, add the credentials 
const pool = new Pool({
  user: 'labber',
  host: 'localhost',
  password: 'labber',
  database: 'w05d03',
  port: 5432,
})

const app = express();
const PORT = 8080;


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
	console.log("req.body", req.body);
	console.log("req.params", req.params);
	console.log("req.query", req.query);
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
})

app.get('/employees/:id', (req, res) => {
	const templateVars = {};
	//                                          = 4 OR 1 = 1 
	pool.query(`SELECT * FROM employees WHERE id = $1`, [req.params.id]).then(data => {
		templateVars.employees = data.rows;
		return res.render('employees_index', templateVars);
	}).catch( e => {
		res.send(e.message);
	})

})


app.get('/departments', (req, res) => {  // app.get Is HTTP
	const templateVars = {};
	pool.query("SELECT * FROM departments").then(data => {
		console.log(data.rows);
		templateVars.result = data.rows;
		return res.render('departments_index', templateVars); // RESPONSE
	})
})

app.get('/api/departments', (req, res) => {
	const templateVars = {};
	pool.query("SELECT * FROM departments").then(data => {
		console.log(data.rows);
		templateVars.result = data.rows;
		return res.json(templateVars) // RESPONSE
	})
})

app.listen(PORT, () => console.log("Server is listening on:", PORT));