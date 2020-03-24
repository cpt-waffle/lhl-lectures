const cowSay = () => {
    console.log(` __________________
    < you found a secret! >
     ------------------
            \   ^__^
             \  (oo)\_______
                (__)\       )\/\
                    ||----w |
                    ||     ||`)

    // navigator.geolocation.getCurrentPosition(e => console.log(e))    
}

// document.getElementById('cool-form').addEventListener('submit', (event) => {
//     event.preventDefault();
//     console.log(event.target.name.value);
//     document.getElementById('header2').textContent = `My name is ${event.target.name.value}`;
//     console.log(document.getElementById('header2').textContent)
// })

const coolForm = $('#cool-form');


coolForm.on('submit', (evt) => {
    evt.preventDefault();
    console.log(event.target.name.value);
    $('#header2').text(`my name is ${event.target.name.value}`);
    console.log($('#header2').text());
})