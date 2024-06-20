// .env
// .env.dev
// .env.local
const PORT = 8080;
const express = require('express');

const app = express();

app.use(express.json());

const notes = [
  {
    id: 1,
    title: 'cat names',
    note: 'These are the cat names i thought of:   Mr Meow, Garfield, and Gandalf'
  },
  {
    id: 2,
    title: 'things i should buy',
    note: 'a house, a car, a boat'
  },
  {
    id: 3,
    title: 'bad drinks',
    note: 'all pop'
  },
];

let id = 4;

app.get('/notes', (req, res) => {
  // pg.query('SELECT * FROM notes;').then(data => res.json(data.rows));
  return res.json(notes);
})

app.post('/notes', (req, res) => {
  console.log("POST /notes");
  console.log(req.body);
  // pg.query("INSERT INTO notes VALUES("")
  const note = {id:id,title: req.body.newNote.title, note: req.body.newNote.note};
  notes.push(note);
  id++;
  return res.json(note);

})


app.listen(PORT, () => console.log("Server is on and listening on port ", PORT));