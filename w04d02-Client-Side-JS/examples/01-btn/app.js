// console.log('hello world');


// const foo = () => {
//   console.log('incoming popup in 3 seconds!');
//   setTimeout(() => {
//     console.log('open popup now!');
//     window.open();
//     window.navigator.getBattery().then((b) => console.log(b));
//     window.document.querySelector('h1').innerText = 'We have changed our title!';
//   }, 3000)
// }

// foo();

///////////////////////////////////////////////////////////////////////////

// WE cant use $(document).ready() just yet? Why ? SOON!
let clicked = 0;
window.document.addEventListener('DOMContentLoaded', () => {
  window.document.querySelector('button').addEventListener('click', () => {
    console.log("button has been clicked")
    clicked++;
    window.document.querySelector('span').innerHTML = clicked;
  })
})

// Form 
// count how many characters are in that form that the
// user has typed ( on every keyboard click)
