const string = 'lighthouse in the house';

const indexPosition = function(str) {
    let result = {};
    for (let i in str) {

        if ( str[i] !== ' ') {
            if (result[str[i]]) {
                //Number() <--- gets converted into a int or float
                result[str[i]].push(Number(i));
            } else {
                result[str[i]] = [Number(i)];
            }
        }
    }
    // {l: [0], i: [1, 11]....}

    return result;
    // if im able to create an object, 
    // i should be able to insert data into that object
}
//console.log(indexPosition(string));

// result = {}
// result.color = 'red';
// let key = 'make';
// result[key] = 'Toyota';
// result['make'];


const groceryList = {
    one: 'Milk',
    2: 'Cookies',
    2.43: 'Steak',
    'item number three': 'Herbs',
    'i_n.4': 'Candy'
};

const printGroceryList = function(object) {
    // IF you want to loop through an object
    // YOU CANNOT USE OF LOOP
    let i = 1;
    //for IN loop works with OBJECTS
    for (let item in object) {
        // we got the keys, keys = item
        // we got the values object[item]
        console.log(i + ")  " + object[item]);
        // how to get values if i have the keys?
        i++;
    }
    // method number 2 of doing this same thing
    //let values = Object.values(object);
    //console.log(values);
}


//console.log(printGroceryList(groceryList))

























// Write a function that takes these 2 arrays of objects ( books and genres)
// and prints out the following output

// Book: The Most Human Human
// Genre: Nonfiction
// --------------------------
// Book: 'The Design of EveryDay Things
// Genre: Nonfiction
// --------------------------

// CAN I DO ONE OPERATION that can be done multiple times in a loop?

const formatBook = function(book, genre) {
    console.log("Book: ", book.name);
    console.log("Genre: ", genre.name);
    console.log("--------------------------");
}

const genres = [
    {name: 'Dissertation',  id: 1},
    {name: 'Nonfiction',    id: 2},

]
const books = [
    {   
        name: 'The Design of EveryDay Things',
        author: 'Don Norman',
        genre: 1 // genreId
    },
    {
        name: 'The Most Human Human',
        author: 'Don Norman',
        genre: 2
    },
]

const formatMulitpleBooks = function(books, genres) {
    // loop through books first
    for (let book of books) {
        /*
        // we know that a single book is inside of the book var
        // console.log(book.genre);
        const genreId = book.genre;
        */
        for (let genre of genres) {
            if (genreId === genre.id) {
                console.log(genreId);
                formatBook(book, genre);
            }
        }
    }
}

formatMulitpleBooks(books,genres);




















