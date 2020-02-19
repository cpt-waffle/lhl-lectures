
// A digital root is the recursive sum of all the digits in a number.
//  Given n, take the sum of the digits of n.
//  If that value has more than one digit,
//  continue reducing in this way until a single-digit number is produced
//  . This is only applicable to the natural numbers.




const digital_root = num => {
  if (num < 10) return num;
  let str = num.toString();
  let val = 0;
  for (let i of str) {
    val+= Number(i);
  }
  if (val < 10) return val;

  return digital_root(val);
}










digital_root(24);



digital_root(16)
// => 1 + 6
// => 7

9 + 9
18 = 9

9 + 9 + 9
27


digital_root(942)
// => 9 + 4 + 2
// => 15 ...
// => 1 + 5
// => 6








































