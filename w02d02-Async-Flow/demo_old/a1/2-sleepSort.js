const numbers =
[900, 310, 1006, 0, 2, 3630, 1, 52, 603, 59, 81, -500, -50, 0];
// not a great sort... ¯\_(ツ)_/¯
const sleepSort = function(nums) {
  for (const num of nums) {
    setTimeout(() => {
      process.stdout.write(`${num}`)
      // console.log(Math.max(...nums));
      if (num === Math.max(...nums)) {
        process.stdout.write(`\n`);
      }
    }, num);
  }
}

sleepSort(numbers);