
let num = 0;

document.addEventListener('DOMContentLoaded', () => {
  const counter = document.getElementById('counter');
  const button = window.document.getElementById('btn');
  
  //null..
  button.addEventListener('click', () => {
    num++;
    counter.innerText = num;
  })
})

console.log("document is ready!");

