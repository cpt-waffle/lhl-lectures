// // map // forEach // Filter // 

const generalLoop = function(arr, callback) {
    for (let i in arr) {
        callback(arr[i], i);
    }
}


const array = [23, 54, 12, 24, 11];
//             0    1   2   3   4

// for c style
// for in
// for of
// while

const users = [{name: 'vas', id: 3}, {name: 'jim', id: 2}, {name: 'tracey', id: 1}];
const object = {name: 'toyota', make: 'GR86', year: 2022, color: 'Track BRed'};

Object.keys(object).forEach((property) => {
    // console.log('property:', property);
    // if i have a variable with a name of key, how do i get the value from the object?
    // square bracket notation
    // console.log(object[property]);
})


// users.forEach(function(user, index, arr) {
//     console.log('what is element ?');
//     console.log(user.name);
//     console.log(index);
// })

// 

const isNumber2 = (val) => {
    if (typeof val === 'number') {
        return true;
    } else {
        return false;
    }
}


const isNumber = (val) => typeof val === 'number';



const names = ['Harry', 'James', "Waldo", "Cerci"];

const findWaldo = (names, cb) => {
    // loop through your names array
    // if the name is currently Waldo 
    cb(index)
}