const dummyMockData = [
  {
    "score": 0.684417,
    "show": {
      "id": 5982,
      "url": "https://www.tvmaze.com/shows/5982/cats-eyes",
      "name": "C.A.T.S. Eyes",
      "type": "Scripted",
      "language": "English",
      "genres": [
        "Drama",
        "Crime"
      ],
      "status": "Ended",
      "runtime": 50,
      "averageRuntime": 50,
      "premiered": "1985-04-12",
      "ended": "1987-06-06",
      "officialSite": null,
      "schedule": {
        "time": "21:00",
        "days": [
          "Saturday"
        ]
      },
      "rating": {
        "average": null
      },
      "weight": 64,
      "network": {
        "id": 35,
        "name": "ITV",
        "country": {
          "name": "United Kingdom",
          "code": "GB",
          "timezone": "Europe/London"
        },
        "officialSite": "https://www.itv.com/"
      },
      "webChannel": null,
      "dvdCountry": null,
      "externals": {
        "tvrage": 2949,
        "thetvdb": 253591,
        "imdb": "tt0149427"
      },
      "image": {
        "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/23/58739.jpg",
        "original": "https://static.tvmaze.com/uploads/images/original_untouched/23/58739.jpg"
      },
      "summary": "<p>An all-female detective agency, the 'Eyes Enquiry Agency', is formed as a front for the Home Office's new security operation, the 'Covert Activities Thames Section' or C.A.T.S. for short. Initially lead by ex-Oxford University President Pru Standfast, she was in charge of the unit that exeprienced ex-cop Maggie Forbes, computer geek Fredrica Smith, and from series two, Tessa Robinson who replaced Pru. Their contact with the Ministry was Nigel Beaumont. Made by Television South (TVS) for the ITV Network. Currently copies exist at ITV Archive, notably Maidstone Studios or at Leeds Archive and Disney own the actual rights through company acquisition although the paperwork is missing.</p>",
      "updated": 1626425100,
      "_links": {
        "self": {
          "href": "https://api.tvmaze.com/shows/5982"
        },
        "previousepisode": {
          "href": "https://api.tvmaze.com/episodes/356188"
        }
      }
    }
  },
  {
    "score": 0.67094594,
    "show": {
      "id": 58020,
      "url": "https://www.tvmaze.com/shows/58020/scaredy-cats",
      "name": "Scaredy Cats",
      "type": "Scripted",
      "language": "English",
      "genres": [
        "Comedy",
        "Family",
        "Fantasy"
      ],
      "status": "To Be Determined",
      "runtime": null,
      "averageRuntime": 28,
      "premiered": "2021-10-01",
      "ended": null,
      "officialSite": "https://www.netflix.com/title/81329721",
      "schedule": {
        "time": "",
        "days": []
      },
      "rating": {
        "average": null
      },
      "weight": 50,
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
        "thetvdb": null,
        "imdb": null
      },
      "image": {
        "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/362/906042.jpg",
        "original": "https://static.tvmaze.com/uploads/images/original_untouched/362/906042.jpg"
      },
      "summary": "<p>A beautiful surprise leads to a paws-itively peculiar adventure for Willa, Lucy, and Scout. Can they handle the mischief - and outwit a talking rat?</p>",
      "updated": 1633267338,
      "_links": {
        "self": {
          "href": "https://api.tvmaze.com/shows/58020"
        },
        "previousepisode": {
          "href": "https://api.tvmaze.com/episodes/2184562"
        }
      }
    }
  },
]



// 1 -- Can we get the data from the server of TV maze to client?
const banana = () => {
  // $.get( "https://api.tvmaze.com/search/shows?q=cats?", function( data ) {
  //   console.log(data)
  // });
  $.get("https://api.tvmaze.com/search/shows?q=cats?").then(data => {
    console.log(data);
  });
}



// 2 -- Mock the data out, and build a way to embed a HTML layout
// FROM app.js to index.html

// 2.1 -- consider our layout 
// 2.2 -- build our layout
// 2.3 -- move the built layout into app.js
const loadShows = (str) => {
  $.get(`https://api.tvmaze.com/search/shows?q=${str}`).then(data => {
    $('#shows').empty()
    addShows(data);
  });
}


const addShows = (arr) => {
  arr.forEach(show => {
    addShow(show)
  })
}


const addShow = (show) => {
  console.log("A SHOW WAS PASSED!");
  console.log(show.show.name);
  const defaultIMG = "https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg?auto=compress&fit=scale&fm=pjpg&h=350&w=700";
  
  const showHTML = `
    <article class="show">
      <img class="show--cover" src="${show.show.image.medium}"/>
      <div class="show--info">
        <h3>${show.show.name}</h3>
        <h3>rating: ${show.score}</h3>
        <h3>genre: ${show.show.genres}</h3>
        <h3>runtime: ${show.show.runtime}</h3>
      </div>
      <p>${show.show.summary}</p>
    </article>
    `;
  $('#shows').append(showHTML);
}

$(document).ready(() => {
  loadShows('cats');
  $('form').on('submit', (evt) => {
    console.log(evt.target.search.value);
    evt.preventDefault();

    loadShows(evt.target.search.value);
  })
})

// IE5, Chrome, Opera, Safari, Netscape, Firefox

// JQUERY --- Use us, and you will have exact same behaviour on all browsers
// 2022     Chrome, MS Edge (Chrome), Opera Gaming (Chrome?) Firefox, Brave (Firefox)
//  


  // 2.4 -- find a way to put it on the page of html


// 3 -- we use the ajax method to grab the data and show all of the shows
// on our page(without refresh)



//4 -- build a search bar to search for shows and show them on the page (without refresh)


//5 -- fix some bugs that may appear