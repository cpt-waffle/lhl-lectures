const fs = require('fs').promises;
const commonPath = './data/';

fs.readFile(commonPath + 'file1.txt', 'utf8').then( e => {
  console.log(e);
  return fs.readFile(commonPath + 'file2.txt', 'utf8');
}).then( e => {
  console.log(e);
  return fs.readFile(commonPath + 'file3.txt', 'utf8');
}).then( e => {
  console.log(e);
  return fs.readFile(commonPath + 'filedsads.txt', 'utf8');
}).then( e => {
  console.log(e);
  return fs.readFile(commonPath + 'file5.txt', 'utf8');
}).then( e => {
  console.log(e);
}).catch( error => {
  throw error
})