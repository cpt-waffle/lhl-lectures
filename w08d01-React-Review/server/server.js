const PORT = 8080;

const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(express.json());

app.use(morgan('dev'));

const data =  [
  {id: 1, title: 'clean up apartment'},
  {id: 2, title: 'review es6'},
  {id: 3, title: 'reinstall packages for react'},
  {id: 4, title: 'go for a run'},
]

let i = 5;

app.get('/tasks', (req, res) => {
  return res.json(data);
})

app.post('/tasks', (req, res) => {
  console.log(req.body);
  const task = {...req.body, id: i};
  data.push(task);
  i++;
  res.json(task);
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));