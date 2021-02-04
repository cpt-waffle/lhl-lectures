// input [1,2,3,4,5]
// output[2,4,6,8,10]

let input = [1,2,3,4,5];

// basic way without callbacks or anything...

const result = [];

for (let val of input) {
    const answer = val * 2;
    result.push(answer);
}

const result2 = input.map((val) => {
    console.log(val)
    return val * 2;
})

console.log(result2);


// console.log(result);
