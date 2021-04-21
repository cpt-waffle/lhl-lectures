console.log("HELLO WORLD!!!");

const dummyData = [
    {
    "score": 16.048777,
    "show": {
    "id": 28274,
    "url": "https://www.tvmaze.com/shows/28274/apple-tree-house",
    "name": "Apple Tree House",
    "type": "Scripted",
    "language": "English",
    "genres": [
    "Drama",
    "Adventure",
    "Children"
    ],
    "status": "To Be Determined",
    "runtime": 15,
    "premiered": "2017-05-22",
    "officialSite": "http://www.bbc.co.uk/cbeebies/shows/apple-tree-house",
    "schedule": {
    "time": "17:30",
    "days": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
    ]
    },
    "rating": {
    "average": null
    },
    "weight": 55,
    "network": {
    "id": 458,
    "name": "CBeebies",
    "country": {
    "name": "United Kingdom",
    "code": "GB",
    "timezone": "Europe/London"
    }
    },
    "webChannel": null,
    "dvdCountry": null,
    "externals": {
    "tvrage": null,
    "thetvdb": 328558,
    "imdb": "tt6896488"
    },
    "image": {
    "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/112/280637.jpg",
    "original": "https://static.tvmaze.com/uploads/images/original_untouched/112/280637.jpg"
    },
    "summary": "<p><b>Apple Tree House</b> is a preschool drama series that follows Mali, an ordinary boy who has just moved on to an extraordinary inner city estate, where he meets his new best friend Sam, the daughter of the estate's caretaker. Together they solve daily problems and overcome childhood dilemmas - all within the safety net of their loving families and the inspirational Apple Tree community that surrounds them.</p>",
    "updated": 1600966965,
    "_links": {
    "self": {
    "href": "https://api.tvmaze.com/shows/28274"
    },
    "previousepisode": {
    "href": "https://api.tvmaze.com/episodes/1681272"
    }
    }
    }
    },
    {
    "score": 15.05731,
    "show": {
    "id": 17005,
    "url": "https://www.tvmaze.com/shows/17005/apple-onion",
    "name": "Apple & Onion",
    "type": "Animation",
    "language": "English",
    "genres": [
    "Comedy",
    "Children"
    ],
    "status": "Running",
    "runtime": 15,
    "premiered": "2016-05-14",
    "officialSite": "https://www.cartoonnetwork.com/video/apple-and-onion/index.html",
    "schedule": {
    "time": "18:00",
    "days": [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday"
    ]
    },
    "rating": {
    "average": null
    },
    "weight": 72,
    "network": {
    "id": 11,
    "name": "Cartoon Network",
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
    "thetvdb": 342060,
    "imdb": "tt8019790"
    },
    "image": {
    "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/206/515287.jpg",
    "original": "https://static.tvmaze.com/uploads/images/original_untouched/206/515287.jpg"
    },
    "summary": "<p><b>Apple &amp; Onion</b> are two best buddies who get invited to Hotdog's party, but they find they've still got some growing up to do.</p>",
    "updated": 1617291844,
    "_links": {
    "self": {
    "href": "https://api.tvmaze.com/shows/17005"
    },
    "previousepisode": {
    "href": "https://api.tvmaze.com/episodes/2056041"
    }
    }
    }
    },
]


// $.ajax({
//     url: 'http://api.tvmaze.com/search/shows?q=toronto',
//     success: (data) => {
//         console.log(data);
//     }
// })

/////////////


// $.get( "http://api.tvmaze.com/search/shows?q=montreal", function(data) {
//     console.log(data);
// })
///////////



// we know that q="string" is the word that will be searched by the tv maze API
// we need to concatinate a string that adds q= <--- string and then use our ajax call

const getShows = (str) => {
    const url = 'http://api.tvmaze.com/search/shows?q=';
    
    const searchURL = url + str;
    console.log(searchURL);
    $.ajax({url: searchURL}).then(data => {
        renderItems(data);
    })
    
}

// make a function called renderItem 
// and it takes 1 show and renders it on our page

// $.append(<h1>hello world</h1>)

const renderItem = (show) => {
    console.log(show.show);
    const name = show.show.name;
    const desc = show.show.summary;
    let img = '';
    if (show.show.image) {
        img = show.show.image.original;
    } else {
        img = 'https://totimes.ca/wp-content/uploads/2017/01/kittycatcon-859x639.jpg';
    }
    console.log(name,desc,img);
    $("#shows").append(`
    <div class="item">
        <img src="${img}"/>
        <div>
            <h2>${name}</h2>
            <p>${desc}</p>
        </div>
    </div>
    `);
}


const renderItems = (showsArr) => {
    for (let show of showsArr) {
        renderItem(show);
    }
}


$( document ).ready(function() {
    getShows('apple');
    $('#search-form').on('submit', function(evt) {
        evt.preventDefault();
        console.log(evt.target.search.value); // you could do this with jquery $('#search-input').val()
        $('#shows').empty();
        getShows(evt.target.search.value);
    })
})


