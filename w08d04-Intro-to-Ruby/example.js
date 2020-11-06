const PI = 3.14;
const greetings = 'hello world';

const foo = (name, age) => {
    console.log('name: ' + name + '   age: ' + age);
    console.log(`name: ${name}   age: ${age}`);
}


// app.get('/products', (req,res ) => ... res.send())


// console.log(PI);
// console.log(greetings)
// foo('vasily', 29, 1, 2 ,3, test);
const array = [1,2,'three',4,5,6,'seven',8,9,10];
array.push(11);

// array.forEach((item, index) => {
//     console.log(item);
// })


// console.log(array)

const obj = {
    a: 1,
    b: 2,
    c: 3,
    'this is a cool value': 44
}
obj.d = 44;
obj['this is a string'] = 55;

// console.log(obj)


const yieldFunction = (cb) => {
    console.log('before running callback');
    cb()
    console.log('after running callback');
}



yieldFunction(() => console.log("CALLBACK"))




