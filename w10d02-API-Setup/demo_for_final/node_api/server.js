const PORT = 3002; 

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const dogsController = require('./controllers/dogs_controller');


const app = express();

// middleware
app.use(morgan('dev'));
app.use(cors({
    origins: ['http://localhost:3001/']
}))


// routes.rb
app.use('/dogs', dogsController);

//


app.listen(PORT, console.log(`Server is listening on port ${PORT}`));