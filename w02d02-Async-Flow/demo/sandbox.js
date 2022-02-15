// review
const PI = 3.14;
// functions
const greetings = function() {
    console.log("hello world!");
}

const greetings2 = (name) => { // parameters
    console.log("hello ", name);
    return 1;
}

const array = [1,2,3,4]

const arrayLooper = (array, cb) => {
    for (let element of array) {
        cb(element);
    }
}

arrayLooper(array, (num) => { 
    console.log("The current element is ", num);
})

// CALLBACKS!!!!!
// a function that you pass into the another function

//  flexibility 



console.log(PI);
const a = greetings2('Alex');
console.log(a);