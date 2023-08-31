// We have 3 files 
// each of them have a number written in the file
// Read each file, get the value from each file
// Subtract data2 and data3 numbers from data1 number

const fs = require('fs').promises;


const readThreeFiles = () => {
  let data1 = undefined;
  let data2 = undefined;
  let data3 = undefined;
  // async/await
  return fs.readFile('./data1.txt', 'utf8').then(data => {
    console.log(data);
    data1 = data;
    return fs.readFile('./data2.txt', 'utf8')
  }).then((data) => {
    data2 = data;
    return fs.readFile('./data3.txt', 'utf8')
  }).then(data => {
    data3 = data;
    console.log(`${data1} - ${data2} - ${data3} = ${data1 - data2 - data3}`);
    const result = data1 - data2 - data3;
    return result;
  }).catch(e => {
    console.log("-- an error has occured :(");
    console.log(e);
  })
}

// readThreeFiles().then(val => {
//   console.log('the value is=  ', val);
// })


const readThreeFilesAsyncAwait = async () => {
  // async/await
  try {
  const data1 = await fs.readFile('./data1.txt', 'utf8');
  const data2 = await fs.readFile('./data2.txt', 'utf8');
  const data3 = await fs.readFile('./data3.txt', 'utf8');

  console.log(data1, data2, data3);
  console.log(`${data1} - ${data2} - ${data3} = ${data1 - data2 - data3}`);
  } catch (e) {
    console.log("---- error ----");
    console.log(e);
  }
}

readThreeFilesAsyncAwait();