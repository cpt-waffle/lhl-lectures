const express = require('express');

const app = express();
const port = 8000;


app.set('view engine', 'ejs');

// console.log(app);
const items = [{item_name: 'shoes', price: 99.99}, {item_name: 'socks', price: 20.00}];



app.get("/", (request, response) => {
  // console.log("Someone has come to our home page!!!!");
  // console.log(request.headers);
  // console.log(response);
  response.send('<h1>Welcome to My page!!!</h1>');
})

app.get('/cats', (request, response) => {
  console.log(`we have hit the "Cats" route!!`);
  response.send({cat: {description: "this is a very basic cat!!!"}});
})


app.get('/number', (request, response) => {
  console.log("we hit the number route");
  response.render('number');
})

app.get('/number/:id', (request, response) => {
  // console.log("Number route with params");
  console.log('request params  ', request.params);
  console.log('request query   ', request.query); // ?? google that when you have time
  console.log('request body    ', request.body); // Form
  let templateVars = {
    userNumber: request.params.id,
    array: ['apple', 'pair', 'banana']
  }
  response.render('specific_number', templateVars);
});

app.post('/apples', (request, response) => {
  console.log("POST request has been hit to apples");
  response.redirect('/');
})



app.listen(port, () => {
  console.log("Server is running on port ", port);
});












