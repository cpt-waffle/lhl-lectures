import React, { useEffect, useState } from 'react';
import './App.css';
import Product from './components/Product'
import axios from 'axios'
import { cartHelper } from './helpers/cartHelper'

// $(document).on('ready', () => {
  //$('#submit').on('submit')

//})
// move the script after the html ..... 


const p = {
  id:1,
  name: 'Nick Cage Pillow',
  price: 199.99,
  img: 'https://i2.wp.com/bestlifeonline.com/wp-content/uploads/2018/08/nicolas-cage-pillow.jpg?fit=1024%2C1024&ssl=1'
}

// react is a front-end framework -- react replaces your views 
// it doesnt really have any acess to the server...
// useEffect
let notAStateVar = 1;

// We call a server-api 
// to get some data
// and then with that data we populate our app

// in jquery we used AJAX 
// in React we can use a built in library called FETCH
// but we are goign to use another package called
// AXIOS JS
// GET  /products
// GET  /cart
// POST /cart/add

// one way not the best way -- add localhost:8080 infront of this....
// NOT THE BEST WAY ^^^^




function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addItemToCart = (id) => {
    setCart([...cart, id]);
  }

  useEffect(() => {
    // One way of getting multiple data points
    axios.get('/products').then(response => {
      // console.log(response.data);
      setProducts(response.data);
    })
    axios.get('/cart').then(response => {
      // console.log(response.data);
      setCart(response.data);
    })

    // Promise.all
    // second and cleaner/better way of getting multiple data points
    // Promise.all([ axios.get('/products'), axios.get('/cart')]).then(responses => {
    //   setProducts(responses[0].data);
    //   setCart(responses[1].data)
    // })
  }, [])


  useEffect(() => {
    setTotal(cart.length);
  }, [cart])

  const productComponents = [];
  const enhancedCart = cartHelper(cart, products);

  for (let p of products) {
    // product(data --> p, onClick --> addItemToCart)
    productComponents.push(<Product data={p} onClick={addItemToCart}/>)
  }

  const enhancedCartRender = []
  for (let item of enhancedCart) {
    enhancedCartRender.push(<p><h1>{item.name}    ---   {item.price}</h1></p>)
  }
  console.log(enhancedCart);
  return (
    <div className="App">
      <h1>Hello World</h1>
      <div className="product--list">
        {productComponents}
      </div>
      <div>
        <h1>This is my Cart {total}</h1>
        {enhancedCartRender}
      </div>
    </div>
  );
}

export default App;
