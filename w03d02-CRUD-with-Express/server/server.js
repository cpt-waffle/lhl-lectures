// get express packge into this file
const express = require('express');


// initialize express

const app = express();

// 
app.use(express.urlencoded({extended: true}));

const mugs = {
  1: {id: 1, name: "Happy Cat Mug", imgUrl: "https://rock-reflections.com/cdn/shop/files/11ozMugThumb1_9eb3d5b8-0079-4686-b34c-302f2149a8a4.jpg"},
  2: {id: 2, name: "Angry Cat Mug", imgUrl: "https://m.media-amazon.com/images/I/61PCoh0xuUL._AC_UF1000,1000_QL80_.jpg"},
  3: {id: 3, name: "Sad Cat Mug", imgUrl: "https://i.ebayimg.com/images/g/aKkAAOSw6UVkPGjb/s-l1600.jpg"}
};

// generateShortURL = () => ...
let id = 4;

// server routes

// ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  console.log("home page visited!");
  console.log(req);
  // return res.send('<h1>hello world</h1>');
  return res.render('home');
})


// B - browse/retrieve all of the resources
// GET -- getting information
// POST -- saving/deleting/editing (PUT,PATCH,DELETE)
// make a route
// RESTFUL convention:GET  /resources
app.get('/catmugs', (req, res) => {
  // route needs a way to send all the resources to view
  console.log('cat mugs page !')
  //           name of the view,     object that is shared with that view
  ////////////////
  return res.render('mugs_all', {mugs});
})
// view will display all the resources

// Create -- give a user something to fill out
//        -- take that info and save it!
app.get('/catmugs/new', (req, res) => {

  return res.render('mugs_new');
})

// A -- Add the resource
// RESTFUL convention: POST /resources
app.post('/catmugs', (req, res) => {
  console.log("POST /catmugs");
  const mug = {id, name: req.body.name, imgUrl: req.body.img};
  console.log(req.body);
  mugs[id] = mug;
  id++;
  return res.redirect('/catmugs');
})

// E - edit
// GET /catmugs/id/edit  Display the page to what you want to edit (form)
// POST /catmugs/id


// D - Delete
// POST /catmugs/id/delete



// R - Read a single resource   (/urls/:shortURL)
// RESTFUL convention:GET  /resources/:identfier
app.get('/catmugs/:id', (req, res) => {
  const mug = mugs[req.params.id];
  return res.render('mugs_desc', {mug});
})



// listen command 

app.listen(8080, () => console.log("Server is listening on port 8080"));