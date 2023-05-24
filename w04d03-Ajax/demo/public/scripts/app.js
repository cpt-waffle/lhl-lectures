const PI = 3.14;

const hello = () => {
  console.log("hello!");
  return 3;
}

const addMovie = (movie) => {
  let image = 'https://e0.pxfuel.com/wallpapers/312/311/desktop-wallpaper-why-you-must-experience-four-horsemen-at-least-once-in-your-lifetime-four-horsemen-funny-cat-faces-funny-animal-cute-cat-memes.jpg'
  if (movie.show.image) {
    image = movie.show.image.medium;
  }
  $('#movies-list').append(`
    <article class="movie">
      <img
        class="movie--img"
        src="${image}"
      />
      <div class="movie--criteria">
        <h2>Rating: ${movie.show.rating.average}</h2>
        <h1>${movie.show.name}</h1>
      </div>
      </ul>
      <p class="movie--description">
      ${movie.show.summary}
      </p>
    </article>
  `);
}

const addMovies = (moviesArr) => {
  for(let movie of moviesArr) {
    addMovie(movie);
  }
}
// $(document).ready(() => { ... })
$(() => {  // GET /TWEETS
  $.get('https://api.tvmaze.com/search/shows?q=dogs', (data) => {
    console.log('data has come back!');
    console.log(data);
    addMovies(data);
  })

  $('#search').on('submit', (evt) => {
    evt.preventDefault();
    // jquery 
    const searchField = $('#search-input').val();
    // POST /TWEETS
    // make an object to sent out in post
    // or serialze() method for the form
    $.get(`https://api.tvmaze.com/search/shows?q=${searchField}`, (data) => {
      console.log('data has come back!');
      console.log(data);
      $('#movies-list').empty();
      addMovies(data);
    })
  });
})


// 1) figure out the layout for every movie thats going to be displayed  [x]
// 1.5) build the layout for the movie [x]
// 2) Embed the layout for a movie, using app.js file and methods [x]
// 2.5) use data from the app.js file, and make movie on the HTML based on that data [x]
// 3) use data that is an array to render multiple movies on the page 
// 3.5 ajax call [x]
// 4) figure out how to load the data on initial refresh [x]
// 5) how to make this work for an event listener when we need to search a different movie 