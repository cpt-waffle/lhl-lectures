const lib = require('./demo');


lib.getMarks().then( rows => {
	console.log(rows);
})