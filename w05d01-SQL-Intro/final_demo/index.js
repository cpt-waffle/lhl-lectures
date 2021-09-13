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
    database: 'w05d01',
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
	res.redirect('/sandbox');
})
// app.get('/sandbox/:id')
app.get('/sandbox', (req, res) => {
	const templateVars = {};
	const command = req.query.command;
	if (req.query.command) {
		pool.query(command).then(result => {
			templateVars.result = result.rows;
			templateVars.fields = result.fields;
			res.render('sandbox', templateVars);
		}).catch(e => {
			templateVars.error = e.message;
			res.render('sandbox', templateVars);
		})
	} else {
		res.render('sandbox', templateVars);
	}
})

app.listen(PORT, ()=> console.log("Server is listening on:", PORT));