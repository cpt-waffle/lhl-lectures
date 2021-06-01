// whats a function ?
// a block of code that runs some logic may return something 
// input ---> Transformation ---> Output 

// const printArray = function() {}

//callbacks --- a function that we pass to another function  !!
const printArray = (arr, cb) => {
    for (let i of arr) {
        cb(i);
    }
}
// forEach() , map(), filter(), reduce()

printArray([1,2,3,4,5,6], (elem) => {
    console.log("Elem is :", elem);
});

