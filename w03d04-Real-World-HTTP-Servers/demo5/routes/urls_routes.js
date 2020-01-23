const express = require('express');
const router = express.Router();

module.exports = () => {

  router.get('/', (req, res) => {
    res.cookie('chocolate', 'chip');
    res.send(`<p> URLS INDEX</p>`);
  })

  router.get('/new', (req, res) => {
    res.send(`<p>URLS NEW</p>`);
  })

  router.get('/:id', (req, res) => {
    res.send(`<p>URLS SHOW</p>`);
  })

  return router;
}


