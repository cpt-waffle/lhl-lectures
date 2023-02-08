// loop through my string (letter by letter)
// c style
console.log("---------------C STYLE-----------------");

for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}
console.log("---------------FOR IN-----------------");
// for in
for (let i in str) {
  console.log(str[i]);
}
// for of 
console.log("---------------FOR OF-----------------");
for (let v of str) {
console.log(v);
}