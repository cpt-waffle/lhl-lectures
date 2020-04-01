DROP TABLE IF EXISTS students CASCADE;
DROP TABLE IF EXISTS quiz_results CASCADE;
DROP TABLE IF EXISTS quizes CASCADE;

CREATE TABLE quizes (
  id SERIAL PRIMARY KEY NOT NULL,
  total INTEGER,
  quiz_date DATE
);


CREATE TABLE quiz_results (
  id SERIAL PRIMARY KEY NOT NULL,
  mark INT,
  quiz_id INTEGER REFERENCES quizes(id) ON DELETE CASCADE
);

CREATE TABLE students (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  quiz_results_id INTEGER REFERENCES quiz_results(id) ON DELETE CASCADE
);


-- QUIZES

INSERT INTO quizes (id, total, quiz_date) VALUES (1, 42,'2018-02-12T08:00:00.000Z');
INSERT INTO quizes (id, total, quiz_date) VALUES (2, 100,'2018-04-12T08:00:00.000Z');
INSERT INTO quizes (id, total, quiz_date) VALUES (3, 20,'2018-07-12T08:00:00.000Z');
INSERT INTO quizes (id, total, quiz_date) VALUES (4, 10,'2019-01-12T08:00:00.000Z');
INSERT INTO quizes (id, total, quiz_date) VALUES (5, 50,'2019-02-12T08:00:00.000Z');

-- QUIZ RESULTS

INSERT INTO quiz_results (id, mark, quiz_id) VALUES (1, 42, 1);
INSERT INTO quiz_results (id, mark, quiz_id) VALUES (2, 57, 2);
INSERT INTO quiz_results (id, mark, quiz_id) VALUES (3, 20, 3);
INSERT INTO quiz_results (id, mark, quiz_id) VALUES (4,  8, 4);
INSERT INTO quiz_results (id, mark, quiz_id) VALUES (5,  7, 4);

--  STUDENTS

INSERT INTO students (id, name, email, quiz_results_id) VALUES (1, 'Armand Hilll', 'lera_hahn@dickens.org', 1);
INSERT INTO students (id, name, email, quiz_results_id) VALUES (2, 'Stephanie Wolff', 'darius.homenick@tod.ca', 2);
INSERT INTO students (id, name, email, quiz_results_id) VALUES (3, 'Stan Miller', 'mcdermott.maxie@schoen.com', 3);
INSERT INTO students (id, name, email, quiz_results_id) VALUES (4, 'Elliot Dickinson', 'derrick_pollich@gmail.com', 4);
INSERT INTO students (id, name, email, quiz_results_id) VALUES (5, 'Lloyd Boehm', 'ebba.deckow@yahoo.com', 5);
