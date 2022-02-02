// Check if the script file is correctly referenced!!
console.log("do I work!?");

//  Steps in building the application


// We are going to check if we can deal with AJAX request (can we get data ?)
// get my API URL
const apiURL = "https://api.tvmaze.com/search/shows?q=";
// try to get the data out using /fetch/jquery ajax
//  WHATEVER you GOOGLE for JQUERY will DIFFER from your classmates
//////////////////////////////////////////////////////////
// $.get(apiURL).then((data) => {
//     console.log("did this work!? 2222");
//     console.log(data);
// })
//////////////////////////////////////////////////////////
// MOCK the information that we got from the server ()
//  some api requests COST MONEY
const mockData = [
    {
        "score": 0.6892167,
        "show": {
            "id": 58020,
            "url": "https://www.tvmaze.com/shows/58020/scaredy-cats",
            "name": "Scaredy Cats",
            "type": "Scripted",
            "language": "English",
            "genres": ["Comedy", "Family", "Fantasy"],
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
            "weight": 79,
            "network": null,
            "webChannel": {
                "id": 1,
                "name": "Netflix",
                "country": null
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
    {
        "score": 0.6892167,
        "show": {
            "id": 58020,
            "url": "https://www.tvmaze.com/shows/58020/scaredy-cats",
            "name": "Scaredy Cats",
            "type": "Scripted",
            "language": "English",
            "genres": ["Comedy", "Family", "Fantasy"],
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
            "weight": 79,
            "network": null,
            "webChannel": {
                "id": 1,
                "name": "Netflix",
                "country": null
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
//  if we over do our requests, we will have to pay for it...
// DISPLAY the mock information on our web page
//   |---->>> Layout


const appendMovie = (movie) => {
    console.log(movie);
    const defaultIMG = 'https://i.kym-cdn.com/photos/images/newsfeed/001/394/314/c62.jpg';
    const layout = `
    <div class="movie">
    <img 
        class="movie--img"
        src="${movie.show.image.medium}" 
    />
    <div class="movie--info">
        <h2>${movie.show.name}</h2>
        <h3>${movie.show.genres}</h3>
        <h3>${movie.show.premiered}</h3>
        <p>${movie.show.summary}</p>
    </div>
    </div>
`;
    $('#movies').append(layout);
}

const appendMulitpleMovies = (movieArr) => {
    for (let movie of movieArr) {
        appendMovie(movie);
    }
}

// DOCUMENT ON READY SAME THING
$(() => {
    // REPLACE the MOCK information on our web page
    // $.get(apiURL).then((data) => {
    //     console.log("did this work!? 2222");
    //     console.log(data);
    //     appendMulitpleMovies(data);
    // })
    // when adding an event listener, ALWAYS PUT IN IN THE DOC.on.ready
    $('#movie--search').on('submit', (evt) => {
        evt.preventDefault();
        $('#movies').empty();
        const name = evt.target.searchParam.value;
        // POST METHOD
        ////////////////////////////////////////////
        const param = $('#movie--search').serialize();
        $.post('/tweets', param).then(() => {

        })





        //////////////////////////////////////////////////
        // /tweets POST <---- SAVE A TWEET to the "database"
        //  GET METHOD

        console.log(name);
        const searchURL = apiURL + name;
        console.log(searchURL);
        $.get(searchURL).then((data) => {
            console.log(data);
            appendMulitpleMovies();
        })
        console.log(param);
        // get the text from the input field..
        // append it to my API URL
        // get the new data 
        // and append the data to the website
        console.log("HELLO WORLD!");
    })
});





// a better "dynamic" way of building this web page
