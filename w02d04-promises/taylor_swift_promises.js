const fs = require('fs').promises;

const song = [];

let p = fs.readFile('./data/file1.txt', 'utf8');

// when P function is done
// THEN i will do something
// When im done with something
// THEN i will something


p.then(function(lyric1) {
  song.push(lyric1);
  // THIS RETURNS ANOTHER PROMISE
 fs.readFile('./data/file2.txt', 'utf8');
}).then(function(lyric2) {
  song.push(lyric2);
  // THIS RETURNS ANOTHER PROMISE
  fs.readFile('./data/file3.txt', 'utf8');
}).then(function(lyric3) {
  song.push(lyric3);
  return fs.readFile('./data/file4.txt', 'utf8');
}).then(function(lyric4) {
  song.push(lyric4);
  return fs.readFile('./data/file5.txt', 'utf8');
}).then(function(lyric5) {
  song.push(lyric5);
  console.log("SONG HAS COMPLETED DOWNLOADING>>>");
  console.log(song);
})

console.log(p);