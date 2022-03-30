// Figure out if this file is being sent out to the client!
console.log("Do I work!?");
const PI = 3.14;

// Figure out if we have JQUERY inabled on this file!
const greetings = () => console.log("Hello World!");

// we are going to attempt to do a AJAX request to the TVMaze API to get info
const APIURL = 'https://api.tvmaze.com/search/shows?q=';

// VanillaJS ( regular JS)
// JQuery    <--- can do everything that regular js can do on the browser
// GERANTREE that our methods will work on all different browsers, (IE5, Firefox, Chrome, Netscape, Opera, Safari, etc)
// IE5  <--- firefox, rebuild for IE5 so it would work there as well.

// $.get(APIURL, (data) => {
//   console.log('data', data);
// })

// 1 - decide on the layout / design 
// BUILD It DIRECTLY IN THE HTML!
// 2 - build 1 mock up



// 3 - try to build the same mockup in the JS file so it appends 
const createMovieHTML = (data) => {
  // 4 - insert the data into the mockup from an object
  let defaultImg = 'https://i.pinimg.com/originals/59/54/b4/5954b408c66525ad932faa693a647e3f.jpg';
  if (data.show.image?.original) {
    defaultImg = data.show.image.original;
  }
  const movieHTML = `
  <div class="movie">
      <img class="movie--img" src="${defaultImg}"/>
      <div class="movie--content">
        <h1>${data.show.name}</h1>
        <p><span>Type: ${data.show.type}</span> <span>Rating: ${data.show.rating.average}</span></p>
        <a href="${data.show.url}">A LINK</a>
        <p>
          ${data.show.summary}
        </p>
      </div>
    </div>
    `
    $('#movies-list').append(movieHTML);
}


console.log("APPENDING NOW!");

// document on ready 
$(() => {
  // 5 - implement the AJAX call with the mock up


    /// Add an event listerner to form
    $('#movie-search').on('submit', (evt) => {
      evt.preventDefault();
      $('#movies-list').empty()
      // collect what the user has written
      // and send to to the api, and then render the result
      $.get(APIURL+evt.target.search.value).then( data => {
        console.log(' PROMISES data', data);
        // LOOP through the data
        // and for every object, create a movie HTML
        for (let movie of data) {
          createMovieHTML(movie);
        }
    })
  })
})











// tweeter
//  localhost:8080/tweets