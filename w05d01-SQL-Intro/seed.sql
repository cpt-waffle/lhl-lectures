DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS urls CASCADE;

-- CREATE USERS
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255)
);

-- CREATE URLS
CREATE TABLE urls (
    id SERIAL PRIMARY KEY,
    user_id integer REFERENCES users(id) ON DELETE CASCADE NOT NULL,
    long_url character varying(255) NOT NULL,
    short_url character varying(255) NOT NULL,
    favorite boolean NOT NULL DEFAULT false
);

-- users seeds
INSERT INTO users (id, email, password) VALUES (1, 'rick.sandchez@gmail.com', 'picklerick');
INSERT INTO users (id, email, password) VALUES (2, 'lisa.simpson@gmail.com', 'ehhhhh');
INSERT INTO users (id, email, password) VALUES (3, 'link@yahoo.com', 'hyrule');
INSERT INTO users (id, email, password) VALUES (4, 'simon_bel123@mail.ca', 'dracula');
INSERT INTO users (id, email, password) VALUES (5, 'all_might@academia.jp', 'plusUltra');
INSERT INTO users (id, email, password) VALUES (6, 'mario@mushroomkindom.jp', 'plumber79');

-- Seed Rick
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (1, 1, 'www.google.ca', 'XcD3d', false);
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (2, 1, 'www.intergalacticebay.gl', '3fGvG', true);
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (3, 1, 'www.plumbus.gl', 'AAfg6', true);
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (4, 1, 'www.fedaration.com', 'AcGj4', false);

-- Seed Lisa
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (5, 2, 'www.torontopubliclibrary.ca', 'Jc653', true);
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (6, 2, 'www.ontario.ca', 'WaSD4', false);
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (7, 2, 'www.apple.ca', '4x0Df', false);
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (8, 2, 'www.itchyandscratchshow.com', 'BbCv7', false);

-- Seed Lisa
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (9, 3, 'www.google.ca', 'iX0ff', false);
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (10, 3, 'www.reddit.com', 'KJfCx', false);
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (11, 3, 'www.esl-languages.com', 'DxFgg', false);

-- Seed Simon B
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (12, 4, 'www.vampires.com', 'CFG345', false);
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (13, 4, 'www.wikipedia.com', 'AcGb5', true);
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (14, 4, 'www.reddit.com', 'RRr5g', true);
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (15, 4, 'www.google.com', 'B9Cff', false);
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (16, 4, 'www.yahoo.ca', 'Lp09f', false);
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (17, 4, 'www.thepiratebay.au', 'Zx099', true);
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (18, 4, 'www.history.com', '98vCd', false);
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (19, 4, 'www.amazon.com', 'Lj3cc', false);

-- Seed Almight
INSERT INTO urls (id, user_id, long_url, short_url, favorite) VALUES (20, 5, 'www.heroacademia.jp', 'KcF43', true);