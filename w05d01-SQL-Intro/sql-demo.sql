-- Show all the users that are stored in the database
SELECT * FROM users;
-- SELECT _____ <--- column names, FROM _____ <--- table;

-- Show only the emails of all the users that are currently stored in the database.
SELECT id as idenfitication, email as "user email" FROM users;
-- DOUBLE qoutes for row names, single quotes for Statement logic
-- Show URLS that belong to Rick Sandchez
SELECT * FROM urls
WHERE user_id = 1;

-- Show only favorited URLS that belong to Rick Sandchez
SELECT * FROM urls
WHERE user_id = 1 AND favorite = true;

-- Show all urls that end with '.ca'
SELECT * FROM urls
WHERE long_url LIKE  '%.ca'

-- Show all urls that end with '.ca' AND start with letter a
SELECT * FROM urls
WHERE long_url LIKE 'www.a%.ca';

-- Show all long urls, with the email registered for those long urls, for user number 2
SELECT urls.long_url, email FROM users
LEFT JOIN urls ON
urls.user_id = users.id;

-- How many users do we have??
SELECT COUNT(*) FROM users;

-- How many urls does user 4 have?
SELECT COUNT(*) FROM urls WHERE user_id = 4;


-- How many urls does each user have?
SELECT  users.email, COUNT(long_url) FROM users
LEFT JOIN urls ON urls.user_id = users.id
GROUP BY email;

-- Only show users with more than 3 ( 3 inclusive ) urls
SELECT  users.id, users.email, COUNT(long_url) FROM users
LEFT JOIN urls ON urls.user_id = users.id
GROUP BY email, users.id
HAVING COUNT(long_url) > 2;

-- Show me total number of favorited urls, total number of regular urls, for each user email
