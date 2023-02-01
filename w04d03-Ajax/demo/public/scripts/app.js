

const PI = 3.14;

const hello = () => {

}

const appendMovies = (movieArr) => {
  // gets an array of movies/shows
  // loops through them and appends each movie to our HTML page
  for (movieObj of movieArr) {
    appendMovie(movieObj);
  }
}

const appendMovie = (movie) => {
  const image = 'https://i.kym-cdn.com/photos/images/newsfeed/001/394/314/c62.jpg';
  
  let img = image;

  if (movie.show.image) {
    img = movie.show.image.original;
  }
  
  const movieHTML = `
    <article class="movie-container">
    <img 
      class="movie-container-image"
      src="${img}"
    />
    <h2>${movie.show.name}</h2>
    <h2>${movie.show.rating.average ? movie.show.rating.average : 'no yet rated' }</h2>
    <h3>${movie.show.premiered}</h3>
    <p>
      ${movie.show.summary}
    </p>
  </article>
  `
  $('#movies').append(movieHTML);
}


const getMovies = (str) => {
  $.get(`https://api.tvmaze.com/search/shows?q=${str}`, function(data) {
    $('#movies').empty();
    appendMovies(data);
  });
}


// things to put into the document.on.ready
// functions that change DOM elements ( so anyhting on the HTML document)
// event listners

// $('#search').on('hover')

$(() => {
  getMovies('cars');
  $('#search').on('submit', (evt) => {
    evt.preventDefault();
    const str = $('#search-input').val();
    getMovies(str);
  });
})


/// 1) figure out a layout of how our movies are going to look like on the page
//      build this in HTML/css
//  1.5) figure out how to append our Movie container programmatically
//  2) figure out how to append data
//  3) figure out how to do that on load
//  3.5)  from the ajax call to our HTML page
//  4) we want to search the movies ourselves, need figure out how to add a form
// and make custom search string parameters
