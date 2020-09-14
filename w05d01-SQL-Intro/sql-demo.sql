-- Show all the users that are stored in the database
SELECT *
FROM users;

-- Show only the emails of all the users that are currently stored in the database.
SELECT email
FROM users;

-- Show URLS that belong to Rick Sandc hez
SELECT *
FROM urls
WHERE user_id = 1;

-- Show only favorited URLS that belong to Rick Sandchez
SELECT *
FROM urls
WHERE user_id = 1 AND favorite = true;

-- Show all urls that end with '.ca'
SELECT * 
FROM urls 
WHERE long_url LIKE 'www.a%.ca';

-- Show all long urls, with the email registered for those long urls, for user number 2
SELECT long_url, email, users.id AS users, urls.id
FROM urls
JOIN users ON
urls.user_id = users.id
WHERE user_id = 2;

-- How many users do we have??
SELECT COUNT(*) FROM users;

-- How many urls does user 4 have?
SELECT COUNT(*) FROM urls WHERE user_id = 4;


-- How many urls does each user have?
SELECT users.id, email, COUNT(long_url) FROM users
LEFT JOIN urls ON users.id = urls.user_id
GROUP BY users.id, email;

-- Only show users with more than 3 ( 3 inclusive ) urls
SELECT users.id, email, COUNT(long_url) FROM users
LEFT JOIN urls ON users.id = urls.user_id
GROUP BY users.id, email
HAVING COUNT(long_url) > 2;


-- Show me total number of favorited urls, total number of regular urls, for each user email

SELECT users.email,
  (SELECT COUNT(*) FROM urls WHERE favorite = true AND urls.user_id = users.id) as "fav",
  (SELECT COUNT(*) FROM urls WHERE favorite = false AND urls.user_id = users.id) as "reg"
FROM users;



