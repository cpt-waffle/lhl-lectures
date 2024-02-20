
const express = require('express');

const app = express();

app.set('view engine', 'ejs');
// for forms
app.use(express.urlencoded({extended: false}));

// gives us a way to make a GET route
app.get('/', (req, res) => {
  console.log("someone is here!");
  // res.send('ok');
  // res.json({array: [1,2,3,4]});
  res.render('home');
})

// data/resources to display, or buy for user
const mugs = [
  {id: 1, title: 'angry mug', price: 4.99, imgUrl: 'https://i.etsystatic.com/11978410/r/il/eedaa8/1543033016/il_340x270.1543033016_cwro.jpg'},
  {id: 2, title: 'happy mug', price: 9.99 , imgUrl: 'https://dynamic.indigoimages.ca/v1/gifts/products/882709752585/1.jpg?width=810&maxHeight=810&quality=85'},
  {id: 3, title: 'sleepy mug', price: 5.99 , imgUrl: 'https://i.etsystatic.com/24101209/r/il/caae11/3377851482/il_570xN.3377851482_7p17.jpg'},
]

let id = 4;

// cat mugs
// a client that visits this page, should be able to see all my cat mugs

// B - browse all resources
//  GET /resources ---> get all resources to be displayed
app.get('/catmugs', (req, res) => {
  // res.render takes 2 parameters
  // ('filename', {object})
  res.render('cat-mugs', {mugs: mugs});
})

// give a form to fill out for a new resource
// GET /catmugs/new
app.get('/catmugs/new', (req, res) => {
  res.render('cat-mugs-new');
})

// GET /catmugs/:id
// GET /urls/:shortURL
app.get('/catmugs/:id', (req, res) => {
  console.log(req.params);
  const mug = mugs[req.params.id - 1];

  if (mug) {
    res.render('cat-mugs-details', {mug: mug});
  } else {
    res.send("error, unfortunatly this mug does not exist")
  }
})



// attempt to save the resource
// POST /catsmugs
app.post('/catmugs', (req, res) => {
  const newMug = {
    id: id,
    title: req.body.mug_name,
    price: req.body.price,
    imgUrl: req.body.pic 
  }
  mugs.push(newMug);
  res.redirect('/catmugs');
})


// turns on a server and lets it wait for connections
app.listen(8080, () => console.log("Server is on!"));

// HTTP

// --------------------- Request from the client ------------->
// <-------------------- Response from the server--------------