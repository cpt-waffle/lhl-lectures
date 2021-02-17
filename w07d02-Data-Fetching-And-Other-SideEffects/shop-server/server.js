const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
let number = 0;


const products = [
    {id:1, name: 'Nick Cage Pillow', price: 199.99, img: 'https://i2.wp.com/bestlifeonline.com/wp-content/uploads/2018/08/nicolas-cage-pillow.jpg?fit=1024%2C1024&ssl=1'},
    {id:2, name: 'Ostritch Pillow', price: 140.00, img: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1565378175-51sjlBP93WL.jpg'},
    {id:3, name: 'Star Wars Chop Sticks', price: 25.00, img: 'https://img.buzzfeed.com/buzzfeed-static/static/2020-02/12/19/asset/6b5a6cc95c8a/sub-buzz-1622-1581534834-7.jpg?downsize=700%3A%2A&output-quality=auto&output-format=auto&output-quality=auto&output-format=auto&downsize=360:*' },
    {id:4, name: 'Whatever This is ', price: 13.31, img: 'https://img.buzzfeed.com/buzzfeed-static/static/2019-03/25/16/asset/buzzfeed-prod-web-02/sub-buzz-17121-1553546180-1.jpg'},
]

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());

const cart = [1,2]; 

app.get('/products', (req, res) => {
    console.log(number);
    number++;
    res.json(products);
})


app.get('/cart', (req, res) => {
    res.json(cart);
})

app.post('/cart/add', (req,res) => {
    cart.push(req.body.product_id)
    res.send(200)
})


app.listen(8080, () => console.log('server is listening 8080!'));