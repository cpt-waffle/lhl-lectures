const PORT = 8080;
const express = require('express');

const app = express();

let i = 0;

const memeList = [
  {id:1, name: "Adrian's fresh meme", url: 'https://preview.redd.it/ff3hhsds9ks41.jpg?width=960&crop=smart&auto=webp&s=bf75658ce17a530f610fdc49b772254e6356f145'},
  {id:2, name: "WFH", url: "https://cdn.facilityexecutive.com/wp-content/uploads/2020/03/working-from-home-meme-14-300x300-1.jpg"},
  {id:3, name: "Trojan Horse", url: "https://i.redd.it/rnxiz3cg5ls41.jpg"},
  {id:4, name: "Stack overflow halp", url: "https://preview.redd.it/jd25yqv8xsf31.jpg?width=640&crop=smart&auto=webp&s=9f146e09eed275511b156916db118ec9bb70a2da"},
  {id:5, name: "meirl", url: "https://i.redd.it/lz77ubqd9vu81.jpg"}
];


app.get('/posters', (req,res) => {
  console.log("GET /posters", i);
  i++;
  res.json(memeList);
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));