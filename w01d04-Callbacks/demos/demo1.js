// Variables :)


const fruit = 'banana';
const PI = 3.14;
const ateLunch = false;

////////////
// we can call this variable AS a function
const greetings = function(person) { // callback
    console.log("line 11");
    console.log(person);
    console.log("line 13");
    person();
    // console.log(`Hello ${person}`);
}
const goodbye = function() {
    console.log(`GoodBye :)`)
}
// to run/execute the function we use the () notation
greetings(goodbye);

// 