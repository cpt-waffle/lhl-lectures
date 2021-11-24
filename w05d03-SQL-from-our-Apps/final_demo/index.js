const PORT = 8080;
// STEPS ON HOW TO CONNECT POSTGRES DB 
// INTO YOUR NODEJS EXPRESSJS APPLICATION

// 1 -- make pool, give parameters to pool
// 2 (optional) -- pool.connect()
// 3 -- make queries and send em to the views as array


const bodyParser	= require('body-parser');
const express			= require('express');
const morgan			= require('morgan');
const { Pool } = require('pg');
const app = express();

const pool = new Pool({
    user: 'labber',
    password: 'labber',
    port: '5432',
    host: 'localhost',
    database: 'w05d03'
});

pool.connect().then(() => {
    console.log("We have connected to our database :)");
}).catch(e => {
    console.log('----------- Error -----------');
    console.log(e.message);
});



app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('home');
})
// app.get('/sandbox/:id')

app.get('/sandbox', (req, res) => {
	const templateVars = {};
	if (!req.query.command) {
		return res.render('sandbox', templateVars);
	}
	console.log('req.query ===>', req.query);
	pool.query(req.query.command).then(data => {
		templateVars.result = data.rows;
		res.render('sandbox', templateVars);
	}).catch(e => {
		templateVars.error = e.message;
		res.render('sandbox', templateVars);
	})
})

app.get('/employees/:id', (req, res) => {
	const templateVars = {};
	console.log(req.params);
	// the Right way of doing it!!!
	const command = `
	SELECT first_name, last_name, street_name
	FROM employees
	JOIN addresses ON employees.id = addresses.employee_id
	WHERE employees.id = $1;`
	pool.query(command, [req.params.id]).then( data => {
		templateVars.employee = data.rows;
		res.render('employees_index', templateVars);
	}).catch( e => {
		console.log("ERROR");
		console.log(e);
		res.send(`Error: ${e.message}`);
	})
})

app.get('/departments', (req, res) => {
	const templateVars = {};
	const command = "SELECT * FROM departments;";
	pool.query(command).then(data => {
		console.log(data);
		templateVars.result = data.rows;
		templateVars.fields = data.fields;
		res.render('departments_index', templateVars);
	}).catch(e => {
		res.send(`Error: ${e.message}`);
	})
})

app.get('/api/departments', (req, res) => {
	const command = "SELECT * FROM departments;";
	pool.query(command).then(data => {
		res.json(data.rows);
	}).catch(e => {
		res.send(`Error: ${e.message}`);
	})
})

app.listen(PORT, ()=> console.log("Server is listening on:", PORT));