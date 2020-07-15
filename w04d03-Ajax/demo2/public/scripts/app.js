//show.show.image.medium / original
//show.show.name
//show.show.type
//show.show.summary


const createItem = (data) => {
    const item = `
        <div class="item">
            <img src="${data.show.image ? data.show.image.medium : 'https://i.guim.co.uk/img/media/20098ae982d6b3ba4d70ede3ef9b8f79ab1205ce/0_0_969_1005/master/969.jpg?width=700&quality=85&auto=format&fit=max&s=470657ebd2a0e704df88997d393aea15'}"/>
            <div>
                <h4>${data.show.name}</h4>
                <h5>${data.show.type}</h5>
            </div>
        </div>
    `;

    return item;
}

const searchItem = (string) => {
    const api = 'http://api.tvmaze.com/search/shows?q=';
    const apiWithParam = api + string;
    //GET INFORMATION from an API ( a server with data )
    $.ajax({
        url: apiWithParam,
        method: "GET",
    }).then( (response) => {
        $('#item-container').empty()
        console.log("AJAX call came back with response");
        response.forEach( (element) => {
            if ( element ) {

                console.log(element.show.image);
                let tempItem = createItem(element);
                $('#item-container').append(tempItem);
            }
        })
    }).catch((e) => console.log(e));
    //then once we got the information, we will use the function we built (createItem)
    // to append multiple items we found
}


$(document).ready(function() {
    $('#search').on('submit', (evt) => {
        evt.preventDefault();
        //console.log(evt.target.searchParam.value);
        const searchParameter = evt.target.searchParam.value;
        searchItem(searchParameter);
    })

    console.log("READY!!");

})