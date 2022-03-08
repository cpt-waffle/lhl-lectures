---------- AGENDA ------------


- Data Fetching and Side-Effects
- UseEffect
- axios
- proxy

# ---------------------------- #

 - how are you all on state?
6
 - how are you all on props?
6
 - how are you all on storybook?
4-5

<------- MEME SERVER AND SERVERS-------- >

Applications (APPS) are usually SINGLE PAGE 
and they need to ask for data to fill their content for the user...

TinyApp --- webpage ----- content
Tweeter --- Scheduler --- SPA ----

API's ------> Servers that sent out data WITHOUT any HTML
JSON (XML <--- :( )

<--------------HOW TO CALL AND GET DATA, AND RENDER DATA SCREEN------------->


```jsx
  // functional life cycle mthods 

  // useEffect is a hook
  // that runs right after everything has been rendered initially on the screen
  
  // 2 parameters inside of useEffect
  useEffect(() => {
    console.log("RUN AS SOON EVERYTHING HAS BEEN FINISHED RENDERING INITIALLY");
    // setNum(num + 1);
  }) // one function, null
  // i will RUN on EVERY SINGLE CHANGE (re-render)

  useEffect(() => {
    console.log("RUN ONLY THAT 1 TIME");
  }, []) // <--- DEPENDACY ARRAY
// function 
// array ^-- Empty array


// Grab data from server
// set timers < 30 seconds ---> Continue Reading? Sign up here 
// change something on the DOM that is 
// not part of react

  useEffect(() => {
    console.log("NUMBER 2 has CHANGED!");
  }, [num2]);
```
