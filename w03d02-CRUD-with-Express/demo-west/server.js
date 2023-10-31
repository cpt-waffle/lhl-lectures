const PORT = 8080;

// Step 1: import/require express
const express = require('express');

const keyGenerator = () => {
  const result = Math.random().toString(36).substring(5);
  return result;
}

console.log(keyGenerator());

// Step 2: intialize the express application with the configuration(default)

const app = express();

const mice = {
  lsij523: 'https://assets3.razerzone.com/6v1RVaYM7gImsVUwGP7AXb6YOcw=/1500x1000/https%3A%2F%2Fhybrismediaprod.blob.core.windows.net%2Fsys-master-phoenix-images-container%2Fh78%2Fh6a%2F9081447088158%2Frazer-viper-ultimate-gallery-hero.jpg',
  fdhsjk2: 'https://upload.wikimedia.org/wikipedia/commons/2/22/3-Tasten-Maus_Microsoft.jpg',
  jfs22z2: 'https://i.rtings.com/assets/products/1htouLNw/amazonbasics-3-button-usb-wired-mouse/design-medium.jpg',
  Xasr5ds: 'https://i.pcmag.com/imagery/roundups/05AtKdalJhFuiAcoSneBlHI-9.fit_lim.size_1050x.jpg',
}


// config 
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended: false}));

///


// Step 4: make routes
app.get('/', (req, res) => {
  return res.render('home');
})


app.get('/thisismyfavoritecatmemeofalltime', (req, res) => {
  return res.render('cat_meme');
})

// CRUD

// CREATE
// READ
// UPDATE
// DELETE

// restful convention is a a naming convention strictly for your routes

// GET vs POST
// /resources_name  <---plural
app.get('/mice', (req, res) => {
  //                                            mice: mice
  const templateVars = {a: 'apple', b: 'banana', mice};
  // .render takes in 2 parameters
  // 1: name of the view
  // 2: object with key/values that are shared/sent to your view to use
  return res.render('mice_index', templateVars);
})



// GET /resources_name/new
app.get('/mice/new', (req, res) => {
  return res.render('mice_new');
})

// GET 
// /resources_name/:id
app.get('/mice/:mouse_id', (req, res) => {

  console.log(req.params);             // lsij523 ==> 
  const templateVars = {mouse_img: mice[req.params.mouse_id]};
  return res.render('mice_show', templateVars);
})

// give you a form to create a new resource/mouse


// POST 

// GET  /mice
// POST /resources_name 
// req.params  <--- when you have something in the URL route
// req.body    <--- when a form is sent out and you want thouse values
app.post('/mice', (req, res) => {
  // get what the user has typed into the box []
  console.log(req.body);
  // save it with a new key/id to to our object []
  mice[keyGenerator()] = req.body.mouse_url;
  // render or redirect <--
  return res.redirect('/mice');
})



// Step 3: make sure server is listening and ON!;

app.listen(PORT, () => console.log(`Server is on and listening on port ${PORT}`));
