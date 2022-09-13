// NO JQUERY
console.log("Hi im app.js line 1 :)");
const PI = 3.14;

const helloWorld = () => console.log("hello World!");


document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementsByClassName('button')[0];
  btn.addEventListener('click', (evt) => {
    navigator.geolocation.getCurrentPosition(data => console.log(data));
  });
})

//