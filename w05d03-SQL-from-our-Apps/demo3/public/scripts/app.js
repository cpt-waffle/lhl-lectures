const { query } = require("../../db/db");

$(() => {
    console.log("ready");

    $('#btn').on('click', (evt) => {
        console.log("CLICKED");
        $.get('/api/marks').then(response => {
            console.log(response);
            $('#marks').append(JSON.stringify(response.marks));
        })
    })
})