const express = require('express');


const app = express();

let i = 6;

const memeList = [
  {id:1, title: "Adrian's fresh meme", img: 'https://preview.redd.it/ff3hhsds9ks41.jpg?width=960&crop=smart&auto=webp&s=bf75658ce17a530f610fdc49b772254e6356f145'},
  {id:2, title: "WFH", img: "https://cdn.facilityexecutive.com/wp-content/uploads/2020/03/working-from-home-meme-14-300x300-1.jpg"},
  {id:3, title: "Trojan Horse", img: "https://i.redd.it/rnxiz3cg5ls41.jpg"},
  {id:4, title: "Stack overflow halp", img: "https://preview.redd.it/jd25yqv8xsf31.jpg?width=640&crop=smart&auto=webp&s=9f146e09eed275511b156916db118ec9bb70a2da"},
  {id:5, title: "meirl", img: "https://i.redd.it/lz77ubqd9vu81.jpg"}
];


app.get('/memes', (req,res) => {
  setTimeout(() => {
    // db.query(***).then( )
    res.json(memeList)
  }, 1000);
  console.log(i++);
})

// app.post('/memes', (req,res) => {
  // db.query(***).then( )
// })



app.listen(8080, () => console.log("Server is on"));