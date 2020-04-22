const express = require('express');
const cors = require('cors');

const app = express();

const data = [
    {item: 'Buy Milk',          done: false},
    {item: 'Do Testing',        done: false},
    {item: 'Buy A Boat',        done: false},
    {item: 'Write some Memes',  done: false},
];


app.use(cors());

app.get('/', (req,res) => {
    setTimeout( () => {
        res.json(data);
    }, 2000)
})

app.listen(8080, () => console.log('Server is on 8080!'));