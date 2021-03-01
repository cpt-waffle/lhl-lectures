-- Show all the users that are stored in the database
SELECT * FROM users;

-- Show only the emails of all the users that are currently stored in the database.
SELECT email FROM users;

-- show users that are between ids 2 - 4
SELECT * FROM users
WHERE
id BETWEEN 2 AND 4;

-- Show URLS that belong to Rick Sandchez
SELECT * FROM users
WHERE id = 1;

-- Show only favorited URLS that belong to Rick Sandchez
SELECT * FROM urls
WHERE user_id = 1;

-- Show all urls that end with '.ca'
SELECT * FROM urls
WHERE long_url LIKE '%.ca';

-- Show all urls that end with '.ca' AND start with letter a
SELECT * FROM urls
WHERE long_url LIKE 'www.a%.ca';

-- Show all long urls, with the email registered for those long urls, (BONUS: for user number 2)
-- JOIN
SELECT email, long_url FROM users
JOIN urls ON users.id = urls.user_id;

-- How many users do we have??
SELECT COUNT(*) FROM users;

-- How many urls does user 4 have?
SELECT COUNT(*) FROM urls where user_id = 4;

-- How many urls does each user have? Display email and number of urls
SELECT email, COUNT(long_url) FROM users
LEFT JOIN urls ON users.id = urls.user_id
GROUP BY email;

-- Only show users with more than 3 ( 3 inclusive ) urls

SELECT id, email, COUNT(long_url) FROM users
LEFT JOIN urls ON users.id = urls.user_id
GROUP BY email, users.id
HAVING COUNT(long_url) > 2
ORDER BY USERS.id
LIMIT 3;