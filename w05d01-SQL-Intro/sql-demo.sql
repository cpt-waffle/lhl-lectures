-- Show all the users that are stored in the database
SELECT * FROM users;

-- Show only the emails of all the users that are currently stored in the database.
SELECT email FROM users;

-- Show Only the emails of the users but rename the column to "user emails"
SELECT email AS "user emails" FROM users;

-- show users that are between ids 2 - 4
SELECT * FROM users WHERE id >= 2 AND id <= 4;
SELECT * FROM users WHERE id BETWEEN 2 AND 4;

-- Show URLS that belong to Rick Sandchez
SELECT * FROM urls WHERE user_id = 1;

-- Show only favorited URLS that belong to Rick Sandchez
SELECT * FROM urls WHERE user_id = 1 AND favorite = TRUE;

-- Show all urls that end with '.ca'
SELECT * FROM urls WHERE long_url LIKE '%.ca';
-- WILDCARD %

-- Show all urls that end with '.ca' AND start with letter a
SELECT * FROM urls WHERE long_url LIKE 'www.a%.ca';

-- JOINS

-- Show all long urls, with the email registered for those long urls, 
SELECT long_url, email FROM urls JOIN users ON urls.user_id = users.id;

-- How many users do we have??
SELECT COUNT(*) FROM users;

-- How many urls does user 4 have?
SELECT COUNT(*) FROM urls WHERE user_id = 4;

-- How many urls does each user have? Display email and number of urls
SELECT users.id, email, COUNT(long_url) FROM urls RIGHT JOIN users ON urls.user_id = users.id
GROUP BY email, users.id ORDER BY users.id;

-- Only show users with more than 3 ( 3 inclusive ) urls
SELECT users.id, email, COUNT(long_url) FROM urls RIGHT JOIN users ON urls.user_id = users.id
GROUP BY email, users.id HAVING COUNT(long_url) >= 3 ORDER BY users.id;
