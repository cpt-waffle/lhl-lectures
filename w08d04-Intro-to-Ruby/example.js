// JS


let fruit = 'apple';
const PI = 3.14;

console.log('Fruit ', fruit);
console.log("PI " + PI);
console.log(`PI = ${PI}  FRUT = ${fruit}`);

const method = (param1, param2, param3, param4, param5) => {
    console.log("calculating...");
    return param1 + param2;
}

console.log(method(2, 2));

const val = 10;

if (val <= 9) {
    console.log('the val is less than or equal to 9');
} else if (val === 10) {
    console.log("val is 10!")
} else {
    console.log("its greater than 10");
}

if (true) console.log("this was was true!");

if (!true === false) console.log("this is not true!");

// for, while, forEach, map, reduce

const arr = [1,2,3,4,5];
console.log(arr[2]);
const loop = (array) => {
    array.forEach((elem, index) => {
        console.log(`Elem: ${elem}   at index = ${index}`);
    })
    return array;
}

const v = loop(arr);
console.log('------------');
console.log(v);

const object = {
    a:1,
    b:2,
    c:3,
}

console.log(object.b);

const highOrder = (cb) => {
    console.log('high order running...');
    cb(33);
    console.log('end');
}

highOrder((num) => console.log('cb running!'+ num));