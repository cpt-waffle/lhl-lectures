const PORT = 8080;

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();



const demotivationalPosters = [
  {id:1, caption: 'fresh meme from old student', title: "Adrian's fresh meme", img: 'https://preview.redd.it/ff3hhsds9ks41.jpg?width=960&crop=smart&auto=webp&s=bf75658ce17a530f610fdc49b772254e6356f145',},
  {id:2, caption: 'working from home be like', title: "WFH", img: "https://cdn.facilityexecutive.com/wp-content/uploads/2020/03/working-from-home-meme-14-300x300-1.jpg"},
  {id:3, caption: 'no idea', title: "Trojan Horse", img: "https://i.redd.it/rnxiz3cg5ls41.jpg"},
  {id:4, caption: 'does it ever help though?', title: "Stack overflow halp", img: "https://preview.redd.it/jd25yqv8xsf31.jpg?width=640&crop=smart&auto=webp&s=9f146e09eed275511b156916db118ec9bb70a2da"},
  {id:5, caption: 'this does not relate to me at all', title: "meirl", img: "https://i.redd.it/lz77ubqd9vu81.jpg"}
];

// app.use(cors());
app.use(morgan('dev'));

app.get('/test', (req, res) => {
  return res.json([1,2,3,4,5,6,7,8,9])
});

app.get('/posters', (req, res) => {
  // this could be grabbed from psql server 
  // pg.query("SELECT * FROM Posters;")
  setTimeout(() => {
    return res.json(demotivationalPosters);
  }, 3000)
})


app.listen(PORT, () => console.log('Server is listening on port:  ', PORT));