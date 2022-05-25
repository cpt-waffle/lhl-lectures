// Jquery is easier to write...
// Internet Explorer 6-7, Chrome, Firefox, Netscape, Safari,  Opera
// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// Jquery -- you use us, everything will work on all browsers ( 95% true )

// grab data from the server ?


// populate that data onto page
//  [{movies/shows}, {}]
//  decide on the layout
//  on load call the API server
//  get the data 
// append the data with the new layout to DOM so the client can see it 


// (make a form for the user to search the shows themseves TBD)
// ^^^^^^^^^^^^^^^^^^^^^^
const dummyData = [
  {
    "score": 0.7008333,
    "show": {
      "id": 29895,
      "url": "https://www.tvmaze.com/shows/29895/everything-sucks",
      "name": "Everything Sucks!",
      "type": "Scripted",
      "language": "English",
      "genres": [
        "Drama",
        "Comedy"
      ],
      "status": "Ended",
      "runtime": null,
      "averageRuntime": 24,
      "premiered": "2018-02-16",
      "ended": "2018-02-16",
      "officialSite": "https://www.netflix.com/title/80117551",
      "schedule": {
        "time": "",
        "days": []
      },
      "rating": {
        "average": 7.5
      },
      "weight": 94,
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
        "thetvdb": 341282,
        "imdb": "tt7078710"
      },
      "image": {
        "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/142/356594.jpg",
        "original": "https://static.tvmaze.com/uploads/images/original_untouched/142/356594.jpg"
      },
      "summary": "<p>It's 1996 in a town called Boring, where high school misfits in the AV and drama clubs brave the ups and downs of teenage life in the VHS era.</p>",
      "updated": 1648466163,
      "_links": {
        "self": {
          "href": "https://api.tvmaze.com/shows/29895"
        },
        "previousepisode": {
          "href": "https://api.tvmaze.com/episodes/1411922"
        }
      }
    }
  },
  {
    "score": 0.66473985,
    "show": {
      "id": 56901,
      "url": "https://www.tvmaze.com/shows/56901/question-everything",
      "name": "Question Everything",
      "type": "Talk Show",
      "language": "English",
      "genres": [],
      "status": "Ended",
      "runtime": 30,
      "averageRuntime": 30,
      "premiered": "2021-08-18",
      "ended": "2021-10-06",
      "officialSite": "https://iview.abc.net.au/show/question-everything",
      "schedule": {
        "time": "20:30",
        "days": [
          "Wednesday"
        ]
      },
      "rating": {
        "average": null
      },
      "weight": 34,
      "network": {
        "id": 114,
        "name": "ABC",
        "country": {
          "name": "Australia",
          "code": "AU",
          "timezone": "Australia/Sydney"
        },
        "officialSite": null
      },
      "webChannel": null,
      "dvdCountry": null,
      "externals": {
        "tvrage": null,
        "thetvdb": 408625,
        "imdb": null
      },
      "image": {
        "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/349/874390.jpg",
        "original": "https://static.tvmaze.com/uploads/images/original_untouched/349/874390.jpg"
      },
      "summary": "<p>In a world dominated by fake stories, false claims, scams, frauds and outright lies, Question Everything will dissect the news, sort the real from the rumours, separate fact from fiction and flatten conspiracy theories back down to Earth. Helping Jan and Wil question everything each week will be a revolving panel of up-and-coming comedians with the occasional big name thrown in too.</p>",
      "updated": 1642693794,
      "_links": {
        "self": {
          "href": "https://api.tvmaze.com/shows/56901"
        },
        "previousepisode": {
          "href": "https://api.tvmaze.com/episodes/2150145"
        }
      }
    }
  },
]

const addShow = (item) => {
  console.log("SHOW!");
  let img = 'https://i.pinimg.com/originals/59/54/b4/5954b408c66525ad932faa693a647e3f.jpg';
  console.log(item);
  if (item.show.image) {
    img = item.show.image.medium;
  }
  const showTemplate = `
  <div class="show">
  <div class="show--left-col">
    <img class="show--img" src="${img}"/>
    <h1>${item.show.rating.average}</h1>
  </div>

  <div class="show-right-col">
    <h2>${item.show.name}</h2>
    <h2>${item.show.genres}</h2>
    <h3>${item.show.officialSite}</h3>
    <h3>${item.show.premiered}</h3>
    <p class="show--desc">${item.show.summary}</p>
  </div>
</div>`;
$('#shows-list').append(showTemplate);
// How do we append THIS template to our DOM of index.html?
}

const loadShows = (str) => {
  $('#shows-list').empty()
  $.get(`https://api.tvmaze.com/search/shows?q=${str}`, (res) => {
    console.log("callback is running");
    for (let item of res) {
      console.log("LOOPING!");
      addShow(item);
    }
  })
}


$(() => {
  loadShows('everything');
  $('form').on('submit', (evt) => {
    console.log("EVENT TRIGGERED!!");
    console.log(evt.target.show.value);
    loadShows(evt.target.show.value);
    evt.preventDefault();
  })
})


/////////////////////////////////////////////////////////////////////////
// $.get('https://api.tvmaze.com/search/shows?q=everything', (res) => {
//   console.log("callback is running");
//   console.log(res);
// })
/////////////////////////////////////////////////////////////////////////
// const PI = 3.14;