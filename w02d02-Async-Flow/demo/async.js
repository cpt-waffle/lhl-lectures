// how async works in js examples here:

const start = function() {
  console.log("START");
}

const end = function() {
  console.log("END");
}


console.log('0');
setTimeout(function() {
  console.log("Laudry");
}, 3000);
setTimeout(function() {
  console.log("Dishes");
}, 2000);
start();
console.log("Middle!");
end();
console.log('20');




// goOutside();
// sayHiToTheNeighbour();
// goBackHome();
// async doTheDishes((completed) => putDishesAway());
// vaccum();
// async doTheLaundy((completed) => fold());
// downloadNewSeasonOfaShow();
// sleep();
