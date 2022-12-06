
let num = 0;

// document.addEventListener('DOMContentLoaded', () => {
//   const counter = document.getElementById('counter');
//   const button = window.document.getElementById('btn');
  
//   //null..
//   button.addEventListener('click', () => {
//     num++;
//     counter.innerText = num;
//   })
// })

$(() => {
  console.log("document is ready!");
  const counter = $('#counter');
  const button =  $('#btn');

  button.on('click', function(evt) {
    console.log(this);
    num++;
    counter.text(num);
  })

  $('#area').on('keydown', function(){
    console.log("key has been pressed!");
    console.log(this.value.length);
  })
})
