// document.on('ready')
$(() => {
    console.log('ready');
    $('#likes-btn').on('click', () => {
        console.log("pressed");
        const number = Number($('#likes-count').text());
        console.log(number);
        $('#likes-count').text(number + 1);
    })
})