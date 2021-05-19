console.log("file loaded!");

const dummyData = [{
    "score": 19.688591,
    "show": {
    "id": 23346,
    "url": "https://www.tvmaze.com/shows/23346/titanic",
    "name": "Titanic",
    "type": "Scripted",
    "language": "English",
    "genres": [
    "Drama",
    "Action"
    ],
    "status": "Ended",
    "runtime": 120,
    "premiered": "1996-11-17",
    "officialSite": null,
    "schedule": {
    "time": "21:00",
    "days": [
    "Tuesday",
    "Sunday"
    ]
    },
    "rating": {
    "average": null
    },
    "weight": 0,
    "network": {
    "id": 2,
    "name": "CBS",
    "country": {
    "name": "United States",
    "code": "US",
    "timezone": "America/New_York"
    }
    },
    "webChannel": null,
    "dvdCountry": null,
    "externals": {
    "tvrage": null,
    "thetvdb": 279382,
    "imdb": null
    },
    "image": {
    "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/87/219169.jpg",
    "original": "https://static.tvmaze.com/uploads/images/original_untouched/87/219169.jpg"
    },
    "summary": "<p>The story of the 1912 sinking of the largest luxury liner ever built, the tragedy that befell over two thousand of the rich and famous as well as of the poor and unknown passengers aboard the doomed ship.</p>",
    "updated": 1583634442,
    "_links": {
    "self": {
    "href": "https://api.tvmaze.com/shows/23346"
    },
    "previousepisode": {
    "href": "https://api.tvmaze.com/episodes/1004438"
    }
    }
    }
    },
    {
    "score": 18.743923,
    "show": {
    "id": 1060,
    "url": "https://www.tvmaze.com/shows/1060/titanic",
    "name": "Titanic",
    "type": "Scripted",
    "language": "English",
    "genres": [
    "Drama"
    ],
    "status": "Ended",
    "runtime": 60,
    "premiered": "2012-03-25",
    "officialSite": "http://titanic.globaltv.com/",
    "schedule": {
    "time": "21:00",
    "days": [
    "Sunday"
    ]
    },
    "rating": {
    "average": 7
    },
    "weight": 84,
    "network": {
    "id": 35,
    "name": "ITV",
    "country": {
    "name": "United Kingdom",
    "code": "GB",
    "timezone": "Europe/London"
    }
    },
    "webChannel": null,
    "dvdCountry": null,
    "externals": {
    "tvrage": 31070,
    "thetvdb": 254112,
    "imdb": "tt1869152"
    },
    "image": {
    "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/6/17029.jpg",
    "original": "https://static.tvmaze.com/uploads/images/original_untouched/6/17029.jpg"
    },
    "summary": "<p><b>Titanic </b>is a four part serial created by BAFTA-winning producer Nigel Stafford-Clark and written by Oscar and Emmy winner Julian Fellowes to mark the hundredth anniversary of the world's most famous maritime disaster in April 1912. It sets out to tell the story not just of a single ship, but of an entire society--one that was heading towards its own nemesis in the shape of the First World War as carelessly as <i>Titanic </i>towards the iceberg.</p>",
    "updated": 1617499182,
    "_links": {
    "self": {
    "href": "https://api.tvmaze.com/shows/1060"
    },
    "previousepisode": {
    "href": "https://api.tvmaze.com/episodes/101891"
    }
    }
    }
    }
]

const addShow = (item) => {
    let image = '';
    if (item.show.image) {
        image = item.show.image.medium
    } else {
        image = 'https://res.cloudinary.com/lmn/image/upload/c_limit,h_392,w_696/e_sharpen:100/f_auto,fl_lossy,q_auto/v1/gameskinny/b9f8d1d28618c4d4f1122e4d9b4acf01.jpg'
    }

    $('#shows').append(`
    <div class="show">
        <div class='col-1'>
            <img class="img" src="${image}"/>
        </div>
        <div class='col-2'>
            <h1>${item.show.name}</h1>
            <p>${item.show.summary}</p>
        </div>
    </div>`)
}
// ver 1
// $.ajax({url, success: () => {
//     // do stuff here
// }})
/////////////////
//$.get( url, function( data ) {
    // do stuff here
// });


const getShows = (showName) => {
    const url = `http://api.tvmaze.com/search/shows?q=${showName}`;
    $.ajax({url}).then((response) => {
        console.log("response---->", response)
        for (let item of response) {
            addShow(item);
        }
        console.log('done!');
    });
}


$(document).ready(() => {
    $( "#showSearch").submit(function( event ) {
        event.preventDefault();
        // console.log(event.target[0].value)
        // console.log(event.target.search.value)

        const show = $('#searchInput').val();
        $('#shows').empty();
        getShows(show);
    });
});

