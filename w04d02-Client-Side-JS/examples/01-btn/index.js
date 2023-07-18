const PI = () => {
  return 3.14;
}

const kirby = () => {
  console.log(" <('_'<) ");
}

let i = 1;

document.addEventListener('DOMContentLoaded', () => {
  const button = document.getElementById('btn');
  button.addEventListener('click', () => {
    document.getElementById('counter').innerText = i
    i++;
  });
})