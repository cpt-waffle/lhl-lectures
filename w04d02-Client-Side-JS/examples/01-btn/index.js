const PI = 3.14;
console.log("hello world");

const sum = (num1, num2) => {
  window.navigator.getBattery().then(b => console.log(b));
  return num1 + num2;
}

window.document.addEventListener('DOMContentLoaded', () => {
  console.log("document is ready!");
  window.document.getElementsByTagName('h1')[0].addEventListener('click', () => {
    window.document.getElementsByTagName('h1')[0].innerHTML = 'You have been hacked!';
    alert("Pay me in bitcoin or else your browser will never recover!");
  })

  const button = document.getElementById('idbtn');
  console.log(button);
  button.addEventListener('click', () => {
    console.log("the button has been clicked!");
    const numString = document.getElementById('number').innerHTML;
    const number = Number(numString);
    window.document.getElementById('number').innerHTML = number + 1;
  })

  // we need wait for our button and counter to be loaded!
})

