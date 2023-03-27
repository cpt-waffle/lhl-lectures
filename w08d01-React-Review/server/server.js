const PORT = 8080;
const express = require("express");
const morgan = require("morgan");
const bodyParser = require('body-parser');


const app = express();


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// our "database"
const data =  [
  {id: 1, title: 'clean up apartment'},
  {id: 2, title: 'review es6'},
  {id: 3, title: 'reinstall packages for react'},
  {id: 4, title: 'go for a run'},
]

let i = 5;

app.get('/todos', (req,res) => {
  return res.json(data);
})

app.post('/todos', (req,res) => {
  const item = {id: i, title: req.body.item};
  data.push(item);
  i++;
  return res.json(item);
})

app.listen(PORT, () => console.log("server is listening on port: ", PORT));