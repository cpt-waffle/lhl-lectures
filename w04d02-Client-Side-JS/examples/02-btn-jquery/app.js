// WITH JQUERY
console.log("App js is loaded! :)");


const a = 'test';

$(() => {
  console.log( "ready!" );
  const btn = $('.button')[0];
   $('#button').on('click', (evt) => {
    navigator.geolocation.getCurrentPosition(data => console.log(data));
    $('#button').html('hello world!');
  })
});