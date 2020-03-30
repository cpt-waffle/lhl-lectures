-- SELECT returns particular columns, WHERE returns particular rows 

-- Show all users

SELECT * FROM users;

-- Show all urls

SELECT * FROM urls;

-- Show long url, and short url for all urls

SELECT long_url, short_url FROM urls;

-- select specific user with id = 4

SELECT email, password FROM users WHERE id = 4;


-- find all urls for user 4
--  ONLY SHOW ME THE FAVORITED ONES
SELECT * FROM urls WHERE user_id = 4;

-- show all urls that end with '.ca'

SELECT *
FROM urls
WHERE long_url LIKE '%.ca';

-- users

 id |          email          |  password  
----+-------------------------+------------
  1 | rick.sandchez@gmail.com | picklerick
  2 | lisa.simpson@gmail.com  | ehhhhh
  3 | link@yahoo.com          | hyrule
  4 | simon_bel123@mail.ca    | dracula
  5 | all_might@academia.jp   | plusUltra

id  |          email          |  password  |          long_url           | short_url | favorite 
----+---------+-----------------------------+-----------+----------
  1 | rick.sandchez@gmail.com | picklerick | www.google.ca               | XcD3d     | f
  2 | rick.sandchez@gmail.com | picklerick | www.intergalacticebay.gl    | 3fGvG     | t
  3 | rick.sandchez@gmail.com | picklerick| www.plumbus.gl               |  AAfg6    | t
  4 |       1 | www.fedaration.com          | AcGj4     | f
  5 |       2 | www.torontopubliclibrary.ca | Jc653     | t
  6 |       2 | www.ontario.ca              | WaSD4     | f
  7 |       2 | www.apple.ca                | 4x0Df     | f
  8 |       2 | www.itchyandscratchshow.com | BbCv7     | f
  9 |       3 | www.google.ca               | iX0ff     | f
 10 |       3 | www.reddit.com              | KJfCx     | f
 11 |       3 | www.esl-languages.com       | DxFgg     | f
 12 |       4 | www.vampires.com            | CFG345    | f
 13 |       4 | www.wikipedia.com           | AcGb5     | t
 14 |       4 | www.reddit.com              | RRr5g     | t
 15 |       4 | www.google.com              | B9Cff     | f
 16 |       4 | www.yahoo.ca                | Lp09f     | f
 17 |       4 | www.thepiratebay.au         | Zx099     | t
 18 |       4 | www.history.com             | 98vCd     | f
 19 |       4 | www.amazon.com              | Lj3cc     | f
 20 |       5 | www.heroacademia.jp         | KcF43     | t


 -- how many urls did user number 5 make

 SELECT COUNT(*) FROM urls WHERE user_id = 4;

 SELECT users.id, users.email, COUNT(urls.long_url) as "total urls"
 from users 
 JOIN urls on users.id = urls.user_id
 GROUP BY users.email, users.id ORDER BY "total urls" DESC;