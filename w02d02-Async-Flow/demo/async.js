// async sandbox
const a = () => {
  console.log("running function a...");
}


// async
// console.log('clean the toilet');
// console.log('clean the kitchen');
// console.log('washingmachine -- dirty clothes START NOW')
// setTimeout(() => {
//   console.log("WASHING MACHINE FINISHED!!!!");
//   console.log("time to use the dryer");
//   setTimeout(() => {
//     console.log("DRYER HAS FINISHED!!")
//   }, 100)
// },1000)
// console.log("START DISHWASHER")
// setTimeout(() => {
//   console.log('dishwasher FINISHED!!')
// }, 100);
// console.log('sweep the floor');
// console.log('change the sheets');
// console.log('rake the backyard');

// Cleaning my house

// clean the toilet
// clean the kitchen
// washingmachine -- dirty clothes 
// dishwash the dirty dishes
// sweep the floor
// change the sheets
// rake the backyard 

setTimeout(() => {                        /// soak the dishes
  console.log("1")
  setTimeout(() => {                               // put in dishwasher and run the cycle
    console.log("2")
    setTimeout(() => {                                        // put on dishrack and wait till they are dry
      console.log("3")
    },3000)
  },2000)
}, 1000)