// finish the function that returns how many instances of the word "dog" and "cat" were in the string parameter
// output {dog: 5, cat: 4}

// PART B - Modify the function so that it returns a count of every animal
// output {dog: 5, cat: 4, rabbit: 1, moose: 1, parrot: 3}
let str = 'dog table dog dog car cat dog car cat rabbit dog cat moose cat chair';
       // ['dog', 'dog', 'dog', 'cat'....]

const dogCatCounter = function(string) {
    // create an object with dog and cat keys with values starting at 0
    // need to make a string into an array
    const array = string.split(" ");
    console.log(array);
    const result = {};
    // loop through a string
    // for (let i in array) array[i]
    for (let word of array) {
        console.log('word is ==', word);
        if (result[word] === undefined) { // if result at key is undefined
            result[word] = 1;
        } else { 
            result[word]++;
        }
        // result[word] = result[word] ? result[word] + 1 : 1;
    }
    return result;
    // return the object with numbers
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
    return users[id]  
}

// console.log(findUserWithId(users, 'AaCf3'));


// Function takes a name, and looks for the corresponding id
// findUserId(users, 'Colin Lam') => 'AaCf3'

const findUserId = function(users, username) {
  // how do i loop through objects???? :o
  console.log(users);
  // there are many different ways of looping through an object
  // for ... of loop DOES NOT WORK WITH OBJECTS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  ///////////////// METHOD 1 ///// FOR IN ////////////////////////////
//   for (let key in users) { // in loops with indexes in an array
//                            // what does it do for objects???
//     console.log('key -->', key);
//     console.log("users[key] ==>", users[key]);
//     if (users[key] === username) {
//         return key;
//     }
//   }
////////////////////////////////////////////////////////////////////
//////////////// METHOD 2 /// converting the keys/values to an array type /////////////
    const userKeys = Object.keys(users);

    console.log("Object.entries", Object.entries(users));
    console.log('--->', userKeys);
    for (let key of userKeys) {
        if (users[key] === username) {
            return key;
        }
    }

/////////////////////////////////////////////////////////////////////////////////////

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
