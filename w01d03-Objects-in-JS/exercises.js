// Make a function that takes in an object as a paramater. The object will have
// two values inside of under key a and key b. Swap the values of A and B.

let obj = {a:99, b:1};

const swap = function(object) {
    //... code here
    // how can i acess values inside of object?
    // console.log(object.b)
    // how can i take a value from an object and assign to a variable
    let tempValB = object.b;
    object.b  = object.a;
    object.a = tempValB;
    // console.log('temp Val ====>',tempVal);
    // how can i assign a value to an object?
}
// console.log("Object Before ", obj);
// swap(obj);
// console.log("Object After ", obj);


// make a function that takes in a string
// and returns an object that tells you how many times a word was repeated in a string


let str = 'dog dog dog cat cat dog cat dog cat rabbit moose parrot parrot parrot';

const dogCatCounter = function(string) {
    const arr = str.split(' ');
    let result = {};
    console.log(result.dog)
    // How do i loop through a string?
    for (let i = 0; i < arr.length; i++) {
        let key = arr[i];
        // console.log('the key is: ', key, 'and the value of that key in the object is ', result[key]);
        if (result[key] === undefined) {
            result[key] = 1;
        } else {
            result[key]++;
        }
    }
    return result;
    // How do i count how many dogs or cats i have?
}

// console.log(dogCatCounter(str));


// Array of Objects Question.

const students = [
    {name: 'Zofia Mcdougall', grade: 10},
    {name: 'Anisha Franco', grade: 8},
    {name: 'Colin Lam', grade: 10},
    {name: 'Ozan Robbins', grade: 8},
    {name: 'Doug Velez', grade: 12},
]


//  Given an array of objects above, make a function, that that array as a parameter,
// and returns back an array of all student names.

const getStudentNames = function(array) {
    //How do i loop throgh an array?
    const result = [];
    for (let student of students) {
        // console.log(arra[i]);
        //how can i acess a value of an object inside of an array?
        result.push(student.name);
    }
    return result;
    //... code here
    //how i can store that value in another array? ===========> array.push()
}
console.log(getStudentNames(students))


// give an array of objects above, make a function, where it returns an object they KEY being the GRADE
// and the values being an array of students that are in that grade
// {
//     '10': ['Zofia Mcdougall', 'Colin Lam'],
//     '8': ['Anisha Franco', 'Ozan Robbins'],
//     '12': ['Dough Velez']
// }


const gradesForStudent = function(array) {
    //... code here
}