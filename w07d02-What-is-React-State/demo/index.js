// document.on('ready')
const someoneClickedMyButton = () => {
    console.log("pressed");
    const number = Number($('#likes-count').text());
    console.log(number);
    $('#likes-count').text(number + 1);
}

$(() => {
    console.log('ready');
    


    $('#likes-btn').on('click', someoneClickedMyButton)
})