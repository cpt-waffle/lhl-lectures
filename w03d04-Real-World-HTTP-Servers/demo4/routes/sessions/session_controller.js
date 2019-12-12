const express = require('express');
const router = express.Router();

module.exports = () => {
  router.post('/', (req, res) => {
    console.log(req.body);
    console.log('login POST');
    res.cookie('user_id', 45);
    res.send('OK');
  })

  return router;
}