// There are a few files in the data folder.
// Each file contains a piece of a lyric from a song.
// we need read each file, put a lyric in an array
// and then print out the array!

const fs = require('fs');
const song = [];

// console.log(fs);

fs.readFile('./data/file11.txt', 'utf8', (error, data,f,c) => {
  if (err) {
    throw err;
  }
  console.log(data);
  song.push(data);
  fs.readFile('./data/file2.txt', 'utf8', (err, data) => {
    console.log(data);
    if (err) {
      throw err;
    }
    song.push(data);
    fs.readFile('./data/file3.txt', 'utf8', (err, data) => {
      console.log(data);
      if (err) {
        throw err;
      }
      song.push(data);
      fs.readFile('./data/file4.txt', 'utf8', (err, data) => {
        console.log(data);
        if (err) {
          throw err;
        }
        song.push(data);
        fs.readFile('./data/file5.txt', 'utf8', () => {})
        console.log(song);
      })
    })
  })
})