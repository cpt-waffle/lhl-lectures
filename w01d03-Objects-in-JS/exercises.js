// finish the function that returns how many instances of the word "dog" and "cat" were in the string parameter
// output {dog: 5, cat: 4}

// PART B - Modify the function so that it returns a count of every animal
// output {dog: 5, cat: 4, rabbit: 1, moose: 1, parrot: 3}
let str = 'DoG DOg Dog DAWG';


const dogCatCounter = function(string) {
    const objCounter = {};
    // console.log(string);
    // we split a string for each space into an array (space parced per each item)
    const animals = string.split(' ');
    // console.log(animals[0]);
    // animal is iterator
    for (let i=0; i < animals.length;  i++) {
        let animal = animals[i].toLowerCase();
        console.log(objCounter[animal]);
        if (!objCounter[animal]) {
            objCounter[animal] = 1;
        } else { // 
            objCounter[animal]++;
        }
        
        // if (animal === 'cat') {
        //     objCounter.cat++;
        // }
        // if (animal === 'rabbit') {
        //     objCounter.rabbit++;
        // }
        // if (animal === 'dog') {
        //     objCounter.dog++;
        // }
    }
    return objCounter;
}

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
    // console.log(users);
    // console.log(id);
    console.log(users[id]);
}

//findUserWithId(users, 'zbxN3');


// Function takes a name, and looks for the corresponding id
// findUserId(users, 'Colin Lam') => 'X63ef'
const findUserId = function(users, username) {
    // Object.keys() [zbXN3, Ff3dc, ...]
    // Object.values() [Zofia, Anisha, ...]
    // console.log(users);
    // console.log(username);
    // FOR OBJECTS you CANNOT USE FOR OF LOOP!!
    for (let i in users) {
        // console.log(i);
        // console.log(users[i]);
        if (users[i] === username) {
            console.log("FOUND username, key is:", i);
            return i;
        }
    }
}

// findUserId(users, 'Colin Lam');




// return total number of users
// countUsers(users) => 5
const countUsers = function(users) {
    console.log(Object.values(users).length);
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
    // console.log(list);
    // method: 2 
    // values = Object.values(list) // [Cookies, Milk, Steak...]
    // a Ctyle or an in loop or of 
    console.log(list)
    let i = 1;
    for (let key in list) {
        console.log(i,' -- ',list[key]);
        i++;
    }
}

prettyPrintList(groceryList);

