const PORT = 8080;
// STEPS ON HOW TO CONNECT POSTGRES DB 
// INTO YOUR NODEJS EXPRESSJS APPLICATION


const bodyParser	= require('body-parser');
const express			= require('express');
const morgan			= require('morgan');
// Step 1 = Require pg and pool
const {Pool} 			= require('pg');
// Step 2 = Connect to database using new Pool({....})
const pool = new Pool({
    user: 'labber',
    password: 'labber',
    host: 'localhost',
    database: 'w05d03',
    port: 5432
})

pool.connect().then(() => {
    console.log("We have connected :)");
}).catch(e => {
    console.log("------- Error ------");
    console.log(e);
})
// Step 3 -- Congradulations! If your credetials to db are 
// correct you are now able to run quaries

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.render('home');
})
// app.get('/sandbox/:id')
app.get('/sandbox', (req, res) => {
	// First I have to get what you wrote in the input box
	// to my backend route
	// Then I will execute that command
	// Then i will re-render it to your screen! <--
	const templateVars = {};
	console.log('req.body',req.body); 		// 5 
	console.log('req.params', req.params);  // 2
	console.log('req.query', req.query);    // 8
	const command = req.query.command; // the query string that you want to execute...
	if (req.query.command) {
		pool.query(command).then(result => {
			templateVars.result = result.rows;
			res.render('sandbox', templateVars);
		}).catch(e => {
			res.render('sandbox', templateVars);
		})
	} else {
		res.render('sandbox', templateVars);
	}
})

app.get('/employees/:id', (req, res) => {
	// in unicode, %20 stands for space
	// hello world ==> hello%20world
	const templateVars = {}
	const empId = req.params.id;
	console.log('employee id = ', empId);
	const command = `SELECT * FROM employees WHERE id = $1`;
	//
	const valuesArr = [empId];
	pool.query(command, valuesArr).then(result => {
		templateVars.employee = result.rows;
		res.render('employees_index', templateVars);
	}).catch(e => {
		console.log(e);
		templateVars.employee = [];
		res.render('employees_index', templateVars);
	})
	// req.params.id
	// SELECT * FROM employees WHERE id = ?
	// follow the render steps that we did before.
})

app.get('/departments', (req, res) => {
	const templateVars = {}
	const command = "SELECT * FROM departments;";
	pool.query(command).then(result => {
		console.log(result);
		templateVars.departments = result.rows;
		res.render('departments_index', templateVars);
	})
})

app.get('/api/departments', (req, res) => {
	res.send("OK :)");
})

app.listen(PORT, ()=> console.log("Server is listening on:", PORT));