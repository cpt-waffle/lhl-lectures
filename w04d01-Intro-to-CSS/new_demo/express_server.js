const PORT = 3000;

const express = require('express');
const morgan = require('morgan');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public')); /// <---------------
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.render('home');
})


app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));