-- Show all the users that are stored in the database
SELECT * FROM users;

-- Show only the emails of all the users that are currently stored in the database.
SELECT email from users;
-- Show Only the emails of the users, but rename the column to "user emails"
SELECT email AS "user emails" FROM users;

-- show users that are between ids 2 - 4
SELECT * FROM users WHERE id BETWEEN 2 AND 4;

-- Show URLS that belong to Rick Sandchez
SELECT * FROM urls WHERE user_id = 1;

-- Show only favorited URLS that belong to Rick Sandchez
SELECT * FROM urls WHERE user_id = 1 AND favorite = true;


-- Show all urls that end with '.ca'
-- % is a wildcard  ---- 
SELECT * FROM urls WHERE long_url LIKE '%.ca';




-- Show all urls that end with '.ca' AND start with letter a
SELECT * FROM urls WHERE long_url LIKE 'www.a%.ca';



-- Show all long urls, with the email registered for those long urls, (BONUS: for user number 2)
-- JOIN
--- long url ,      email
--- www.google.ca   rick.sandchez@gmail.com 
SELECT long_url AS "Long URL", email FROM urls
JOIN users ON urls.user_id = users.id
WHERE users.id = 2;



-- How many users do we have??
SELECT COUNT(*) AS "total users" FROM users;










-- How many urls does user 4 have?
SELECT count(*) FROM urls WHERE user_id = 4;







-- How many urls does each user have? Display email and number of urls
SELECT users.id, email, COUNT(long_url) 
FROM users
LEFT JOIN urls ON urls.user_id = users.id
GROUP BY email, users.id;




-- Only show users with more than 3 ( 3 inclusive ) urls
SELECT users.id, email, COUNT(long_url) 
FROM users
LEFT JOIN urls ON urls.user_id = users.id
GROUP BY email, users.id
HAVING COUNT(long_url) > 2
