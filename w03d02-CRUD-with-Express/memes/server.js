const PORT = 8080;

// Step 1: require express
const express = require('express');
const bodyParser = require('body-parser');
// step 2: initialize app
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

const memes = {
  daf4f: 'https://ichef.bbci.co.uk/images/ic/704xn/p072ms6r.jpg',
  hvhjf: 'https://i0.wp.com/canfasdblog.com/wp-content/uploads/2020/04/covid4-1.jpg?fit=691%2C361&ssl=1',
  gvdt5: 'https://s18670.pcdn.co/wp-content/uploads/Memes-About-School-Reopening.png'
}

const fakeKeyGenerator = () => {
    const str = Math.random().toString(36).substring(5);
    return str;
}


// route = instruction
app.get('/', (req, res) => {
  console.log("Home page hit!!");
  // we need to send back some information for the client (RESPONSE)
  res.render('home', templateVars);
})
// GET - ?
// POST - ?

// something to do with information
// CRUD
// CREATE --- READ --- UPDATE --- DELETING

// we should make a convention on how to properly name our 
// routes.... because it can get out of hand reaaaaaal quick




// we want to see a list of memes
// /memes GET ---> Get some memes
app.get('/memes', (req, res) => {
  console.log("Memes page hit!!");
  // RENDER TAKES in actually... 2 PARAMETES
  // first one is your viewName (lives in the views folder....)
  // 2nd parameter is an object that gets passed into the home.ejs file
  const templateVars = {
      memes: memes,
      title: 'hello world',
      car: "Toyota Corolla",
      music: "eurobeat",
      arr: [1,2,3,4],
      obj: {foo:'bar'}
    };

  res.render('memes_index', templateVars);
})

// GET /memes/new
// Give the user a page to enter information ( GET )
app.get('/memes/new', (req, res) => {
    console.log("MEMES NEW HIT!!!");
    res.render('memes_new');
})

// GET /memes/:id  <----- SPECIFIC MEME
// whenever client asks for something.. and gives you parameters or data to work with
// its always going to be in the REQUEST object
app.get('/memes/:id', (req, res) => {
    console.log(req.params.id);
    const specific_meme = memes[req.params.id];
    console.log(specific_meme);
    const templateVars = {meme: specific_meme};
    res.render('memes_show', templateVars);
})

//  POST requests are methods that CHANGE information on the server
app.post('/memes/:id/delete', (req, res) => {
    console.log("DELETE ROUTE HAS BEEN HIT");
    console.log(req.params.id);
    delete memes[req.params.id];
    res.redirect('/memes');
})

// SAVE a meme :D 
// User saves information to the server that they inputted ( POST )
app.post('/memes', (req, res) => {
    // save it into the DB
    console.log("SAVE MEMES hit!");
    console.log(req.body);
    const key = fakeKeyGenerator();
    memes[key] = req.body.memeURL;
    // redirect to /memes GET
    res.redirect('/memes');
})

// req.params = in the URL of the request /memes/:id <---
// req.body   = watever the client wrote in the body in the form 




// Step 3: Listen to server...
app.listen(PORT, () => console.log(`server is on PORT: ${PORT}`));