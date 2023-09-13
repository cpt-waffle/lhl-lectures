const fakeSimulation = [
  {
    "score": 0.8710295,
    "show": {
      "id": 39407,
      "url": "https://www.tvmaze.com/shows/39407/dogs",
      "name": "Dogs",
      "type": "Documentary",
      "language": "English",
      "genres": [],
      "status": "To Be Determined",
      "runtime": null,
      "averageRuntime": 51,
      "premiered": "2018-11-16",
      "ended": null,
      "officialSite": "https://www.netflix.com/title/80191036",
      "schedule": {
        "time": "",
        "days": []
      },
      "rating": {
        "average": null
      },
      "weight": 49,
      "network": null,
      "webChannel": {
        "id": 1,
        "name": "Netflix",
        "country": null,
        "officialSite": "https://www.netflix.com/"
      },
      "dvdCountry": null,
      "externals": {
        "tvrage": null,
        "thetvdb": 354772,
        "imdb": "tt9199798"
      },
      "image": {
        "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/173/433043.jpg",
        "original": "https://static.tvmaze.com/uploads/images/original_untouched/173/433043.jpg"
      },
      "summary": "<p><b>Dogs</b> tracks six incredible stories from across the globe including Syria, Japan, Costa Rica, Italy and the US—each proving that the unconditional love one feels for their dog is a beautiful universal truth.</p>",
      "updated": 1625643368,
      "_links": {
        "self": {
          "href": "https://api.tvmaze.com/shows/39407"
        },
        "previousepisode": {
          "href": "https://api.tvmaze.com/episodes/2126086"
        }
      }
    }
  },
  {
    "score": 0.7020725,
    "show": {
      "id": 44909,
      "url": "https://www.tvmaze.com/shows/44909/reservation-dogs",
      "name": "Reservation Dogs",
      "type": "Scripted",
      "language": "English",
      "genres": [
        "Drama",
        "Comedy"
      ],
      "status": "Running",
      "runtime": null,
      "averageRuntime": 27,
      "premiered": "2021-08-09",
      "ended": null,
      "officialSite": "https://www.hulu.com/series/reservation-dogs-5a310c23-e2db-4c9f-a66c-27c2fee43d92",
      "schedule": {
        "time": "",
        "days": [
          "Wednesday"
        ]
      },
      "rating": {
        "average": 6.8
      },
      "weight": 99,
      "network": null,
      "webChannel": {
        "id": 2,
        "name": "Hulu",
        "country": {
          "name": "United States",
          "code": "US",
          "timezone": "America/New_York"
        },
        "officialSite": "https://www.hulu.com/"
      },
      "dvdCountry": null,
      "externals": {
        "tvrage": null,
        "thetvdb": 371884,
        "imdb": "tt13623580"
      },
      "image": {
        "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/475/1189118.jpg",
        "original": "https://static.tvmaze.com/uploads/images/original_untouched/475/1189118.jpg"
      },
      "summary": "<p><b>Reservation Dogs</b> follows four Native teenagers in rural Oklahoma who spend their days committing crime... and fighting it.</p>",
      "updated": 1694608983,
      "_links": {
        "self": {
          "href": "https://api.tvmaze.com/shows/44909"
        },
        "previousepisode": {
          "href": "https://api.tvmaze.com/episodes/2617820"
        },
        "nextepisode": {
          "href": "https://api.tvmaze.com/episodes/2625366"
        }
      }
    }
  },
  {
    "score": 0.6999167,
    "show": {
      "id": 61233,
      "url": "https://www.tvmaze.com/shows/61233/rain-dogs",
      "name": "Rain Dogs",
      "type": "Scripted",
      "language": "English",
      "genres": [
        "Drama",
        "Comedy"
      ],
      "status": "To Be Determined",
      "runtime": 30,
      "averageRuntime": 30,
      "premiered": "2023-03-06",
      "ended": null,
      "officialSite": "https://www.hbo.com/rain-dogs",
      "schedule": {
        "time": "22:00",
        "days": [
          "Monday"
        ]
      },
      "rating": {
        "average": 5.9
      },
      "weight": 88,
      "network": {
        "id": 8,
        "name": "HBO",
        "country": {
          "name": "United States",
          "code": "US",
          "timezone": "America/New_York"
        },
        "officialSite": "https://www.hbo.com/"
      },
      "webChannel": null,
      "dvdCountry": null,
      "externals": {
        "tvrage": null,
        "thetvdb": 418163,
        "imdb": "tt19050000"
      },
      "image": {
        "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/450/1126192.jpg",
        "original": "https://static.tvmaze.com/uploads/images/original_untouched/450/1126192.jpg"
      },
      "summary": "<p><b>Rain Dogs</b> is a wild and punky tale of a mother's love for her daughter, of deep-rooted and passionate friendships, and of brilliance thwarted by poverty and prejudice.</p>",
      "updated": 1682395225,
      "_links": {
        "self": {
          "href": "https://api.tvmaze.com/shows/61233"
        },
        "previousepisode": {
          "href": "https://api.tvmaze.com/episodes/2501333"
        }
      }
    }
  },
]




// $.get('https://api.tvmaze.com/search/shows?q=dogs', (data) => console.log(data));

const PI = 3.14;
// [x] make layouts for shows 
// [x] once the layout is built, try to display it using the js file
const addShow = show => {
  const defaultImg = 'https://e0.pxfuel.com/wallpapers/312/311/desktop-wallpaper-why-you-must-experience-four-horsemen-at-least-once-in-your-lifetime-four-horsemen-funny-cat-faces-funny-animal-cute-cat-memes-thumbnail.jpg';

  $('#shows').append(`
  <article class="show">
    <img 
      src="${show.show.image.original}"
      class="show--img"
    />
    <div class="show--desc">
      <h1>${show.show.name}</h1>
      <h2>Rating: ${show.show.rating.average}</h2>
      <h3>${show.show.genres}</h3>
      <h4>${show.show.premiered}</h4>
      <p>${show.show.summary}</p>
    </div>
  </article>
  `);
}

// [x] display multiple shows with different information ( pass information )
const addShows = showsArr => {
  for (let show of showsArr) {
    addShow(show);
  }
}


// [x] use AJAX to get the data from the tvmaze server and then populate the shows on the page
const getShows = (str) => {
  $.get(`https://api.tvmaze.com/search/shows?q=${str}`, (data) => {
    addShows(data);
  });
}


$(() => {
  getShows('cats');
  $('#search-form').on('submit', (evt) => {
    evt.preventDefault();
    console.log(evt.target.str.value);
    $('#shows').empty();
    getShows(evt.target.str.value);
  });
});


// getShows();

// tweeter app
// localhost:8080/tweets
