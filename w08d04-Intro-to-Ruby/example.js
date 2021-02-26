let foo = 123;
const PI = 3.14;

console.log(`Hello World ${PI}`);
console.log(foo, PI);

const greetings = (name) => {
    console.log("Hello There!");
    console.log(`General ${name}...`);
    return name;
}

const a = greetings("Kenobi", 12, false);
console.log(a);

const val = 10;

if (val <= 9) {
    console.log('it might be 9 o clock...');
} else if (val === 10)
    console.log('its 10 clock');
else {
    console.log('its past 10....');
}

if (true) console.log("YAY!");

if (!false) console.log('it wasnt false');

if (true) {
    console.log("YAY");
}

if (!false) {
    console.log("It wasnt false");
}

for (let i = 0; i <=10; i++) {
    console.log(i);
}

const arr = [1,2,3,4,5]

arr.forEach((val, i) => {
    console.log(`Val is => `, val, i);
})

arr.forEach(console.log)
const obj = {
    a: [1,2],
    b: [3,4]
}

const objCopy = {...obj};

objCopy.a.push(3);


console.log(obj);
console.log('------------');
console.log(objCopy);


Object.keys(obj).forEach(key => {
    console.log("Key:", key, "   val:", obj[key]);
})

const callbackExample = cb => {
    console.log("before cb");
    cb()
    console.log("after cb");
}

callbackExample(() => console.log("CALLBACK RUNNING!"))
