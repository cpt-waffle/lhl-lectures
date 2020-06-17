#### AJAX

Ajax is a set of web development techniques using many web technologies on the client side to create asynchronous web applications. With Ajax, web applications can send and retrieve data from a server asynchronously without interfering with the display and behavior of the existing page. - Wikipedia

Sometime ago, Microsoft added a functionality called `XMLHttpRequest` into IE5. The idea was that now you can do requests to a server that would return you data, without making the browser refresh.  At first it used XML data only but later adopted to using other sets of data such as JSON. Now we use a variation of this in `Jquery` called `AJAX`.

`AJAX` is not a programming language. `AJAX` just uses a combination of: A browser built-in XMLHttpRequest object.


Common syntax for ajax

```js
    $.ajax({url: '', method: '', dataType: ""})
```

This is where you specify your parameters. Your URL, what type of METHOD you are doing, and datatype. Once this line runs, it makes a request to the parameters you given. However, `AJAX` are async, by default they return a promise when the opperation is completed.  So our code will look like this:

```js
    $.ajax({url: '', method: '', dataType: ""}).then(function(response) {
        //...
    })
```

POST request reseach ( how to do post) is on you :) 

#### DEMO

We used the shows api from `tv-maze` to get some movies for a search.

 - We first tested out things on our browser, to see if jquery was enabled

 - Then we wrote our first ajax call. Which we then tested out.
 
 - Afterwards we built a form that on submit we would get the typed info. Then we used that typed info in teh request. After request was made we made some helpers to render things on our page.

FORM
```js
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
```

HELPER FUNCTIONS

```js
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
```



