### SQL Intro

#### Lets go back a few weeks...

A few weeks ago, we were making an app called "TinyApp", which let a user register and add new urls to their account. This worked great!!! But it had one big problem... When you shut downed the app, we lose ALL of our DATA!!!.
That means the users that registered, and the new urls entered are gone gone gone!!
##### Well How do we prevent this?

We can just never ever ever turn off the server ( and make sure it never crashes ) - which maybe impossible ( power surges do happen )
##### Or We Can Use a Database

A database is a structured set of data held in a computer, especially one that is accessible in various ways.

You may say:  "Well lets just store all the data into a JSON file and be done with it" but that also poses issues such as:
- when do we re-read data from the file (efficiency)
- when do we write to a file
- How do we make sure data stays consistent ( multi editing  or multi relations )

##### RDBMS (Relational Database Management System) and SQL (Structured  Query Language)

Databases are a service (or another program) that we will be using to store our data. We will be using PostgreSQL but there are definetly others that we quickly discussed during our lecture.

Postgres is an SQL type of database which means we can:
- access multiple records with a single command
- store and organaize our data in tables
- join our data based on some sort of relation(s)

##### Why SQL ()

Structured Query Language (SQL) is used to issue commands to our RBDMS servers. It has two main advantages over other read/write APIs:
1. SQL has the ability to access many records with a single command
2. It also eliminates the need to state how to reach a record.

SQL also has a basis in relational algebra and tuple referential calculus, in other words it's backed by some solid scientific theories.
By 1986, ANSI and ISO standard groups officially adopted the standard "Database Language SQL" language definition. New versions of the standard were published in 1989, 1992, 1996, 1999, 2003, 2006, 2008, 2011, and most recently, 2016.

##### DEMO

In order to work with the examples in this doc, you'll first have to setup the database with our seeded data. This can be done by following these steps:

1. Open a terminal
2. Clone the project
3. Login to your SQL server $ psql
4. Create a database to load the seed into # CREATE DATABASE w5d1;
5. Exit psql # \q
6. Load the seed SQL into the database $ psql -d w5d1 < seed.sql

The first thing you'll notice is each table has an `id` column marked as a `PK`, this is our "Primary Key", in other words, a unique identifier which identifies each row. In this database, all of our `id` values are just sequencially incrementing integers (i.e. 1, 2, 3, 4, 5, 6, ...).

We also have a field marked as a "Foreign Key" in our Tasks table, this is a column which references the `id` column of the `Urls` table.

![Schema](https://raw.githubusercontent.com/vasiliy-klimkin/lhl-lectures/master/w05d01-SQL-Intro/tinyurl-schema.png)

##### Basic `SELECT`

-- Show all the users that are stored in the database


```sql
SELECT *
FROM users;
```

This is the most basic select statement. What we're doing here is asking for all the columns `*` from users.

__Result__

```
 id |          email          |  password
----+-------------------------+------------
  1 | rick.sandchez@gmail.com | picklerick
  2 | lisa.simpson@gmail.com  | ehhhhh
  3 | link@yahoo.com          | hyrule
  4 | simon_bel123@mail.ca    | dracula
  5 | all_might@academia.jp   | plusUltra
```

-- Show only the emails of all the users that are currently stored int he database.

```sql
SELECT email
FROM users;
```

__Result__

```
          email
-------------------------
 rick.sandchez@gmail.com
 lisa.simpson@gmail.com
 link@yahoo.com
 simon_bel123@mail.ca
 all_might@academia.jp

```

#### `WHERE`

The WHERE clause allows us to filter results from what is returned:

-- Show URLS that belong to Rick Sandchez

```sql
SELECT *
FROM urls
WHERE user_id = 1;
```

__Result__

```
 id | user_id |         long_url         | short_url | favorite
----+---------+--------------------------+-----------+----------
  1 |       1 | www.google.ca            | XcD3d     | f
  2 |       1 | www.intergalacticebay.gl | 3fGvG     | t
  3 |       1 | www.plumbus.gl           | AAfg6     | t
  4 |       1 | www.fedaration.com       | AcGj4     | f
```



-- Show only favorited URLS that belong to Rick Sandchez
We can tac on more statements with AND and OR to our WHERE clause to have stricter fitering

```sql
SELECT *
FROM urls
where user_id = 1
AND favorite = true;
```

__Result__

```
 id | user_id |         long_url         | short_url | favorite
----+---------+--------------------------+-----------+----------
  2 |       1 | www.intergalacticebay.gl | 3fGvG     | t
  3 |       1 | www.plumbus.gl           | AAfg6     | t

```

##### `LIKE`

-- Show all urls that end with '.ca'

```sql
SELECT *
FROM urls
where long_url LIKE '%.ca';
```

__Result__

```
 id | user_id |          long_url           | short_url | favorite
----+---------+-----------------------------+-----------+----------
  1 |       1 | www.google.ca               | XcD3d     | f
  5 |       2 | www.torontopubliclibrary.ca | Jc653     | t
  6 |       2 | www.ontario.ca              | WaSD4     | f
  7 |       2 | www.apple.ca                | 4x0Df     | f
  9 |       3 | www.google.ca               | iX0ff     | f
 16 |       4 | www.yahoo.ca                | Lp09f     | f
```

#### `JOIN`

-- Show the email, long url, and favorite, for the user number 2

The important part here is to tell Postgres how to connect the two tables. This is done using the ON `urls_user.id = url.user_id` line.


```sql
SELECT users.email, urls.long_url, urls.favorite
FROM urls
JOIN users ON urls.user_id = users.id
where user_id = 2;
```

__Result__

```
         email          |          long_url           | favorite
------------------------+-----------------------------+----------
 lisa.simpson@gmail.com | www.torontopubliclibrary.ca | t
 lisa.simpson@gmail.com | www.ontario.ca              | f
 lisa.simpson@gmail.com | www.apple.ca                | f
 lisa.simpson@gmail.com | www.itchyandscratchshow.com | f
```

![join cheatsheet](https://cooltechiedotblog.files.wordpress.com/2017/04/capture6.png?w=616)

#### `GROUP BY` Clause and Aggregation

-- How many users do we have??

```sql
SELECT count(*)
FROM users;
```

__Result__

```
 count
-------
     5

```

-- How many urls does user 4 have?

```sql
SELECT count(*)
FROM urls
WHERE user_id = 4;
```

__Result__

```
 count
-------
     8

```

-- How many urls does each user have?

```sql
SELECT users.email, count(urls.id)
FROM users
JOIN urls ON users.id = urls.user_id
GROUP BY users.email;
```

__Result__


```
          email          | count
-------------------------+-------
 lisa.simpson@gmail.com  |     4
 all_might@academia.jp   |     1
 link@yahoo.com          |     3
 rick.sandchez@gmail.com |     4
 simon_bel123@mail.ca    |     8

```

#### `Sub`-Selects

-- Show me total number of favorited urls, total number of regular urls, for each user email

```sql
SELECT users.id, users.email,
  (SELECT count(*) FROM urls where favorite = true AND urls.user_id = users.id) as "favorited",
  (SELECT count(*) FROM urls where favorite = false AND urls.user_id = users.id) as "regular"
FROM users
JOIN urls on users.id = urls.user_id
GROUP BY users.email, users.id;
```

__Result__

```
 id |          email          | favorited | regular
----+-------------------------+-----------+---------
  4 | simon_bel123@mail.ca    |         3 |       5
  2 | lisa.simpson@gmail.com  |         1 |       3
  3 | link@yahoo.com          |         0 |       3
  1 | rick.sandchez@gmail.com |         2 |       2
  5 | all_might@academia.jp   |         1 |       0
```