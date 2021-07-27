## API Setup

In yesterdays lecture we talked about what we want to cover for this one. And by popular vote, 
everyone wanted to see how would you compare a NODE api, and a rails api.


### Rails API setup/tutorial

First we will make a rails server with the command `rails new server --api`. Notice the `--api` which
will setup a server with no views.

To play around with some data, we will make a table and add some seeds.

in command line: `rails g model Cat` Which will generate us the model, and migrations.

We will make our migration look like this:

```ruby
  def change
    create_table :cats do |t|
      t.string :name
      t.string :img
      t.timestamps
    end
  end
```

and seeds

```ruby
puts "Creating Cats!"
Cat.destroy_all

Cat.create(name: 'Puma', img: 'https://2static.fjcdn.com/pictures/Derp+cat_9720f6_6005436.jpg')
Cat.create(name: 'Rosy', img: 'https://i.redd.it/6xvh1f7btgl31.jpg')
Cat.create(name: 'Mr Buttons', img: 'https://live.staticflickr.com/1614/25492212465_7ff33b58bb_b.jpg')
Cat.create(name: 'Luna', img: 'https://uploads.dailydot.com/2018/10/olli-the-polite-cat.jpg')
```

We will now generate a controller and route so that we can access the data that we created with a request.

`rails g controller Cats` to generate the `cats_controller`

Afterwards we will go into `config/routes.rb` and add:

```ruby
  resources :cats, only: [:index]
```

Inside of the `cats_controller` we will add some logic:

```ruby
class CatsController < ApplicationController
    def index
        @cats = Cat.all
        render json: @cats
    end
end
```

### Front-end Setup

Now we are going to setup our front-end with `create-react-app`

`npx create-react-app client` which will create us a react template.

Once `client` is built, we are going to install axios, and change the port to be ran on 3001.

in package.json change `"start": "react-scripts start",` command to: `"start": "PORT=3001 react-scripts start",`. This will ensure that app will start running on port `3001`.

Install axios with `npm i axios`.

Now we can start running both apps. Remember to turn on 2 terminals and run:

 - `rails s` for rails server 

 - `npm start` for client


### Cors

We now going to modify our `client`, where we change `App.js` into:

```jsx
import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios'

function App() {
  useEffect(() => {
    // for demo purposes, hardcoded URL
    axios.get('http://localhost:3000/cats').then(res => {
      console.log(res);
    })
  }, [])

  return (
    <div className="App">
      <h1>Cats</h1>
    </div>
  );
}

export default App;
```

Once we save, we will get an error in our console:

```
Access to XMLHttpRequest at 'localhost:3000/cats' from origin 'http://localhost:3001' has been blocked by CORS policy: Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, chrome-untrusted, https.
```

What it means is, backend doesn't want to send any information back to the frontend app because they are on two different ports. It thinks that someone is trying to hijack the front-end and do something malicious. Fortunatly we have fix.

### Rack-cors

We will install a gem called rack-Cors middleware. This will provide our app with support in dealing with CORS. 

add `gem 'rack-cors'` and run `bundle install`. 

once it installed, there should be a file called `config/initializers/cors.rb`. In there there will be given sample code that is commented out.

```ruby
# Rails.application.config.middleware.insert_before 0, Rack::Cors do
#   allow do
#     origins 'example.com'

#     resource '*',
#       headers: :any,
#       methods: [:get, :post, :put, :patch, :delete, :options, :head]
#   end
# end
```

uncomment it out, and change `origins 'example.com` to `origins 'localhost:3001`.

```ruby
Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins 'localhost:3001'

    resource '*',
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head]
  end
end
```

Now your front-end can have access to the data, that is on your rails server. You can use the entire rails app as an `api` while the front-end is whitelisted.

### Node Server

First we have to initialize our folder for the project.

`npm init` 

once we setup `package.json` we will install `express` and `morgan`

- `npm i express`
- `npm i morgan`

we are going to setup a basic server.

```js
const PORT = 3002;
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

const data = [
	{name: 'Waffle', url: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-10/19/16/asset/buzzfeed-prod-web-02/sub-buzz-21568-1539979871-1.jpg'},
	{name: 'Doug', url: 'https://pbs.twimg.com/profile_images/932073327400644609/Sez347VL.jpg'},
	{name: 'Luna', url: 'https://i.pinimg.com/originals/d5/fa/0b/d5fa0b05e00505717d21c532b043f586.jpg'},
	{name: 'MoonMoon', url: 'https://images-cdn.9gag.com/images/thumbnail-facebook/9155182_1388247030.7007_yqylen_n.jpg'},
]

app.get('/dogs', (req, res) => {
  res.json(data);
})


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
```

On the front-end we will add another `useEffect`

```jsx
  useEffect(() => {
    axios.get('http://localhost:3002/dogs').then(res => {
      console.log(res);
    })
  }, [])
```


### Cors

Just like on the rails server, we will have `CORS` error. To fix this we can download a package called `cors` on the `node-server`.

- `npm i cors`

and add to your `node-server`:

```js
const PORT = 3002;
const express = require('express');
const morgan = require('morgan');
const cors = require('cors'); // cors require

const app = express();
app.use(cors()) // CORS middleware useage
app.use(morgan('dev'));

const data = [
	{name: 'Waffle', url: 'https://img.buzzfeed.com/buzzfeed-static/static/2018-10/19/16/asset/buzzfeed-prod-web-02/sub-buzz-21568-1539979871-1.jpg'},
	{name: 'Doug', url: 'https://pbs.twimg.com/profile_images/932073327400644609/Sez347VL.jpg'},
	{name: 'Luna', url: 'https://i.pinimg.com/originals/d5/fa/0b/d5fa0b05e00505717d21c532b043f586.jpg'},
	{name: 'MoonMoon', url: 'https://images-cdn.9gag.com/images/thumbnail-facebook/9155182_1388247030.7007_yqylen_n.jpg'},
]

app.get('/dogs', (req, res) => {
  res.json(data);
})


app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
```

Now we can can access the data from the node server just like we did with the rails one.

```js
  useEffect(() => {
    // demo purposes hardcoded
    axios.get('http://localhost:3002/dogs').then(res => {
      console.log(res);
    })
  }, [])

```