const string = `We're whalers on the moon,
We carry a harpoon,
For they ain't no whales
So we tell tall tales
And sing our whaling tune.`;

const vowelCounter = (string) => {
  const lowercaseString = string.toLowerCase();
  // loop through the string
  const vowelObject = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
    y: 0
  }

  for (let letter of lowercaseString) {
    // increment that key/val

    //0, null, '', undefined, NaN, false, 
    // empty arr, empty obj === AWLWAYS TRUTHY
    if (vowelObject[letter] !== undefined) {
      // console.log(letter);
      vowelObject[letter]++;
    }
    // console.log('--------------------------');
  }
  // check for a specific key
  return vowelObject;
}


console.log(vowelCounter(string));