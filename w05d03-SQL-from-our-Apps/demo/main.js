const { Query } = require('pg');
const dbHelpers = require('./demo');
const { getAllUsers, getUser } = dbHelpers();

getAllUsers().then(data => {
    console.log('coming from line 5 of main.js');
    console.log('data is:');
    console.log(data);
});

getUser(1).then(data => {
    console.log('data from line 12');
    console.log(data);
})