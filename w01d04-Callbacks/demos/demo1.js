// what is a function ?
// -  reusable block of code
// -  call it anytime you need to redo something


// function declaration
const greetings = function(name) {

    const result = 'Hello World ' + name ;
    console.log(result);

    return result;
}

// 
const oatmeal = "Vasiliy";
// const result = greetings(oatmeal);
// console.log(result);

// what if i create a value right inside of the function call


// greetings('Kelly!', 'ffff');


const myFunction = function(a) {
    console.log("MY FUNCTION LINE 32");
    console.log(a);
    a();
}
// a callback is a function that gets passed into 
// another function AS A PARAMETER
const num = 1;
myFunction(function() {
    console.log('ANOTHER FUNCTION LINE 35:')
});