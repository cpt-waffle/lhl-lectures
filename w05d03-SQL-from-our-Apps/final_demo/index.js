// step 1 
// install pg
// step 2
// setup pool with correct credentials
const {Pool}      = require('pg');
const bodyParser	= require('body-parser');
const express			= require('express');
const morgan			= require('morgan');

const app = express();
const PORT = 8080;

// pg connection setup!

const pool = new Pool({
	user: 'labber',
	password: 'labber',
	host: 'localhost',
	port: 5432,
	database: 'w05d03'
})




// step 3
// write your queries



app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.set('view engine', 'ejs');


app.get('/test', (req, res) => {
	pool.query('SELECT * FROM employees;').then(data => {
		console.log(data.rows);
		res.json({empyees: data.rows})
	})
})


app.get('/', (req, res) => {
	res.render('home');
})
// app.get('/sandbox/:id')

app.get('/sandbox', (req, res) => {
		const templateVars = {};
		console.log('req.params		=', req.params);
		console.log('req.body			=', req.body);
		console.log('req.query		=', req.query);
		const command = req.query.command;
		pool.query(command).then(data => {
			templateVars.result = data.rows;
			return res.render('sandbox', templateVars);
		}).catch(e => {
			templateVars.error = e.message;
			return res.render('sandbox', templateVars);

		})
})

app.get('/employees/:id', (req, res) => {
	const templateVars = {};
	const id = req.params.id;

	pool.query(`SELECT * FROM employees WHERE id = $1`, [id]).then(data => {
		templateVars.employee = data.rows;
		res.render('employees_index', templateVars);
	}).catch(e => {
		
		res.send(e.message);
	})
})


app.get('/departments', (req, res) => {  // app.get Is HTTP
	const templateVars = {};
	pool.query('SELECT * FROM departments;').then(data => {
		templateVars.result = data.rows;
		res.render('departments_index', templateVars); // RESPONSE
	})
})

app.get('/api/departments', (req, res) => {
	res.send('ok');
})

app.listen(PORT, () => console.log("Server is listening on:", PORT));