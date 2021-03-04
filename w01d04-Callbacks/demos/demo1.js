// what are functions?
// what is a function?

//                         whats name?
// you can pass functions INTO functions :O
// greetings is a "HIGH ORDER FUNCTION" <--- a function that takes another function 
// as a paramater
// callback - a function that IS A paramater of another function
// callback ---------------------------|
const greetings = function(name, anotherParamter) {
                           // ^--------------- parameter
    console.log(anotherParamter);
    anotherParamter();
    console.log('Hello ', name, "!!!");
}

const goodbye = function() { // a variable that is assigned to a function
    console.log("GoodBye~~~!");
    return 'hi';
}

const arr = [1,2,3,4,5]; // variable
const anotherName = 'Vas'; // variable

greetings(anotherName, goodbye);

greetings("Sam", function() {
    console.log("Line 25: Dont know if this is going to work!");
})