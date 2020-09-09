// step one create a function that appends an item to our DOM 

const dummyResult = [{
    score: 17.38446,
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
    weight: 87,
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
    updated: 1599657730,
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
{
    score: 12.992896,
    show: {
    id: 7488,
    url: "http://www.tvmaze.com/shows/7488/chasing-classic-cars",
    name: "Chasing Classic Cars",
    type: "Reality",
    language: "English",
    genres: [ ],
    status: "Running",
    runtime: 60,
    premiered: "2008-06-03",
    officialSite: "https://watch.motortrend.com/tv-shows/chasing-classic-cars/",
    schedule: {
    time: "22:00",
    days: [
    "Tuesday"
    ]
    },
    rating: {
    average: 6.2
    },
    weight: 93,
    network: {
    id: 142,
    name: "MotorTrend",
    country: {
    name: "United States",
    code: "US",
    timezone: "America/New_York"
    }
    },
    webChannel: null,
    externals: {
    tvrage: null,
    thetvdb: 172181,
    imdb: "tt1357604"
    },
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_portrait/205/513169.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/205/513169.jpg"
    },
    summary: "<p>Hosted by renowned collector car archeologist, Wayne Carini, <b>Chasing Classic Cars</b> welcomes viewers into the elite world of high-end car collection, as Wayne finds, buys, restores and sells some of the finest and most unique vehicles ever manufactured. In <i>Chasing Classic Cars</i>, Wayne chases down original one-off cars in secret stashes around the country and meets with some of the hobby's most respected collectors, restorers, and artisans, giving viewers insight into the classic car expert's elite inner circle. Whether he is restoring a vintage ride, or searching for a hidden gem in garages around the world, Wayne's straight-shooting sensibility and passion for everything on wheels makes <i>Chasing Classic Cars</i> a must-see for car lovers everywhere.</p>",
    updated: 1586367134,
    _links: {
    self: {
    href: "http://api.tvmaze.com/shows/7488"
    },
    previousepisode: {
    href: "http://api.tvmaze.com/episodes/1829849"
    }
    }
    }
    },
    {
    score: 11.842384,
    show: {
    id: 40158,
    url: "http://www.tvmaze.com/shows/40158/mystery-cars",
    name: "Mystery Cars",
    type: "Documentary",
    language: "English",
    genres: [ ],
    status: "Ended",
    runtime: 30,
    premiered: null,
    officialSite: null,
    schedule: {
    time: "",
    days: [ ]
    },
    rating: {
    average: null
    },
    weight: 33,
    network: {
    id: 66,
    name: "Discovery Channel",
    country: {
    name: "United States",
    code: "US",
    timezone: "America/New_York"
    }
    },
    webChannel: null,
    externals: {
    tvrage: null,
    thetvdb: 274167,
    imdb: "tt5050676"
    },
    image: {
    medium: "http://static.tvmaze.com/uploads/images/medium_portrait/220/551666.jpg",
    original: "http://static.tvmaze.com/uploads/images/original_untouched/220/551666.jpg"
    },
    summary: "<p>In the 1950's, America had broken free from the shackles of wartime economics. It was walking with the swagger of a Nation that had the world by the tail. Scientists had harnessed nuclear energy. Jetpropelled airplanes were breaking speed records... and the race to space was on! But perhaps more than anything else, one thing melded imagination and consumerism, putting this era in perfect context: The concept car. Unlike satellites, rockets, and jet planes these dream cars were accessible. People flocked to auto shows like GM's Motorama to see the concept cars in their titanium bodied glory. They were snapshots of how America perceived its future. Jaw dropping, unforgettable but what happened then? Most were destroyed. Some just plain vanished. But amazingly, some are still here and new series Mystery Cars is on a mission to find them.</p>",
    updated: 1573326332,
    _links: {
    self: {
    href: "http://api.tvmaze.com/shows/40158"
    }
    }
    }
    },

]



const renderItem = (searchItem) => {
    console.log("render item is running");
    console.log(searchItem);
    let img = '';
    if (searchItem.show.image) {
        img = searchItem.show.image.medium;
    } else {
        img = 'https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg'
    }
    const item = `
        <div class="item">
            <img src="${img}"/>
            <div>
                <h4>${searchItem.show.name}</h4>
                <h5>Score: ${searchItem.score}</h5>
            </div>
        </div>
    `;
    $('#results').append(item);
}

const renderItems = (results) => {
    for (let result of results) {
        renderItem(result);
    }
}


$(document).ready( () => {
    console.log('everything is loaded!');
    // renderItems(dummyResult);

    // $.get('http://api.tvmaze.com/search/shows?q=boats').then( (response) => {
    //     console.log("from the GET shorthand method")
    //     console.log(response);
    // })

    $('form').on('submit', (evt) => {
        evt.preventDefault();
        searchParam = $('#searchParam').val();
        console.log(searchParam);
        $.ajax({url: `http://api.tvmaze.com/search/shows?q=${searchParam}`, method: 'GET'}).then( response => {
            console.log("this is now a promise")
            $('#results').empty();
            renderItems(response);
        }).catch(e => {
            console.log("error has happened!");
            console.log(e);
            $('#results').append('<h1>SOMETHING WENT WRONG!!</h1>');
        })
        // console.log(evt.target.search.value);
    })

})