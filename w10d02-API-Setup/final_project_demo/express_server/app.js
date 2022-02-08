// declarations
require('dotenv').config()
const express = require('express');
const morgan  = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const cors = require('cors');
const db = require('./db/index');

// env variables
const {PORT, ENVIROMENT, DEV_URL} = process.env;

// routes requires
const dogRoutes = require('./routes/dogs');

// middlewares
const app = express();
app.use(cors({ origin: [DEV_URL]}));
app.use(morgan(ENVIROMENT));
app.use(bodyParser.json());
app.use(cookieParser());

// routes
app.use('/dogs', dogRoutes(db));

app.get('/', (req,res) => {
    res.json({greetings: 'hello'});
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));

