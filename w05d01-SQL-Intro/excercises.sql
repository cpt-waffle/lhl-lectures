-- SHOW all the users are in the database

SELECT *
FROM users;

-- Show only the emails of the users that are stored in the database

SELECT emails
FROM users;

-- SHOW US a user that has and ID number 5

SELECT *
FROM users WHERE id = 5;

-- SHOW US a user with ID 5 AND password is plusUltra

SELECT *
FROM users
WHERE id = 5 AND password = 'plusUltra';

-- Show only the long urls that belong to user_id = 1 AND are favorited

SELECT * FROM urls
WHERE user_id = 1
AND favorite = 't';

-- show all urls that end with .ca ( canadian only )

SELECT * FROM urls
WHERE long_url LIKE '%.ca';

