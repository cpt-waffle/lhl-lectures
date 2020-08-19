// finish the function that returns how many instances of the word "dog" and "cat" were in the string parameter
// output {dog: 5, cat: 4}

// PART B - Modify the function so that it returns a count of every animal
// output {dog: 5, cat: 4, rabbit: 1, moose: 1, parrot: 3}
let str = 'dog dog rabbit rabbit rabbit dog cat cat chair parrot dog cat cat parrot cat cat moose cat dog';

const dogCatCounter = function(string) {
    const words = string.split(" ");
    // how do i create an object with the cats and dogs
    const result = {};
    let i = 0;
    // figure out how am i going to loop through a string of words? X
    for (let word of words) {
        // word = dog  ===> result['dog'];
        if (result[word] === undefined) {
            result[word] = 1;
        } else {
            result[word]++;
        }
        // how do i increment a value inside of an object
    }
    console.log(result);
    // return the object to the user/client
    return result;
}

// dogCatCounter(str);










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
    console.log(users[id]);
}

// findUserWithId(users, 'AaCf3');


// Function takes a name, and looks for the corresponding id
// findUserId(users, 'Colin Lam') => 'X63ef'
const findUserId = function(users, username) {
    // console.log('users =>', users);
    // console.log('username =>', username);

    // go through an object ( loop ??? )
    // in objects.. you are allowed to loop through them
    // but can only loop through the keys not the values
    // you can ONLY use a for in loop... (For OF does not work!!!!)

    
    for (let key in users) {
        // ---------------------- Value
        if (users[key] === username) {
            return key;
        }
    }
    // find the value that matches username
    // return the key that corresponds with that value

}

// console.log(findUserId(users, 'Ozan Robbins'));


// CODE GOLFING!!?!?


// return total number of users
// countUsers(users) => 5
const countUsers = function(users) {
    let count = 0;
    // for (let key in users) {
    //     count++;
    // }
    count = Object.values(users).length;
    console.log(count);
}

countUsers(users)









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
