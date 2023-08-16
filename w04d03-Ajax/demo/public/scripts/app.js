console.log("hello world");

const PI = 3.14;

const getMovies = (str='boats') => {
  $.get(`https://api.tvmaze.com/search/shows?q=${str}`, data => {
    console.log(data)
    addMovies(data);
  });
}

const addMovie = movieObject => {
  console.log("movie object: ", movieObject);
  let runtime = 'not started';
  let summary = 'no summary given';
  let img = 'https://wompampsupport.azureedge.net/fetchimage?siteId=7575&v=2&jpgQuality=100&width=700&url=https%3A%2F%2Fi.kym-cdn.com%2Fphotos%2Fimages%2Fnewsfeed%2F001%2F394%2F314%2Fc62.jpg'
  if (movieObject.show.runtime) {
    runtime = movieObject.show.runtime;
  }

  if (movieObject.show.summary) {
    summary = movieObject.show.summary;
  }

  if (movieObject.show.image) {
    img = movieObject.show.image.original;
  }
  const movieTemplate = `
  <article class="movie">
    <img 
      src="${img}" 
      class="movie--img"
    />
    <div class="movie--info">
      <h1>${movieObject.show.name}</h1>
      <h2>${runtime}</h2>
      <h3>${movieObject.show.genres}</h3>
      <p>
        ${summary}
      </p>
    </div>
  </article>
  `;

  $('#movies').append(movieTemplate);
}

const addMovies = moviesArr => {
  for (let movie of moviesArr) {
    addMovie(movie);
  }
}


// doc on ready
$(() => {
  getMovies();
  $('#search').on('submit', evt => {
    evt.preventDefault();
    const str = evt.target.movie.value
    console.log($('#movie-str').val());
    $('#movies').empty();
    getMovies(str);
  });
})


// 1) figure out the layout for every movie to be displayed [x]
// 2) build the layout for the movie (put this on HTML )[x]
// 3) use the layout to make the movie appear programatically from app.js [x]
// 4) use the data to pass into the movie layout, so every movie is different [X]
// 5) get the data from the API [x] 
// 6) figure out how to do this on initial load/refresh [x]