const PORT = 8080;
const express = require('express');
const uniqid = require('uniqid');
const cors = require('cors'); // 
const bodyParser = require('body-parser')

const app = express();
// alter the headers and whitelist the client

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// our fake Database!!!
let data = [
    {id: uniqid(), task: 'buy milk', done: false},
    {id: uniqid(), task: 'wash dishes', done: false},
    {id: uniqid(), task: 'clean up', done: true },
  ];


app.get('/todos', (req, res) => {
    setTimeout(() => {
        res.json(data);
    }, 1500)
})

app.post('/todos', (req, res) => {
    console.log(req.body);
    data = [...data, {...req.body, id: uniqid()}];
    res.json({...req.body, id: uniqid()});
})



app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
