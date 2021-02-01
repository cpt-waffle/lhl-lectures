-- Show all the users that are stored in the database
SELECT * FROM users;
-- Show only the emails of all the users that are currently stored in the database.
SELECT email FROM users; 


-- DOUBLE qoutes for row names, single quotes for Statement logic

-- show users that are between ids 2 - 4
SELECT * FROM users
WHERE id > 1 AND id <= 4;


-- Show URLS that belong to Rick Sandchez
SELECT * FROM urls
WHERE user_id = 1;

-- Show only favorited URLS that belong to Rick Sandchez
SELECT * FROM urls 
WHERE user_id = 1 AND favorite = true;

-- Show all urls that end with '.ca'

-- DOUBLE QUOTES FOR COLUMN RENAMING
SELECT * FROM urls
WHERE long_url LIKE 'www.g%.c%'; -- SINGLE QUOTES for ARGUMENTS

-- Show all urls that end with '.ca' AND start with letter a
SELECT long_url, 
user_id AS "user identification number"
FROM urls
WHERE long_url LIKE 'www.g%.c%';

-- Show all long urls, with the email registered for those long urls, (BONUS: for user number 2)
-- JOIN
SELECT long_url, email, 
users.id AS "user id", 
urls.id AS "url id" 
FROM urls
JOIN users ON users.id = urls.user_id;

-- How many users do we have??
SELECT COUNT(*) FROM users;

-- How many urls does user 4 have?
SELECT COUNT(*) FROM urls WHERE user_id = 4;

-- How many urls does each user have? Display email and number of urls
SELECT email, COUNT(long_url) AS "number of long urls" FROM users
LEFT JOIN urls ON users.id = urls.user_id
GROUP BY email;

SELECT user_id, COUNT(long_url) AS "number of long urls" FROM urls
GROUP BY user_id;


-- Only show users with more than 3 ( 3 inclusive ) urls
SELECT email, COUNT(long_url) AS "number of long urls" FROM users
LEFT JOIN urls ON users.id = urls.user_id
GROUP BY email
HAVING count(long_url) > 2;

