const bodyParser	= require('body-parser');
const express			= require('express');
const morgan			= require('morgan');
const {Pool}      = require("pg");

const app = express();
const PORT = 8080;

// pg connection setup!

// 1st step -- establish a connection!
const pool = new Pool({
	user: 'labber',
	password: 'labber',
	host: 'localhost',
	database: 'w05d03',
	port: 5432
})

// 2st step -- use pool.query inside of your routes!


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
	console.log("req.body 		==>		", req.body);
	console.log("req.params		==>		", req.params);
	console.log("req.query		==>		", req.query);
	const templateVars = {};

	if (req.query.command) {
		if (req.query.command.toLowerCase().includes('drop')) {
			return res.send("no!"); 
		}

		pool.query(req.query.command).then((data) => {
			templateVars.result = data.rows;
			return res.render('sandbox', templateVars);
		}).catch(e => {
			templateVars.error = e.message;
			return res.render('sandbox', templateVars);
		})
	} else {
		return res.render('sandbox', templateVars);
	}

})

app.get('/employees/:id', (req, res) => {
	const templateVars = {};
	const id = req.params.id;                      // 5 OR 1 = 1;
	pool.query("SELECT * FROM employees WHERE id = $1", [id]).then(data => {
		templateVars.employees = data.rows;
		return res.render('employees_index', templateVars);
	}).catch(e => {
		return res.send("something went wrong :(");
	})
})


app.get('/departments', (req, res) => {  // app.get Is HTTP
	const templateVars = {};
	pool.query("SELECT * FROM departments").then(data => {
		templateVars.result = data.rows;
		res.render('departments_index', templateVars); // RESPONSE
	})
})

app.get('/api/departments', (req, res) => {
	pool.query("SELECT * FROM departments").then(data => {
		res.json(data.rows)
	})
})

app.listen(PORT, () => console.log("Server is listening on:", PORT));