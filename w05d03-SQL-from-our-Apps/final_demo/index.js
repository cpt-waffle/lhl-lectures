const PORT = 8080;

//    STEPS TO CONNECT PG (psql) into express server

// require(pg) - use Pool

// new Pool({})

// connect() <---- optional

// pool.query()--->




const {Pool, Client} = require('pg');
const bodyParser	= require('body-parser');
const express			= require('express');
const morgan			= require('morgan');
const app = express();

// pool credentials <----
const pool = new Pool({
    user: 'labber',
    password: 'labber',
    host: 'localhost',
    database: 'w05d03',
    port: '5432'
});

// show me if connects....
pool.connect().then(() => {
    console.log('DATABASE STATUS: Connected :)');
}).catch(e => {
    console.log(e);
})



app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.set('view engine', 'ejs');


let people = 1;

app.get('/cats', (req, res) => {
	people++;
	const templateVars = {name: 'Vas', count: people};
	const command = 'SELECT * FROM addresses WHERE id = $1';
	const values = [ 3 ];
	pool.query(command, values).then(data => {
		console.log(data);
		templateVars.addresses = data.rows;
		res.render('cats', templateVars);
	})
})








app.get('/', (req, res) => {
	res.render('home');
})
// app.get('/sandbox/:id')

app.get('/sandbox', (req, res) => {
	console.log('req.params', req.params);
	console.log('req.body', req.body);
	console.log('req.query', req.query);
	const templateVars = {};
	if (!req.query.command) {
		return res.render('sandbox', templateVars);
	}

	pool.query(req.query.command).then(data => {
		templateVars.result = data.rows;
		res.render('sandbox', templateVars);
	}).catch(err => {
		templateVars.error = err.message;
		res.render('sandbox', templateVars);
	})
})

app.get('/employees/:id', (req, res) => {
	const templateVars = {};
	console.log('req.params', req.params);
	console.log('req.body', req.body);
	console.log('req.query', req.query);
	// SELECT * FROM employees where employees.id = 3;
	// const values = [];
	// values.push(req.params.id);


	pool.query('SELECT * FROM employees where employees.id = $1', [req.params.id]).then(data => {
		templateVars.employee = data.rows;
		res.render('employees_index', templateVars);
	}).catch(e => {
		console.log(e.message);
		res.send("Invalid parameters");
	})

})

app.get('/departments', (req, res) => {
	const templateVars = {};
	const command = "SELECT * FROM departments WHERE id = $1;";
	const values = [ 2 ];
	pool.query(command, values).then(data => {
		templateVars.rows = data.rows;
		res.render('departments_index', templateVars);
	})

})

app.get('/api/departments', (req, res) => {
	const command = "SELECT * FROM departments;";

	pool.query(command).then(data => {
		res.json(data.rows);
	})
})

app.listen(PORT, () => console.log("Server is listening on:", PORT));