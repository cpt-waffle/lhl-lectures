// finish the function that returns how many instances of the word "dog" and "cat" were in the string parameter
// output {dog: 5, cat: 4}

// PART B - Modify the function so that it returns a count of every animal
// output {dog: 5, cat: 4, rabbit: 1, moose: 1, parrot: 3}
let str = 'dog dog dog cat cat dog parrot parrot cat moose cat rabbit dog piggy chair rock rock';
       // ['dog', 'dog', 'dog', 'cat'....]

const dogCatCounter = function(string) {
    // what is string?
    const arr = string.split(' ');
    const resultObj = {};
    //...
    // how do i loop thorough a string?
    for (let val of arr) {     // THIRD LOOP = VAl = DOG
        // THIRD LOOP resultOBJ = { dog: 2}
        // console.log(val);
        // in loop count dog and count cat

        if (resultObj[val]) { // resultObj[DOG] ==> 1
            // how can i increment a value that is stored in an object???
            resultObj[val]++; //  { dog: 3 }
        } else {
            // hxow can i store a new value in an object???
            resultObj[val] = 1; // resultObj[DOG] = 1 ==> { dog: 1 }
        }
    }
    console.log(resultObj);
    return resultObj;
    // return object with dog: ? cat ? 
}

// console.log(dogCatCounter(str));










// console.log(dogCatCounter(str));

// Find Data Question
// Bellow we have an object of users. 
// A key is denoted as a user_id, and the value is the name of the user.

const users = {
    zbxN3: 'Zofia Mcdougall',
    Ff3dc: 'Anisha Franco',
    AaCf3: 'Colin Lam', 
    X63ef: 'Ozan Robbins', 
    RfErt: 'Doug Velez',
}


// Function takes in a id, and finds the correct user for that id
// if no user is found, return undefined
// findUserWithId(users, 'X63ef') => Ozan Robbins
const findUserWithId = function(users, id) {
    console.log('users:',users);
    console.log('id', id);
    return users[id];
}

// console.log(findUserWithId(users, 'AaCf3'));


// Function takes a name, and looks for the corresponding id
// findUserId(users, 'Colin Lam') => 'X63ef'
const findUserId = function(users, username) {
    for (let id in users) {
        // console.log('id', id);
        // i have an id 
        // how do i get the value out of this users obj?
        if (users[id] === username) {
            console.log("I FOUND THEM");
            return id;
        }
    }
    return undefined;

    // DONT DO WHAT's about to go down here!!!
    // Code Golfing ---> 
    // return Object.keys(users)[Object.values(users).indexOf(username)];
}
console.log(findUserId(users, 'Colin Lam'));

// return total number of users
// countUsers(users) => 5
const countUsers = function(users) {

}

// countUsers(users)









// Given this grocery list

const groceryList = {
    one: 'Milk',
    2: 'Cookies',
    2.43: 'Steak',
    'item number three': 'Herbs',
    'i_n.4': 'Candy'
};

// write a function, that prints out a number followed by each item
const prettyPrintList = function(list) {

}

// prettyPrintList(groceryList);
