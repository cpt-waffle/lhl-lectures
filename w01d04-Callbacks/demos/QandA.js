const object = {
    one:   {name: 'Milk', qty: 2, price: 4},
    two:   {name: 'Chips', qty: 1, price: 2},
    three: {name: 'Eggs', qty: 1, price: 3.45}
  }
  
  let sum = 0;
  
//   Method 1
  for (let key in object) {
      console.log(object[key].name, object[key].price * object[key].qty);
      sum += object[key].price * object[key].qty;
  }
  
  console.log("Total:  ", sum);
  
  // Method 2
  const keysArr = Object.keys(object);
  
  console.log(keysArr);
  
  for (let key of keysArr) {
      console.log(object[key].name, object[key].price * object[key].qty);
      sum += object[key].price * object[key].qty;
  }
  

 // method 3

const values = Object.values(object);
console.log(values);
for (let item of values) {
    console.log(item.name)
}


//////////////
// code golfing 
Object.values(object).forEach(item => console.log(item.name, item.qty * item.price));
  