const express = require('express');


const app = express();

const data =  [
  {id: 1, taskName: 'clean up apartment', completed: false},
  {id: 2, taskName: 'review es6', completed: false},
  {id: 3, taskName: 'reinstall packages for react', completed: false},
  {id: 4, taskName: 'go for a run', completed: false},
]


app.get('/tasks', (req,res) => {
  return res.json(data);
})





app.listen(8080, () => console.log("Server is listening on port 8080"));