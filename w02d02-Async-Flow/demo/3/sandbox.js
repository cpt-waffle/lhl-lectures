// // functions

// //  func     param1   param2  paramN
// const add = (numberA, numberB, thirdParam) => {
//     console.log(thirdParam);
//     // 
//     thirdParam(numberA + numberB);
//     return numberA + numberB;
// }



// console.log('2 + 2 = ', add(2, 2, (result) => {
//     console.log("The answer to the question is: ", result);
// }));



//async controlflow

// let obj = {}

// setTimeout(() => {
//     obj.user = {firstName: "Vas", lastName: "Klim"};
// }, 3000)
// console.log('obj is ', obj);
// console.log('obj is ', obj.user.firstName);


const higherOrderFunc = function(callback) {
    const data = { initials: "YV" };
  
    console.log('BEFORE TIMEOUT CALL');
    setTimeout(() => {
      data.initials = "YAV";
      callback(42);
    });
  
    console.log('AFTER TIMEOUT CALL');
}
  
console.log('BEFORE MAIN CALL');
const result = higherOrderFunc((result) => {
    console.log('INSIDE CALLBACK');
    console.log(result)
})
console.log('AFTER MAIN CALL');

// BEFORE MAIN CALL
// BEFORE TIMEOUT CALL
// AFTER TIMEOUT CALL
// AFTER MAIN CALL
// INSIDE CALLBACK



















