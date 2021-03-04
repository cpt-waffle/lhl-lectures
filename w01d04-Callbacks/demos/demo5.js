const array = [1,'two', 3, 'four', 5.5, 'six', false, 20, 2, 4];

// forEach
// for i in array ===> what is i? ===> index
// for i of array ===> what is i? ===> value

const newArray = []
// function() {}
array.forEach( elem => console.log(elem));
// array.forEach((element, index, arr) => {
//     newArray.push(element * 2);
// })

// console.log(newArray);

// map

const arr2 = array.map((element) => {
    return element * 2;
})
console.log("the map");
console.log(arr2);


// filter


