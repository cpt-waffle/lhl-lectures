// callbacks  1 - cleaning up code
//            2 - is to controll the asnyc work flow

const doSlowMath = (num1, num2, cb) => {
    console.log("doing the math....");
    setTimeout(() => {
        console.log("inside of timeout...");
        const result = num1 + num2;
        cb(result);
    }, 0);
    // server in Brazil
    // Canada 
    console.log("end of math function...");
}


console.log("---- start ---");
doSlowMath(2, 4, (num)=> {
    console.log('FINALLY MATH IS DONE!!!');
    console.log("Result: ", num);
});
console.log("---   end  ---");