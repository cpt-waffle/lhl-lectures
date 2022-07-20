console.log("hello world");

const PI = 3.14;
const hello = () => {
  console.log("Hello from APP.js LINE 5.")
}

// How the heck am i going to get data from our TV MAZE API to our website!!
const getShows = () => {
  $.get('https://api.tvmaze.com/search/shows?q=cars', (data) => {
    console.log("data", data);
  })
}


const appendMovie = movie => {
  const defaultPic = "https://static.wikia.nocookie.net/1f6531b7-9d8b-4015-b0e5-a789ba30bd58";
  console.log(movie.show.name);
  const movieTemplate = `
  <div class="movie">
  <img  class="movie--img" src="${movie.show.image.original}"/>
  <div class="movie--info">
    <h2>${movie.show.name}</h2>
    <h3>Rating: ${movie.score}</h3>
    ${movie.show.summary}
  </div>
  </div>
`;

  $( "#movies" ).append(movieTemplate);
}

const appendMovies = moviesArr => {
  // for (let movie of moviesArr) {
  //   appendMovie(movie);
  // }

  moviesArr.forEach((movie) => {
    appendMovie(movie);
  })
}

// GET /TWEETS
// POST /TWEETS
// remove all the tweets from your HTML page
// and re-add em by using GET /TWEETS

$(() => {
  $('#search-form').on('submit', (evt) => {
    evt.preventDefault();
    $.get(`https://api.tvmaze.com/search/shows?q=${evt.target.search.value}`, (data) => {
      console.log("data", data);
      $('#movies').empty();
      appendMovies(data);
    })
  })
})


// We got information, how do we 

// create a layout to display this information?
// how do we append this information to the page?
// how do load more of this information to this page?
// how do we make it more user interactive?