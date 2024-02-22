// We have 3 files 
// each of them have a number written in the file
// Read each file, get the value from each file
// Subtract data2 and data3 numbers from data1 number

const fs = require('fs').promises;


const readThreeFiles = () => {
  fs.readFile('./data1.txt', 'utf8').then((data1) => {
    console.log("DATA 1 READ FINISHED ------------------->:   ",data1);
    return fs.readFile('./data2.txt', 'utf8')
  }).then((data2) => {
    console.log("DATA 2 READ FINISHED ------------------->:   ",data2);
    return fs.readFile('./data3.txt', 'utf8')
  }).then((data3) => {
    console.log("DATA 3 READ FINISHED ------------------->:   ",data3);
  }).catch(e => {
    console.log("error has occured");
    console.log(e.message);
  })
}


readThreeFiles();


// const readThreeFiles = async () => {
//   try {
//     const data1 = await fs.readFile('./data1.txt', 'utf8');
//     console.log("DATA 1 READ FINISHED ------------------->:   ",data1);
//     const data2 = await fs.readFile('./data2.txt', 'utf8');
//     console.log("DATA 1 READ FINISHED ------------------->:   ",data2);
//     const data3 = await fs.readFile('./data3.txt', 'utf8');
//     console.log("DATA 1 READ FINISHED ------------------->:   ",data3);

//     console.log(data1, data2, data3);
//   } catch (e) {

//   }


// }
