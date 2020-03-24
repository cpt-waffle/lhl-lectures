$().ready(function() {
    console.log( "ready!" );
    
    $('.btn').on('click', () => {
        $.get('http://pebble-pickup.herokuapp.com/tweets/random', (data)=> {
            let num = Number($('#counter').text());
            num++;
            // debugger
            $('#counter').text(num);
            // console.log(data.tweet);
            $test = `<li class="line">${data.tweet}</li>`;
            $('#pickup-line').append($test);
            // $('#pickup-line').text(data.tweet)
        })
    })

});