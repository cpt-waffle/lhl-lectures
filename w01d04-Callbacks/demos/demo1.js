// variables
let fruit =  'apple';
const PI  = 3.14;

fruit = 'banana';

// function?
// what is the purpose of function
// block of code to be reusable and to clean code
// pass in parameters
// const greetings = function(user) {
//     console.log('line 12: ',user);
//     console.log("Hello");
//     return 12;
// }
// strings can be passed into functions
// greetings('Everyone');
const name = 'Vasiliy';
// greetings(name);
// can numbers be passed into functions YES
// can objects be passed into functions YES
// can arrays  be passed into functions YES
// is there a paramters limits NO!
// greetings(name);
                                     // CALLBACK
const multiGreetings = function(user, arg2) {
    console.log(arg2);
    const val = arg2('INSIDE MULTIGREETINGS CALLING ARG2()');
    console.log("Hello ", val);
}
multiGreetings('Everyone', function(user) {
    console.log('line 32: ',user);
    console.log("Hello");
    return 12;
})