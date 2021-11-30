const str = "Hello World of Async !!~~\n";

let delay = 0;
const increment = 400;
console.log("test")
for (let i of str) {
    setTimeout(() => {
        process.stdout.write(i);
    }, delay);
    delay += increment;
}

// 0
// 400
// 800
// 1200
// 1600 