const express = require('express');
const app = express();
const cors = require('cors');

let num = 0;
// ??
app.use(cors());


const memeList = [
  {id:1, name: "Adrian's fresh meme", url: 'https://preview.redd.it/ff3hhsds9ks41.jpg?width=960&crop=smart&auto=webp&s=bf75658ce17a530f610fdc49b772254e6356f145'},
  {id:2, name: "WFH", url: "https://cdn.facilityexecutive.com/wp-content/uploads/2020/03/working-from-home-meme-14-300x300-1.jpg"},
  {id:3, name: "Trojan Horse", url: "https://i.redd.it/rnxiz3cg5ls41.jpg"},
  {id:4, name: "Stack overflow halp", url: "https://preview.redd.it/jd25yqv8xsf31.jpg?width=640&crop=smart&auto=webp&s=9f146e09eed275511b156916db118ec9bb70a2da"},
  {id:5, name: "meirl", url: "https://i.redd.it/lz77ubqd9vu81.jpg"}
];


app.get('/memes', (req,res) => {
  num++;
  console.log("HIT! ", num);
    res.json(memeList);
})

app.get('/favorite', (req,res) => {
  res.json({name: 'me today', url: 'https://i.pinimg.com/originals/1a/4c/bb/1a4cbbb5d5f996ebc93a18a8c4c9f8f3.jpg'})
})



app.listen(8080, () => console.log('server is listening 8080!'));