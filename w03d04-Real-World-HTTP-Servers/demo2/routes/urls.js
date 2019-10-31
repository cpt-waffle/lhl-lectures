const express = require('express');
const router = express.Router();


const urlsDatabase = [
  {id: 1, long: 'www.google.ca', short: 'ASODHSA'},
  {id: 2, long: 'www.stackoverflow.com', short: 'A45VNt'},
  {id: 3, long: 'www.reddit.com', short: '0x5ffgy'}
];


module.exports = () => {
  router.get('/', (req, res) => {
    res.json(urlsDatabase);
  })


  router.get('/:shortURL', (req, res) => {
    res.send('SHORT URL is BBBBB');

  })

  router.post('/', (req,res) => {
    //POST LOGIC HERE
    // redirect
    if (!req.body.longURL) {
      // res.redirect('/urls/new', {user_id: 43, error: "CANNOT BE BLANK"})
    }
  })

  router.get('/new', (req, res) => {
    // res.render('urls_new',{});
  })

  return router;
}