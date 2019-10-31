const express = require('express');
const router = express.Router();


module.exports = () => {
// I put my routes here
  router.get('/', (req, res) => {
    res.cookie('user_id', 25);
    res.render('/urls');
  })

  return router;
}