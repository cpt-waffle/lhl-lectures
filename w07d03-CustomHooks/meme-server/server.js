const express = require('express');
const app = express();
const cors = require('cors');

let num = 0;
app.use(cors());


const memeList = [
  {name: "Adrian's fresh meme", url: 'https://preview.redd.it/ff3hhsds9ks41.jpg?width=960&crop=smart&auto=webp&s=bf75658ce17a530f610fdc49b772254e6356f145'},
  {name: "WFH", url: "https://cdn.facilityexecutive.com/wp-content/uploads/2020/03/working-from-home-meme-14-300x300-1.jpg"},
  {name: "Trojan Horse", url: "https://i.redd.it/rnxiz3cg5ls41.jpg"},
  {name: "Stack overflow halp", url: "https://preview.redd.it/jd25yqv8xsf31.jpg?width=640&crop=smart&auto=webp&s=9f146e09eed275511b156916db118ec9bb70a2da"},
];


app.get('/memes', (req,res) => {
  num++;
  console.log("HIT! ", num);
    res.json(memeList);
})



app.listen(8080, () => console.log('server is listening 8080!'));