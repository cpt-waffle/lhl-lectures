// const greetings = function() { ... }


const greetings = (name, cb) => {
    console.log(cb);
    console.log("Hello ", name);
    cb(55);
}
const name = 'Vas';
// greetings('Vas', (a) => {
//     console.log('How are you all doing?');
//     console.log("LINE 12: ", a);
// });

let arr = [1,2,3,4,5];

arr.forEach( (aa, bb, cc) => {
    console.log(aa, bb, cc)
})