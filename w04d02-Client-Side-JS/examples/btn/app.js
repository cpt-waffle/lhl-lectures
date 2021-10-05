console.log("Do i work!?");

// window.navigator.getBattery().then(b => {
//     console.log('Your battery level is:');
//     console.log(b);
// })

// setTimeout(() => {
//     document.querySelector('#red-btn').innerText = "HELLO!!";
// }, 3000)

// document.addEventListener('DOMContentLoaded', () => {
//     document.querySelector('#red-btn').addEventListener('click', 
//        (event) => {
//         console.log("WE CLICKED");
//     })
// })

$(() => {
    let clicks = 0;
    let hovers = 0;
    $('#red-btn').on('click', () => {
        clicks++;
        $('#click-counter').text(clicks);
    })

    $('#red-btn').hover(() => {
        console.log("HOVERING!!");
    })

    $('#word-box').keyup(() => {
        console.log($('#word-box').val().length);
    })
})

//  to count characters
// we will need to...
// create a place where we can write characters
// we will need to add an event listener to that container
    // we will probably need to LOAD that even listener AFTER our entire page 
    // has loaded


// and we will need to add logic to that listener, to find out how many characters
// have been written

