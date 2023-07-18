
let i = 1;

$(() => {
  const btn = $('#btn');
  const counter = $('#counter');

  btn.on('click', () => {
    counter.text(i++);
  })
})