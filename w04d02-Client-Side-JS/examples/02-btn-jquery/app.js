// JQUERY

// -- chrome
// -- firefox
// -- internet explorer 5-8
// -- opera
// -- netscape
// -- etc

// JQUERY ---- if you use our methods, no matter what browser you use
// the behavior will be the same!!

// jquery gave us an "easier" way to make dom manipulation



///////////////////////////////

// -- chrome
// -- edge (which is actually chrome behind the scenes)
// -- brave ( actually chrome)
// -- firefox 
// 

// HOW TO INSTALL JQUERY
// download it to your website/package
// include in the script file

// use a CDN to do all of that ^

let clicked = 0;
$(document).ready(() => {
  $('button').on('click', () => {
    console.log("button has been clicked");
    clicked++;
    $('span').text(clicked);
  })
})

// Form  for today's activities
// Find the form-input field with jquery ( or vanillaJS)
// Add event listner that is able 
//to run on every letter typed in
// use that to get the output of what was 
// typed in
// 140 - what was typed in = how many characters are left
// display that number on the webpage
