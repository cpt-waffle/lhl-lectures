
const getMovies = (str) => {
  $.get(`https://api.tvmaze.com/search/shows?q=${str}`, (data) => {
    addMovies(data);
  })
}

const addMovie = (movieObj) => {
  console.log(movieObj);
  let img = 'https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg';

  if (movieObj.show.image) {
    img = movieObj.show.image.original;
  }

  const layout = `
  <article class="movie">
  <img  
    class="movie--img"
    src="${img}"
    />
  <div class="movie--desc">
    <h1>${movieObj.show.name}</h1>
    <h2>Rating: ${movieObj.show.rating.average}</h2>
    <p>
      ${movieObj.show.summary}
    </p>
  </div>
  </article>
  `;

  $('#movies-container').append(layout);
}

const addMovies = (moviesArr) => {
  for (let movie of moviesArr) {
    addMovie(movie);
  }
}


//document on ready!
$(() => {
  getMovies('cats');


  $('form').on('submit', (evt) => {
    console.log(evt);
    // stop form FROM REFRESHING :(        [x]
    evt.preventDefault();
    // get information from the form       [x]
    //----------------------------> console.log($('form').serialize());
    const str = evt.target.searchString.value;
    console.log(str);
    // search the movies from the api      [x]
    // remove the old search movies/shows  [x]
    $('#movies-container').empty();
    // display new movies/shows            [x]
    getMovies(str);

  });
})


// Make layout of how is a movie and a bunch of movies are going to be displayed on our page [x]
// build the layout in HTML to satisfy our mock [x]
// add the layout programatically [x]
// populate the layout WITH movie data [x]
// use the ajax request to get the movies [x]
// use the response from ajax to display all the movies [x]
