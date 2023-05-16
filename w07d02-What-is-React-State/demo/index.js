// document.on('ready')

$(() => {
    console.log('ready');
    
    const someoneClickedMyButton = () => {
        console.log("pressed");
        const number = Number($('#likes-count').text());
        console.log(number);
        $('#likes-count').text(number + 1);
    }


    $('#likes-btn').on('click', someoneClickedMyButton)
})