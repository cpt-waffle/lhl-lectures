// Taylor Swifts wants us to go through her files,
//and stich up song lyrics which then we need output


// Sync Code for Problem
// const fs = require('fs');

// const song = [];

// let lyric1 = fs.readFileSync('./data/file1.txt', 'utf8');
// let lyric2 = fs.readFileSync('./data/file2.txt', 'utf8');
// let lyric3 = fs.readFileSync('./data/file3.txt', 'utf8');
// let lyric4 = fs.readFileSync('./data/file4.txt', 'utf8');
// let lyric5 = fs.readFileSync('./data/file5.txt', 'utf8');

// console.log(lyric1, lyric2, lyric3, lyric4, lyric5);

const fs = require('fs');
const song = [];

const printSong = function() {
  song.forEach(function(lyric) {
    console.log(lyric);
  })
}

fs.readFile('./data/file1.txt', 'utf8', function(err, lyric1) {
  song.push(lyric1);
  fs.readFile('./data/file2.txt', 'utf8', function(err, lyric2) {
    song.push(lyric2);
    fs.readFile('./data/file3.txt', 'utf8', function(err, lyric3) {
      song.push(lyric3);
      fs.readFile('./data/file4.txt', 'utf8', function(err, lyric4) {
        song.push(lyric4);
        fs.readFile('./data/file5.txt', 'utf8', function(err, lyric5) {
          song.push(lyric5);
          printSong(song);
        });
      });
    });
  });
});



apple = function() {
  //calculate something very long and tedious.....
  return Promise(result);
}
































