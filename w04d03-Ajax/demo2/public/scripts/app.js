// I need to figure out a way to send a request to the API
  // JQUERY
  // GET  /tweets
  // POST /tweets
const dummyShowObject = {
    "score": 0.6971376,
    "show": {
        "id": 44579,
        "url": "https://www.tvmaze.com/shows/44579/top-dog",
        "name": "Top Dog",
        "type": "Scripted",
        "language": "Swedish",
        "genres": [
            "Drama",
            "Crime",
            "Thriller"
        ],
        "status": "To Be Determined",
        "runtime": 45,
        "averageRuntime": 45,
        "premiered": "2020-10-07",
        "ended": null,
        "officialSite": "https://www.cmore.se/serie/148290-top-dog",
        "schedule": {
            "time": "21:00",
            "days": ["Wednesday"]
        },
        "rating": {
            "average": null
        },
        "weight": 44,
        "network": {
        "id": 1367,
        "name": "C More",
        "country": {
            "name": "Sweden",
            "code": "SE",
            "timezone": "Europe/Stockholm"
        }
        },
        "webChannel": {
            "id": 170,
            "name": "C More",
            "country": {
                "name": "Sweden",
                "code": "SE",
                "timezone": "Europe/Stockholm"
            }
        },
        "dvdCountry": null,
        "externals": {
            "tvrage": null,
            "thetvdb": 377684,
            "imdb": "tt11542694"
        },
        "image": {
        "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/276/691903.jpg",
        "original": "https://static.tvmaze.com/uploads/images/original_untouched/276/691903.jpg"
        },
        "summary": "<p><b>Top Dog</b> centres on the clash between ambitious business lawyer Emily Jansson and the ex-crook Teddy Maksumic. A mysterious disappearance brings together two completely different worlds, and an extremely ill-matched couple - lawyer Emily and the conditionally released Teddy. The two are at loggerheads. She wants up. He wants out. She wants to secure her future; he wants to leave his old life behind. The pair are forced to rethink when they end up in a tricky situation where the past catches up, where future dreams are shattered, and where nothing is what it seems.</p>",
        "updated": 1606764898,
        "_links": {
            "self": {
            "href": "https://api.tvmaze.com/shows/44579"
            },
            "previousepisode": {
                "href": "https://api.tvmaze.com/episodes/1956412"
            }
        }
    }
}

const defaultImg = "https://i.pinimg.com/originals/1d/e8/b3/1de8b334143659ea628a7ee620d2f6ab.jpg"

const addMovie = (movieObj) => {
    let img = defaultImg;

    if (movieObj.show.image) {
        img = movieObj.show.image.medium;
    }

    $('.movies').append(`
    <div class="movie">
        <img class="movie--img" src="${img}"/>
        <div class="movie--desc">
            <h1>${movieObj.show.name}</h1>
            <h2>${movieObj.score}</h2>
            <h3>${movieObj.show.genres}</h3>
            <h4>${movieObj.show.language}</h4>
            <h5>${movieObj.show.premiered}</h5>
        </div>
        <p class="movie--summary">
        ${movieObj.show.summary}
        </p>
    </div>
    `);
}

// we wannna see
// rating
// title
// genres
// image
// country
// language
// premiered

// form ----> event listner ------->  preventDefault

// evt.target.movieName
/////////////////////////////////////////////////////////////////////
// serialize the value 
// const val = $(evt.target.movieName).serialize();
//
// $.post('/tweets/', val).then(() => {

// })

////////////////////////////////////////////////////////////////////

$(() => {
    let tvMazeApiURL = 'https://api.tvmaze.com/search/shows?q=';
    /// EVENT LISTNER FOR FORM TO CONTROL THE SEARCH OPTION
    // add this inside of document.on.ready because just like append()
    // you can only attach an event listener to a loaded HTML tag
    $('#search').on('submit', (evt) => {
        evt.preventDefault();
        const val = $(evt.target.movieName).serialize();
        console.log("VAL--->", val);
        console.log(evt.target.movieName.value);
        $('.movies').empty();
        $.get(tvMazeApiURL + evt.target.movieName.value).then(data => {
            console.log("what happened?");
            console.log(data);
            for (movie of data) {
              addMovie(movie);
            }
          })
    })
});








// HOW do I, add an item FROM app.js to an index.html file ?

  let tvMazeApiURL = 'https://api.tvmaze.com/search/shows?q=dog';
//   $.get(tvMazeApiURL).then(data => {
//       console.log("what happened?");
//       console.log(data);
//   })


// I need to see what sort of data object/array im working with

// I need to build a layout for these data object(s)

// Styling :) 

