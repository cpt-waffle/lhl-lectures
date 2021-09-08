console.log("app.js");

const dummyObj = {
    "score": 0.894875,
    "show": {
        "id": 52361,
        "url": "https://www.tvmaze.com/shows/52361/cars",
        "name": "Cars",
        "type": "Animation",
        "language": "English",
        "genres": [],
        "status": "In Development",
        "runtime": null,
        "averageRuntime": null,
        "premiered": null,
        "officialSite": null,
        "schedule": {
            "time": "",
            "days": []
        },
        "rating": {
            "average": 4.4
        },
        "weight": 0,
        "network": null,
        "webChannel": {
            "id": 287,
            "name": "Disney+",
            "country": null
        },
        "dvdCountry": null,
        "externals": {
            "tvrage": null,
            "thetvdb": null,
            "imdb": null
        },
        "image": null,
        "summary": "<p>Pixar is speeding ahead with a new series following Lightning McQueen and Mater on a road trip across the country. Featuring new characters, old friends, and imaginative destinations. Coming to Disney+ in Fall 2022.</p>",
        "updated": 1607679181,
        "_links": {
            "self": {
                "href": "https://api.tvmaze.com/shows/52361"
            }
        }
    }
}


// $.ajax({
//     url: 'https://api.tvmaze.com/search/shows?q=cars',
//     success: function(data) {
//         console.log("completed!");
//         console.log(data);
//     },
//   });


// this line of code, calls an api and grabs us the information we need.
// the info comes as an array of objects....
// $.get('https://api.tvmaze.com/search/shows?q=cars').then(data => {
//     console.log("success");
//     console.log(data);
// })

// we want to see a picture

// name, rating/ img
// title year
// url
// genre
// streaming or playing where

const addShow = (item) => {
    console.log('-------------------');
    console.log(item.show)
    let rating = 0;
    let image = "https://i.redd.it/6xvh1f7btgl31.jpg";

    if (item.show.rating.average) {
        rating = item.show.rating.average;
    }

    if (item.show.image) {
        image = item.show.image.original;
    }
    $('#shows').append(`
    <div class="show">
        <div>
            <h3 class="show--title">${item.show.name}</h3>
            <img class="show--img" src="${image}"/>
            <h4>Rating: ${rating}</h4>
        </div>
        <div class="show--desc">
            ${item.show.summary}
        </div>
    </div>
    `);
}

const findShow = (name) => {
    $('#shows').empty();
    $.get(`https://api.tvmaze.com/search/shows?q=${name}`).then(data => {
        console.log("success");
        for (let item of data) {
            addShow(item);
        }
    })
}


$( document ).ready(function() {
    // findShow('dogs')
    $('#form').on('submit', (evt) => {
        evt.preventDefault();
        const name = evt.target.searchShow.value;
        // console.log($('#searchShow').val());
        findShow(name);
    })
});


