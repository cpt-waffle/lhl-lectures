
const arr = [2,4,6,8];

const arrLength = (arr, cb) => {
    setTimeout(() => {
        cb(arr.length);
    }, 1000)
    
}

const sum = (arr) => {
    let result = 0;
    for (let elem of arr) {
        result += elem; // result = result + elem;
    }
    return result;
}

const mean = (arr) => {
    console.log("RUNNING~~");
    arrLength(arr, (val) => {
        console.log("inside callback line 22:");
        console.log(val);
        console.log(sum(arr)/ val);
    })
    // console.log(sum(arr) / arrLength(arr));

}


console.log(mean(arr));