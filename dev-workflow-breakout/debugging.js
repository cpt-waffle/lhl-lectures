// using these 2 arrays print out the item with corresponding price line by line 
const items = ["apple", "banana", "coconut"];
//                0        1          2
const prices = ["$0.54", "$0.40", "$2.00"];

const printItemsAndPrices = function(items, prices) {
  // for in loop loops through indexes
  // for of loop loops through values 
  // c style loop 

  for (let index in items) {

    console.log(items[index], prices[index]);
  }


}


printItemsAndPrices(items,prices)