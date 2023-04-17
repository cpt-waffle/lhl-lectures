#### W2D4 - Intro to Promises

Thank you for coming to the lecture! Today we talked about about callbacks, promises and async in Javascript

*DISCLMAER*

Callbacks and Promises are HARD!!!!

Don't expect that by today you will be masters of writting Promises. The main idea is that you are aware that they exist, you have some knowledge on how to use them, and you have enough information to find out the rest on how to write your own.

With time you will start to understand them (just like callbacks), so please do not worry
![heavy_breathing](https://i.imgur.com/KWl6pqT.jpg)

None of this :)

[Resource explaining the event loop in depth.](https://medium.com/front-end-weekly/javascript-event-loop-explained-4cd26af121d4)


#### Solving a Problem with Callbacks ( taylors_swift_callabcks.js )
We have 4 files, each file has a lyric out of a song, and we need to read each file and output the entire lyric.

After much trial and different types of solutions... we came up with this....

```js
fs.readFile('data/file1.txt', 'utf8', (err, data) => {
  song.push(data);
  fs.readFile('data/file2.txt', 'utf8', (err, data) => {
    song.push(data);
    fs.readFile('data/file3.txt', 'utf8', (err, data) => {
      song.push(data);
      fs.readFile('data/file4.txt', 'utf8', (err, data) => {
        song.push(data);
        fs.readFile('data/file5.txt', 'utf8', (err, data) => {
          song.push(data);
          console.log("Song download complete....");
          printSong(song);
        });
      });
    });
  });
});
```

As you can see the solution works but it is not pretty. debugging this would be alittle bit troublesome and readibility is now alot more difficult.

Now we will try doing the same exact exercise but with promises.

```js
fs.readFile('data/file1.txt', 'utf8')
.then( (data) => {
  song.push(data);
  return fs.readFile('data/file2.txt', 'utf8')
}).then((data) => {
  song.push(data);
  return fs.readFile('data/file3.txt', 'utf8');
}).then((data) => {
  song.push(data);
  return fs.readFile('data/file4.txt', 'utf8');
}).then((data) => {
  song.push(data);
  return fs.readFile('data/file5.txt', 'utf8');
}).then((data) => {
  song.push(data);
  console.log('Song Download Complete......');
  printSong(song);
})
```
### Error PRotecting

With errors using callbacks, we would have to check each `err` variable and if it was true we would throw it

```js
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
        //.....
```

With Promises...

```js
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
}).catch(error => { /// TO CATCH ANY ERROR THAT HAPPENED
  console.log("ERROR HAS HAPPENED");
  throw error;
})
```



Alot easier and cleaner to read right?

so what is exactly happening here?
**note: we are using require('fs').promises; which is experimental**

The `fs.readFile` function returns back a `Promise` object. A `Promise` object represents an eventual completion of a asynch operation with its resulting value. The callback the promise takes, has one parameter, which is the `data` that has been read from our file.

`Promise` Objects starts as pending and based on the function they either get:

 - resolved -> everything went well
 - rejected -> something went wrong and an error occured

 Whatever the `.then(...)` callback returns, it can be fed into a subsequent `.then`, chaining them toghether.

 #### BONUS - Basic creation of a Promise Function

```js
 const diceRoll = () => new Promise( (resolve, reject) => {
  console.log('rolling dice......!')
  setTimeout( () => {
    const number = Math.floor(Math.random() * 6) + 1;
    //Whenever the calculation has finished, resolve the promise with the value
    resolve(number)
  }, 2000)
});

// run the function and tac on .then with a callback
diceRoll().then( (number) => {
  console.log("THE NUMBER IS ", number);
});
```



#### Javascript Event Loop - The Event Loop

![event_loop](https://user.oc-static.com/upload/2018/12/06/15440890869914_event-loop.jpg)
