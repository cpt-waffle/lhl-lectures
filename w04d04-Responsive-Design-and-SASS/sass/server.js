var express = require('express');
var sassMiddleware = require('node-sass-middleware');
var path = require('path');
var app = express();

var srcPath = __dirname;
var destPath = __dirname;

app.use(sassMiddleware({
  /* Options */
  src: srcPath,
  dest: destPath,
  debug: true,
  outputStyle: 'expanded'
}));
// Note: you must place sass-middleware *before* `express.static` or else it will
// not work.
app.use('/public', express.static(path.join(__dirname, 'public')));

const port = 8080;
app.get('/', function(req, res) { 
  res.json({
    message: ' GO TO ---> http://localhost:8080/public/index.html'
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))