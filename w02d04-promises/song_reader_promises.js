const fs = require('fs').promises;

const f1 = fs.readFile('./data/file1.txt', 'utf8');
const song = [];

// METHOD 1 - not the best way ( actually really common mistake with promises)
// f1.then((data) => {
//   console.log(data);
//   song.push(data);
//   fs.readFile('./data/file2.txt', 'utf8').then((lyric2) => {
//     console.log(lyric2);
//     song.push(lyric2);
//     fs.readFile('./data/file3.txt', 'utf8').then((lyric3) => {
//       console.log(lyric3);
//       song.push(lyric3);
//       fs.readFile('./data/file4.txt', 'utf8').then((lyric4) => {
//         console.log(lyric4);
//         song.push(lyric4);
//         fs.readFile('./data/file5.txt', 'utf8').then((lyric5) => {
//           console.log(lyric5);
//           song.push(lyric5);
//         })
//       })
//     });
//   });
// })

// METHOD 2 PROMISES the right WAY


f1.then((data) => {
  console.log(data);
  song.push(data);
  // Returns a new promise from read File 2
  return fs.readFile('./data/file2.txt', 'utf8');
}).then((data) => {
  // then() for readFile 2 promise
  console.log("Promise 2 ===>", data);
  song.push(data);
  return fs.readFile('./data/file3.txt', 'utf8');
}).then((data) => {
  console.log("Promise 3 ===>",data);
  song.push(data);
  return fs.readFile('./data/file4fghkljhgfhkjhgs.txt', 'utf8');
}).then((data) => {
  console.log("Promise 4 ===>",data);
  song.push(data);
  return fs.readFile('./data/file5.txt', 'utf8');
}).then((data) => {
  console.log("Promise 5 ===>",data);
  song.push(data);
}).catch(error => {
  console.log("ERROR HAS HAPPENED");
  throw error;
})