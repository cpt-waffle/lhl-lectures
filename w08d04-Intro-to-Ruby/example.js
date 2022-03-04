let fruit = 'apple';
const PI = 3.14;

console.log(fruit);
console.log(PI);
/*  */
console.log(fruit + ' ' + PI);
console.log(`${fruit}  --- ${PI}`);

const foo = (arg) => {
    console.log("BAR!", arg);

    return 22;
}

const val = foo(10);
console.log(val);

const result = 10;

if (result < 10) {
    console.log("result is less than 10");
} else if (result === 10) {
    console.log("result is 10");
} else {
    console.log("result is greater than 10")
}

if (result === 10) console.log("ONE LINE TRUE!");
if (!false) console.log("IT WORKS!");

const arr = [1,2,3,4, 'five', 'six', 7.5, false];

arr.forEach((num, index) => {
    console.log('Value is ==', num);
})

const obj = {a:1, b:2, c:3};
console.log(obj.b);
Object.keys(obj).forEach((key) => {
    console.log(`${key} ==> ${obj[key]}`);
})

const highOrder = fn => {
    console.log("START");
    fn(25);
    console.log("END");
}

highOrder((num) => {
    console.log(`CALLBACK RAN!! ${num}`);
})