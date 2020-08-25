const foo = (a, b, c) => {
    console.log("c is ", c);
    c();
    console.log('Bar', a, b);
    return 2 + 2;
}
const num = 12;
const string = 'apples';
const callbackFunction = () => {
    console.log("test test");
}

const someNum = foo(num, string, callbackFunction);
console.log(someNum);