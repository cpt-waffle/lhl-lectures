console.log("Line 1: app.js")

const dummyObject = {
    "score": 0.6695927,
    "show": {
        "id": 3220,
        "url": "https://www.tvmaze.com/shows/3220/masterchef-canada",
        "name": "MasterChef Canada",
        "type": "Reality",
        "language": "English",
        "genres": ["Food"],
        "status": "Running",
        "runtime": 60,
        "averageRuntime": 60,
        "premiered": "2014-01-20",
        "officialSite": "https://www.ctv.ca/shows/masterchef-canada",
        "schedule": {
            "time": "21:00",
            "days": ["Thursday"]
        },
        "rating": {
            "average": 8.3
        },
        "weight": 90,
        "network": {
            "id": 48,
            "name": "CTV",
            "country": {
                "name": "Canada",
                "code": "CA",
                "timezone": "America/Halifax"
            }
        },
        "webChannel": null,
        "dvdCountry": null,
        "externals": {
        "tvrage": 40156,
        "thetvdb": 273761,
        "imdb": "tt3219166"
        },
        "image": {
            "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/206/515188.jpg",
            "original": "https://static.tvmaze.com/uploads/images/original_untouched/206/515188.jpg"
        },
        "summary": "<p>One year after its smash-hit debut on CTV, <b>MasterChef Canada</b> is back to dish out a second helping of food-driven drama and excitement. The ultimate culinary competition offers home cooks a once-in-a-lifetime opportunity to demonstrate their skill and passion, as they compete for $100,000 and the title of Canada's next <i>MasterChef</i>.</p>",
        "updated": 1620071773,
        "_links": {
            "self": {
            "href": "https://api.tvmaze.com/shows/3220"
            },
            "previousepisode": {
            "href": "https://api.tvmaze.com/episodes/2083304"
            }
        }
    }   
}


const searchApi = function(string) {
    const url = `http://api.tvmaze.com/search/shows?q=${string}`;
    // $.ajax({url: url, success: (data) => {
    //     console.log("it finished!")
    //     console.log(data);
    // }})
    $('#shows').empty()//
    $.ajax({ url: url}).then((data) => {
        console.log('it finished!');
        console.log(data);
        for (let item of data) {
            createShowItem(item);
        }
    })
}

const createShowItem = function(item) {
    const defaultImg = 'https://pbs.twimg.com/profile_images/946816739752464385/EGmXd7wt.jpg';
    const img = item.show.image ? item.show.image.original : defaultImg;
    
    console.log("item!!!!", item)
    const showItem = `
    <div class="show">
        <div>
            <h3>${item.show.name}</h3>
            <img class="show--img" src="${img}"/>
            <h3>${item.show.rating.average}</h3>
            <span>${item.show.genres}</span>
        </div>
        <div>
            <p class="show--summary">
                ${item.show.summary}
            </p>
        </div>
    </div>
    `
    $('#shows').append(showItem);
}

$( document ).ready(function() {
    // createShowItem(dummyObject);
    $('#searchForm').on('submit', (evt) => {
        evt.preventDefault();
        const userInput = $('#search-field').val();
        searchApi(userInput);
    })
});