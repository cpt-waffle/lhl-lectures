const express = require('express');
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');


app.get('/', (req, res) => {
  res.render('index');
})

// THIS IS BODY PARSER IN THE NUT SHELL!!!!
app.use((req, res, next) => {
  const body = [];
  req.on('data', (chunk) => body.push(chunk)).on('end', () => {
    const parsedBody = Buffer.concat(body).toString();
    const obj = {};
    parsedBody.split('&').forEach( arr => {
      const pair = arr.split('=');
      obj[pair[0]] = pair[1];
    })
    req.body = obj;
    next();
  })
});

// THIS IS COOKIE PARSER IN THE NUT SHELL!!!!
app.use((req,res,next) => {
  const cookies = req.headers.cookie.split('; ');
  const obj = {};
  cookies.forEach(cookie => {
    const keyVal = cookie.split('=');
    obj[keyVal[0]] = keyVal[1];
  })
  req.cookies = obj;
  next();
})

app.post('/login', (req, res) => {
  res.cookie('user_id', 32);
  res.cookie('user_name', 'vas');
  res.send('ok');
})


app.listen(PORT, () => console.log("Server is listening on port " + PORT));