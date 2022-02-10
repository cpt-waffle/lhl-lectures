### How to Manually Create a A NodeJS backend 

This step by step guide is to help you configure ExpressJS API server.


### Setting up Repo

Make a folder that will be your project name and `cd` into it wit the following commands.

```sh
mkdir __project_name__  # your project name
cd __project_name__     # your project name
```

We will start by initiating `git init` so that we can keep track of our changes.

In the project folder run the command:

```sh
# while inside __project_name__
git init
```

We will make a folder called `server` in this folder by running:

```sh
# while inside __project_name__
mkdir server
```

Your folder should look like the screenshot: 

## 1-folders


### Setting up Express

cd into the `server` and run `npm init --yes` no initialize a `package.json`

We will then create `.gitignore` and make sure that it does not track `node_modules`

Run the following command:

```sh
touch .gitignore
```

Open this file in your `editor` and add the following line of code:

```
node_modules/
```

We will install the following packages:

 - express
 - morgan
 - body-parser
 - nodemon

 in your `terminal` inside of your `server` folder run the following command:

```sh
npm i express morgan body-parser
npm i -D nodemon
```

## 2-installed-packges.gif

Now lets make a file, called `app.js`: 

## 3-appjs-and-folders.png

We will add some code to make sure everything works for a rudementary server.


```js
//  ---------------------------- server/app.js
// declarations
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const PORT = 8080;
const enviroment = 'dev';

const app = express();

// middleware setup
app.use(morgan(enviroment));
app.use(bodyParser.json());


app.get('/', (req, res) => {
	res.json({greetings: 'hello world'});
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
```

Try running the server with `node app.js` and see if you can visit the home page.

## 4-server-first-boot.png

### Refactoring -- ENV Variables

Although this is enough to get a server running, we will make it in a cleaner and more efficient way 
of managing routes and variables.

we will now `npm install` a package called `dotenv` to keep track of our preset enviroment variables.

https://www.npmjs.com/package/dotenv

Install `dotenv` with command:

```
npm i dotenv
```

Make `two` file inside of your folder server called `.env` and `.env.example`.
Add `.env` to be ignored by your `.gitignore` BUT DO NOT DO THE SAME FOR `.env.example`. The example file will be there, 
to act as guideline of what variables you will need to get the server to run.

`.gitignore` should look like this:

```
node_modules/
.env
```

Inside your `.env` AND `env.example` add the appropriate variables that will be set, and changed for other stages of development.

`.env` AND `env.example` should look like this:


```
ENVIROMENT='dev'
PORT=8080
```

We will now remove the lines from `app.js` that we hardcoded to use the env. 

```js
// declarations
require('dotenv').config()
const {ENVIROMENT, PORT} = process.env;
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

// middleware setup
app.use(morgan(ENVIROMENT));
app.use(bodyParser.json());


app.get('/', (req, res) => {
	res.json({greetings: 'hello world'});
})

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
```
App JS should look like:

## 5-env-setup1-app.js.png

And .env:

## 5.1-env-setu-env2.png

### Refactoring -- Multi Routing 

Now we make routes so everything is not in one file. Make a `routes` folder inside of `/server`.

In the `routes/` folder we will make a file called `catsRoutes.js`.

## 6-cat-routes-splitting.png

We will now add add `express.router`, add a basic route, and `module.exports` it so that this can be used 
inside of our `app.js`.

```js
/////////// catsRoutes.js
const router = require('express').Router();

module.exports = () => {
  // all routes will go here 
  router.get('/', (req, res) => {
    const cats = ['Rosey', 'Puma', 'Mr Buttons', 'Aya'];
    res.json(cats);
  });
}
```

Then inside of our `app.js` we will add the `require` and `app.use` so that we tell express whenever someone 
requests any request with `/cats` we will use `catsRoutes` file.

## 7-cats-routes-added.png

restart your server, and try going to `/cats` you should be able to see the `json` array of cats.

### Adding Postgres -- Connection

Now that we are build a basic backend we will add a database connection.

first we will install the `pg` package by running:

```sh
npm i pg
```

Once installation is finished we will make a folder called `configs/`. This folder will have any configurations (such as database connection)

in `/server` folder make `configs/` folder

```sh
mkdir configs
```

Within this folder we will make a file called `db.config.js`

## 8-db-config-js.png

This file will help us connect to our database, so we are able to do
queries.

Next we will add the approriate database `env` variables to both
`.env` and `.env.example`:

```
<!-- .env and/or .env.example should look like this now -->
ENVIROMENT='dev'
PORT=8080
<!-- add these new variables below... -->
DB_HOST=localhost
DB_USER=labber
DB_PASSWORD=labber
DB_DATABASE=final
DB_PORT=5432
```

Now that we have all of this setup, we can add our connection to the `db.config.js` file.

Add this code into `db.config.js`.

```js
// Database connections
const { Pool } = require('pg');

const {DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT} = process.env;

const pool = new Pool({
	user: DB_USER,
	host: DB_HOST,
	password: DB_PASSWORD,
	port: DB_PORT,
	database: DB_DATABASE,
})

pool.connect().then(() => {
	console.log("Database connection established.")
}).catch( e => {
	throw new Error(e);
})

module.exports = pool;
```

We will aslo need to add the code to `app.js` so that it gets 
imported in and we can use the `db` object to do queries.

add this line:

```js
// db connection
const db = require('./configs/db.config');
```
to your `app.js`.

## 9-db-config-js.png

Now try running the application (`node app.js`) and you should see that the database connection has been established. 

## 10-server-db.png

###  Adding Postgres -- Database File structure (Schema and Seeds)

We now need to store files for `schema` and `seeds`. In the `server/` folder, we will make a new folder called `db` and inside of the `db/` folder we make 2 new folders called `seeds` and `schema`.

## 11-migrations-and-seeds.png

We will keep `migrations` files inside of the `schema/` folder.
For example lets make 2 files inside of `schema/`:

#### schema/01_create_users.sql

```sql
-- schema/01_create_users.sql
DROP TABLE IF EXISTS users CASCADE;
-- CREATE USERS
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255)
);
```
#### schema/02_create_urls.sql

```sql
-- schema/02_create_urls.sql
DROP TABLE IF EXISTS users CASCADE;
-- CREATE URLS
CREATE TABLE urls (
  id SERIAL PRIMARY KEY,
  user_id integer REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  long_url character varying(255) NOT NULL,
  short_url character varying(255) NOT NULL,
  favorite boolean NOT NULL DEFAULT false
);
```

__NOTE__: We want the the `drop table` lines for resets.

and for for seeds lets make these 2 files in the `seeds/` folder:

#### seeds/01_users.sql

```sql
-- seeds/01_users.sql
-- users seeds
INSERT INTO users (id, email, password) VALUES (1, 'rick.sandchez@gmail.com', 'picklerick');
INSERT INTO users (id, email, password) VALUES (2, 'lisa.simpson@gmail.com', 'ehhhhh');
INSERT INTO users (id, email, password) VALUES (3, 'link@yahoo.com', 'hyrule');
INSERT INTO users (id, email, password) VALUES (4, 'simon_bel123@mail.ca', 'dracula');
INSERT INTO users (id, email, password) VALUES (5, 'all_might@academia.jp', 'plusUltra');
INSERT INTO users (id, email, password) VALUES (6, 'mario@mushroomkindom.jp', 'plumber79');
```
#### seeds/02_urls.sql

```sql
-- seeds/02_urls.sql
-- Seed Rick
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (1, 1, 'www.google.ca', 'XcD3d', false);
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (2, 1, 'www.intergalacticebay.gl', '3fGvG', true);
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (3, 1, 'www.plumbus.gl', 'AAfg6', true);
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (4, 1, 'www.fedaration.com', 'AcGj4', false);

-- Seed Lisa
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (5, 2, 'www.torontopubliclibrary.ca', 'Jc653', true);
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (6, 2, 'www.ontario.ca', 'WaSD4', false);
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (7, 2, 'www.apple.ca', '4x0Df', false);
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (8, 2, 'www.itchyandscratchshow.com', 'BbCv7', false);

-- Seed Lisa
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (9, 3, 'www.google.ca', 'iX0ff', false);
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (10, 3, 'www.reddit.com', 'KJfCx', false);
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (11, 3, 'www.esl-languages.com', 'DxFgg', false);

-- Seed Simon B
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (12, 4, 'www.vampires.com', 'CFG345', false);
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (13, 4, 'www.wikipedia.com', 'AcGb5', true);
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (14, 4, 'www.reddit.com', 'RRr5g', true);
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (15, 4, 'www.google.com', 'B9Cff', false);
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (16, 4, 'www.yahoo.ca', 'Lp09f', false);
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (17, 4, 'www.thepiratebay.au', 'Zx099', true);
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (18, 4, 'www.history.com', '98vCd', false);
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (19, 4, 'www.amazon.com', 'Lj3cc', false);

-- Seed Almight
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (20, 5, 'www.heroacademia.jp', 'KcF43', true);
```

## 12-migrations-seeds-folder-structure.gif

Keep the migrations and seeds `sequencial` (meaning have the ordered alphabetically). A better way of naming these files with `timestamps`, or even using an `npm` package that help up is with migrations and seeds such as: 

 - https://salsita.github.io/node-pg-migrate/#/

You can research this yourself on how to integrate this if you need it.

###  Adding Postgres -- Having a dbreset script 

__Note__: I personally do not think this is needed, because you can make a `schema.sql` and `seeds.sql`
with all of the files being run using `\i`, an example of this can be shown within this stackoverflow answer:

https://dba.stackexchange.com/questions/3334/source-several-files-at-once-with-psql

But incase you want to have it as an `npm` script (like in `midterm`) then here are the steps:

Make a `scripts/` folder inside of `/server/db/`.

Inside of the `/server/db/scripts/` make a file `resetdb.js`

Add this code to `resetdb.js`:

```js
// -- /server/db/scripts/resetdb.js
// reset your database
require("dotenv").config();
const { Client } = require('pg');
const SCHEMA_PATH = './db/schema';
const SEEDS_PATH = './db/seeds';

const {DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE, DB_PORT} = process.env;
const fs = require("fs").promises;

const connObj = {
	user: DB_USER,
	host: DB_HOST,
	password: DB_PASSWORD,
	port: DB_PORT,
	database: DB_DATABASE,
}

const runMigrations = async db => {

	const migrations = await fs.readdir(SCHEMA_PATH);
	for (migration of migrations) {
		const sql = await fs.readFile(`${SCHEMA_PATH}/${migration}`, 'utf8');
		console.log(`\t Running ${migration}`);
		await db.query(sql);
	}
}

const runSeeds = async db => {
	const seeds = await fs.readdir(SEEDS_PATH);
	for (seed of seeds) {
		const sql = await fs.readFile(`${SEEDS_PATH}/${seed}`, 'utf8');
		console.log(`\t Running ${seed}`);
		await db.query(sql);
	}
}

const resetDB = async () => {
	try {
		console.log("Running DB Reset...");
		console.log("Establishing DB connection: ");
		const client = new Client(connObj);
		await client.connect();
		console.log("connection established!\n");

		console.log("-- Running Migrations --\n");
		await runMigrations(client);
		console.log('\n');
		console.log("-- Running Seeds --\n");
		await runSeeds(client);
		console.log('\n');
		console.log("-- COMPLETED --");
		client.end();
	} catch (e) {
		console.log("ERROR OCCURED:\n", e);
		client.end();
	}
}

resetDB();
```

And finally add at this script to the `package.json` file:

```json
  "db:reset": "node db/scripts/resetdb.js"
```

Final Result should look like this:

## 13-db-reset.gif

### Adding Postgres -- Passing DB into routes

Now that we have data and a `db` connection, we should look into passing it into different
routes so that we can call database queries within them.

Go into `app.js` and pass the `db` object down into `catRoutes())` like this:


```js
// ... app.js top

// routes
app.use('/cats', catsRoutes(db));

// ... app.js bottom
```

Now that we passed `db` into  `catRoutes`, go into `routes/catRoutes.js` and lets make sure we get that parameter, followed by try running a query: 

```js
// -- routes/catRoutes.js
const router = require('express').Router();

module.exports = (db) => {
  // all routes will go here 
  router.get('/', (req, res) => {
    const command = "SELECT * FROM users";
    db.query(command).then(data => {
      res.json(data.rows);
    })
  });

  return router;
}
```

Restart the server and if you go to `/cats` you should be able to see all the users we seeded into the database:


## 14-db-in-routes.gif