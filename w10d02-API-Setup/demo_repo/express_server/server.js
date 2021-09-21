// require all the things we need and npm install them!
// express, morgan
// we will make a route with information/data to be recieved by the client

// STEPS IN MAKING A PROJECT
//  1 - create the project folder 
//  2 - cd into folder, git init
//  3 - create backend folder
//  4 - cd into backend folder, npm init
//  5 - install packages, build server... etc


const express = require('express');
const morgan  = require('morgan');
const cors    = require('cors');
const PORT    = 3002;


const app = express();


app.use(morgan('dev'));

app.use(cors({
    origin: 'http://localhost:3001',
}))

const data = [
    {id: 1, name: 'Waffle', url: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-10/19/16/asset/buzzfeed-prod-web-02/sub-buzz-21568-1539979871-1.jpg'},
    {id: 2, name: 'Doug', url: 'https://pbs.twimg.com/profile_images/932073327400644609/Sez347VL.jpg'},
    {id: 3, name: 'Luna', url: 'https://i.pinimg.com/originals/d5/fa/0b/d5fa0b05e00505717d21c532b043f586.jpg'},
    {id: 4, name: 'MoonMoon', url: 'https://images-cdn.9gag.com/images/thumbnail-facebook/9155182_1388247030.7007_yqylen_n.jpg'},
  ]
  


app.get('/', (req, res) => {
    // every route, will send out JSON...
    res.json({greetings: 'hello world!'});
})

app.get('/dogs', (req, res) => {
    res.json(data);
})



app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));