console.log("file is being loaded!!!");

const defaultItems = [{
    score: 16.965609,
    show: {
        id: 1715,
        url: "http://www.tvmaze.com/shows/1715/counting-cars",
        name: "Counting Cars",
        type: "Reality",
        language: "English",
        genres: [ ],
        status: "Running",
        runtime: 60,
        premiered: "2012-08-13",
        officialSite: "http://www.history.com/shows/counting-cars",
        schedule: {
        time: "22:00",
        days: [
            "Wednesday"
        ]
        },
        rating: {
            average: 8.1
        },
        weight: 96,
        network: {
            id: 53,
            name: "History",
            country: {
                name: "United States",
                code: "US",
                timezone: "America/New_York"
            }
        },
        webChannel: null,
        externals: {
            tvrage: 32440,
            thetvdb: 261181,
            imdb: "tt2338096"
        },
        image: {
            medium: "http://static.tvmaze.com/uploads/images/medium_portrait/9/24055.jpg",
            original: "http://static.tvmaze.com/uploads/images/original_untouched/9/24055.jpg"
        },
        summary: "<p>Most people in Las Vegas bet with chips, but Danny 'The Count' Koker bets with cars. Known from his numerous appearances on Pawn Stars, this Sin City legend walks, talks and breathes classic American muscle cars. When he sees a car he wants, he will do whatever it takes to get his hands on it—including making on-the-spot cash offers to unsuspecting owners. On the HISTORY series <b>Counting Cars</b>, Danny and his team restore, customize and sell cars in a hurry, scrambling to keep their Las Vegas shop in the black. From vintage Thunderbirds to classic Corvettes, toy cars to souped-up sidecar motorcycles, Danny and the crew of Count's Kustoms will stop at nothing to find and flip the greatest rides of all time.</p>",
        updated: 1594819913,
        _links: {
            self: {
            href: "http://api.tvmaze.com/shows/1715"
            },
                previousepisode: {
                href: "http://api.tvmaze.com/episodes/1896383"
            }
        }
    }
},{
    score: 16.965609,
    show: {
        id: 1715,
        url: "http://www.tvmaze.com/shows/1715/counting-cars",
        name: "Counting Cars",
        type: "Reality",
        language: "English",
        genres: [ ],
        status: "Running",
        runtime: 60,
        premiered: "2012-08-13",
        officialSite: "http://www.history.com/shows/counting-cars",
        schedule: {
        time: "22:00",
        days: [
            "Wednesday"
        ]
        },
        rating: {
            average: 8.1
        },
        weight: 96,
        network: {
            id: 53,
            name: "History",
            country: {
                name: "United States",
                code: "US",
                timezone: "America/New_York"
            }
        },
        webChannel: null,
        externals: {
            tvrage: 32440,
            thetvdb: 261181,
            imdb: "tt2338096"
        },
        image: {
            medium: "http://static.tvmaze.com/uploads/images/medium_portrait/9/24055.jpg",
            original: "http://static.tvmaze.com/uploads/images/original_untouched/9/24055.jpg"
        },
        summary: "<p>Most people in Las Vegas bet with chips, but Danny 'The Count' Koker bets with cars. Known from his numerous appearances on Pawn Stars, this Sin City legend walks, talks and breathes classic American muscle cars. When he sees a car he wants, he will do whatever it takes to get his hands on it—including making on-the-spot cash offers to unsuspecting owners. On the HISTORY series <b>Counting Cars</b>, Danny and his team restore, customize and sell cars in a hurry, scrambling to keep their Las Vegas shop in the black. From vintage Thunderbirds to classic Corvettes, toy cars to souped-up sidecar motorcycles, Danny and the crew of Count's Kustoms will stop at nothing to find and flip the greatest rides of all time.</p>",
        updated: 1594819913,
        _links: {
            self: {
            href: "http://api.tvmaze.com/shows/1715"
            },
                previousepisode: {
                href: "http://api.tvmaze.com/episodes/1896383"
            }
        }
    }
},{
    score: 16.965609,
    show: {
        id: 1715,
        url: "http://www.tvmaze.com/shows/1715/counting-cars",
        name: "Counting Cars",
        type: "Reality",
        language: "English",
        genres: [ ],
        status: "Running",
        runtime: 60,
        premiered: "2012-08-13",
        officialSite: "http://www.history.com/shows/counting-cars",
        schedule: {
        time: "22:00",
        days: [
            "Wednesday"
        ]
        },
        rating: {
            average: 8.1
        },
        weight: 96,
        network: {
            id: 53,
            name: "History",
            country: {
                name: "United States",
                code: "US",
                timezone: "America/New_York"
            }
        },
        webChannel: null,
        externals: {
            tvrage: 32440,
            thetvdb: 261181,
            imdb: "tt2338096"
        },
        image: {
            medium: "http://static.tvmaze.com/uploads/images/medium_portrait/9/24055.jpg",
            original: "http://static.tvmaze.com/uploads/images/original_untouched/9/24055.jpg"
        },
        summary: "<p>Most people in Las Vegas bet with chips, but Danny 'The Count' Koker bets with cars. Known from his numerous appearances on Pawn Stars, this Sin City legend walks, talks and breathes classic American muscle cars. When he sees a car he wants, he will do whatever it takes to get his hands on it—including making on-the-spot cash offers to unsuspecting owners. On the HISTORY series <b>Counting Cars</b>, Danny and his team restore, customize and sell cars in a hurry, scrambling to keep their Las Vegas shop in the black. From vintage Thunderbirds to classic Corvettes, toy cars to souped-up sidecar motorcycles, Danny and the crew of Count's Kustoms will stop at nothing to find and flip the greatest rides of all time.</p>",
        updated: 1594819913,
        _links: {
            self: {
            href: "http://api.tvmaze.com/shows/1715"
            },
                previousepisode: {
                href: "http://api.tvmaze.com/episodes/1896383"
            }
        }
    }
},
]
    

// Make a function that is able to embbed some html on a page!
const addItem = (object) => {
    // console.log(object);
    const item = `
        <div class="item">
            <img src="${object.show.image.medium}"/>
            <div>
                <h4>${object.show.name}</h4>
                <h4>${object.show.type}</h4>
            </div>
        </div>
    `;
    $('#items').append(item)
}

const addItems = (arr) => {
    for (let iterator of arr) {
        addItem(iterator);
    }

}


$(document).ready(function() {
    $('#search').on('submit', (evt) => {
        $('#items').empty();
        let apiURL = 'http://api.tvmaze.com/search/shows?q=' + evt.target.search.value;

        evt.preventDefault();
        // debugger
        // alert('hello world!!');
        console.log('hey')
        $.ajax({url: apiURL, method: 'GET'}).then((response) => {
            console.log("something came back!!!!!");
            addItems(response);
        })
    })
    // addItems(defaultItems);
    // addItem(defaultItem);
})