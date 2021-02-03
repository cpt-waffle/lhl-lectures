$(() => {
    console.log("ready");

    $.get('/marks').then(data => {
        console.log(data);
    })
    // $('#btn').on('click', (evt) => {
    //     console.log("CLICKED");
    //     $.get('/api/marks').then(response => {
    //         console.log(response);
    //         $('#marks').append(JSON.stringify(response.marks));
    //     })
    // })
})