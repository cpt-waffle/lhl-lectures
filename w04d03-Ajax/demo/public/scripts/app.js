let apple = 'apple';

const defaultShow = {
    score: 19.047897,
    show: {
        id: 39407,
        url: "http://www.tvmaze.com/shows/39407/dogs",
        name: "Dogs",
        type: "Documentary",
        language: "English",
        genres: [],
        status: "Running",
        runtime: 50,
        premiered: "2018-11-16",
        officialSite: "https://www.netflix.com/title/80191036",
        schedule: {
            time: "",
            days: [
                "Friday"
            ]
        },
        rating: {
            average: null
        },
        weight: 33,
        network: null,
        webChannel: {
            id: 1,
            name: "Netflix",
            country: null
        },
        externals: {
            tvrage: null,
            thetvdb: null,
            imdb: null
        },
        image: {
            medium: "http://static.tvmaze.com/uploads/images/medium_portrait/173/433043.jpg",
            original: "http://static.tvmaze.com/uploads/images/original_untouched/173/433043.jpg"
        },
        summary: "<p><b>Dogs</b> tracks six incredible stories from across the globe including Syria, Japan, Costa Rica, Italy and the US—each proving that the unconditional love one feels for their dog is a beautiful universal truth.</p>",
        updated: 1570380266,
        _links: {
            self: {
                href: "http://api.tvmaze.com/shows/39407"
            },
            previousepisode: {
                href: "http://api.tvmaze.com/episodes/1555622"
            }
        }
    }
}

const createItem = function(data) {
    console.log("DATA IS INSIDE");
    console.log(data)
    const item = `
    <div class="item">
        <img src="${data.show.image.medium}" />
        <h2>${data.show.name}</h2>
        <h4>${data.show.type}</h4>
    </div>
    `

    return item;
}

const createItems = (arr) => {
    for (let item of arr) {
        $('#results').append(createItem(item));
    }
}


$(document).ready(() => {
    console.log("ready!");
    $('form').on('submit', (evt) => {
        evt.preventDefault();
        // How do I get the value of what i typed INTO my search URL?
        // How do i bundle the data i need to send to the user  ( hint hint serilize? )
        $.ajax({
            url: `http://api.tvmaze.com/search/shows?q=${evt.target.search.value}`,
            method: 'GET',
            dataType: 'JSON'
        }).then(function(response) {
            console.log(response);
            // const item = createItem(response[0])
            $('#results').empty();
            createItems(response);
        })
    })
})