
$( document ).ready(function() {
    console.log( "ready!" );
    $('#red-btn').on('click', (evt) => {
        console.log(evt);
        console.log('clicked');
        $('#red-btn').text('NAW');
        // const newPTag = $('<p>');
        // newPTag.text('hello world');
        const item = `
        <p class="item">
            hello world
        </p>
        `
        $('.clicks').append(item);

    })

    //Need a HTML element, the event you want to listen on, and a callback
    $('#comment').on('keyup', (event) => {
        console.log(event);
        console.log('something is being typed in...');
    })

});


// document.addEventListener('DOMContentLoaded', function() {
//     console.log('100% loaded now!');
//     document.getElementById('red-btn').addEventListener('click', (evt) => {
//         console.log(evt);
//         console.log('clicked');
//         document.getElementById('red-btn').innerText ='NAWW';
//         const newPTag = document.createElement('p');
//         newPTag.innerText = 'Hello World';
//         document.getElementsByClassName('clicks')[0].appendChild(newPTag);
//     })
// })

// console.log('Loaded');
// console.log("are we sure this loaded!?")
// NULL
