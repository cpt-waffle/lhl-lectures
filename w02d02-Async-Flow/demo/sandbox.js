// functions --- a block of code that you can re-use as many time as you want
// without repeating your code

//declaring a function
const foo = (name, number) => {
    console.log('hello world!');
    console.log(name, number);
    return 2 + 2;
}


// to call a function i use the () notation
// const result = foo('Bar', 2021);
// console.log(result);

// callbacks

const highOrderFunction = (name, number, cb) => {
    console.log(name, number);
    cb();
}

// highOrderFunction('Bar', 2021, () => {
//     console.log("INSIDE OF CB line 24!");
// })

const array = [1,2,3,4,5];

/////// everything happened in order.....
array.forEach((elem, index) => {
    console.log(`elem ${elem} index ${index}`)
})
console.log('--------------------');
array.forEach((elem, index) => {
    console.log(`elem ${elem} index ${index}`)
})
