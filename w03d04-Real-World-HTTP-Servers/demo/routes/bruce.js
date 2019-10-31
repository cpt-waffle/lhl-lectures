const express = require('express');
const router = express.Router();


module.exports = () => {
  router.get('/', (req, res) => {
    console.log("HELLO")
    res.send('This is Bruce Wayne!!');
  });


  return router;
}