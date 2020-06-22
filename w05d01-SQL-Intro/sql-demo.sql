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
WHERE user_id = 1 AND favorite = true;

-- Show all urls that end with '.ca'
SELECT *
FROM urls
WHERE long_url LIKE '%.ca';

-- Show the email, long url, and favorite, for the user number 2
-- Show all long urls, with the email registered for those long urls, for user number 2
SELECT users.id, email, long_url
FROM users
  LEFT JOIN urls ON urls.user_id = users.id
WHERE users.id = 2;

-- How many users do we have??

SELECT COUNT(*)
FROM users;

-- How many urls does user 4 have?
SELECT COUNT(*)
FROM urls
WHERE user_id = 4;


-- How many urls does each user have?
SELECT users.id, email, COUNT(long_url)
FROM users
  LEFT JOIN urls ON users.id = urls.user_id
GROUP BY email, users.id;

-- Only show users with more than 3 urls
SELECT users.id, email, COUNT(long_url)
FROM users
  LEFT JOIN urls ON users.id = urls.user_id
GROUP BY email, users.id
HAVING COUNT(long_url) >= 2;

-- Show me total number of favorited urls, total number of regular urls, for each user email

SELECT users.email,
  (SELECT count(*)
  FROM urls
  WHERE favorite = true AND urls.user_id = users.id) as "fav",
  (SELECT count(*)
  FROM urls
  WHERE favorite = false AND urls.user_id = users.id) as "reg"
FROM users
GROUP BY users.email, users.id;

