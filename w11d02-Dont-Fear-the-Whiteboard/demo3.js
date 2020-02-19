/*
write a function called keymatch,
which will take two objects and an array of strings.
The functions looks through array of strings, using them as keys,
and will check each if the keys match in the object.
if all keys match, than return true, if not return false.
*/

/*
keymatch({a:1,b:2}, {a:1, b:3}, ['a']) // true
keymatch({a:1,b:2}, {a:1, b:2}, ['a', c]) // true

//BONUS
keymatch({a:1,b:[1,2,3]}, {a:1, b:[1,2,3]}, ['a', 'b']) // true
keymatch({a:{a:1},b:[1,2,3]}, {a:{a:1}, b:[1,2,3]}, ['a','b']) // true
*/