-- Show all the users that are stored in the database

SELECT *
FROM users;

-- Show only the emails of all the users that are currently stored int he database.
-- How to select a specific column(s) with a SELECT statement

SELECT email
FROM users;

-- Show URLS that belong to Rick Sandchez
-- The WHERE clause allows us to filter results from what is returned:
SELECT *
FROM urls
WHERE user_id = 1;

-- Show only favorited URLS that belong to Rick Sandchez
-- We can tac on more statements with AND and OR to our WHERE clause to have stricter fitering
SELECT *
FROM urls
where user_id = 1
AND favorite = true;

-- Show all urls that end with '.ca'

SELECT *
FROM urls
where long_url LIKE '%.ca';

-- Show the email, long url, and favorite, for the user number 2

SELECT users.email, urls.long_url, urls.favorite
FROM urls
JOIN users ON urls.user_id = users.id
where user_id = 2;

-- How many users do we have??

SELECT count(*)
FROM users;

-- How many urls does user 4 have?

SELECT count(*)
FROM urls
WHERE user_id = 4;

-- How many urls does each user have?

SELECT users.email, count(urls.id)
FROM users
JOIN urls ON users.id = urls.user_id
GROUP BY users.email;

-- Show me total number of favorited urls, total number of regular urls, for each user email

SELECT users.id, users.email,
  (SELECT count(*) FROM urls where favorite = true AND urls.user_id = users.id) as "favorited",
  (SELECT count(*) FROM urls where favorite = false AND urls.user_id = users.id) as "regular"
FROM users
JOIN urls on users.id = urls.user_id
GROUP BY users.email, users.id;