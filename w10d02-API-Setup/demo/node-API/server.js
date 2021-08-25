const PORT = 3002;
const express = require('express');
const morgan  = require('morgan');
const cors    = require('cors');

const app = express();
app.use(morgan("dev"));
app.use(cors({origin: ['http://localhost:3000', 'http://3b20-135-23-223-133.ngrok.io']}))

const dogsRoutes = require('./routes/dogsRoutes');

// Routes -- routes.rb
//  /api/dogs
app.use('/dogs', dogsRoutes());


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));