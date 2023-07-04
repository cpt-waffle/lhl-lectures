
const a = () => {
  console.log("this is a");
}

const b = () => {
  console.log("this is b");
}

// some functions in javascript are async
// and run somewhere else, while the main of the program runs parallel

a(); // take out the garbage
/* laundry()*/ setTimeout(() => {
    // dryer();
  console.log("TIMEOUT FUNCTION");
}, 4000)
b(); // volleyball();




/////////  Chores for your place ///////

// take out the garbage
// clean the bird cage
// vaccum
// laundry
// volleyball
// mop floors
7