let foo = 'bar';
const PI = 3.14;

const greetings = (name) => {
    console.log(`Hello ${name}`);
    console.log("Hello " + name);
    return 4 * 4;
}

greetings('Vas');
console.log(greetings(1334));
// greetings(1334, 'vas', false, 54, 5 ,6);

// 

const array = [];
array.push(1);
array.push(2);
array.push(3);

// console.log(array[0]);
// console.log(array[array.length-1]);

// console.log(array);
let val = 5;

if (val > 5) {
    // console.log("GREATER THAN");
} else if (val === 5) {
    // console.log('EQUAL');
} else {
    // console.log("LESS THAN");
}

if (true) {
    // ...
}

// if (val == 5) console.log("its 5!!");
// if (val != 4) console.log("its not 4!");

const obj = {A: 1, B:2, C: 3};
console.log(obj);
console.log(obj.A);
console.log(obj['A']);

array.forEach((val, index, array) => {
    console.log(val, index, array);
})