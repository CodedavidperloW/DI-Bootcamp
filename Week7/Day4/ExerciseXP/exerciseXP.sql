--Day 4 ExerciseXP
--****EXERCISE ONE***
--1
SELECT * FROM language;
--2
SELECT film.title, film.description, language.name AS language_name
FROM film
JOIN language ON film.language_id = language.language_id;
--3
SELECT film.title, film.description, language.name AS language_name
FROM film
LEFT JOIN language ON film.language_id = language.language_id;
--4
CREATE TABLE new_film (
id SERIAL PRIMARY KEY,
	name VARCHAR(50)
);

INSERT into new_film (name)
VALUES
('Top Gun'),
('The Rookie of the Year'),
('Bambi');

SELECT * FROM new_film;
--5
CREATE TABLE customer_review (
id SERIAL PRIMARY KEY,
	review_id SERIAL UNIQUE,
	film_id INT REFERENCES new_film(id) ON DELETE CASCADE,
	language_id INT REFERENCES language(language_id),
	title VARCHAR(50),
	score NUMERIC CHECK (score >=1 AND score <= 10),
	review_text TEXT,
	last_update DATE
);

INSERT into customer_review (review_id, film_id, language_id, title, score, review_text, last_update) VALUES
(1,1,1, 'Top Gun', 10, 'Wonderful Movie and Action Packed', '2002-08-03'),
(2,2,2, 'The Rookie of the Year!', 4, 'This was not a good movie', '2012-05-09');

SELECT * FROM customer_review;

DELETE FROM new_film
WHERE id=1;
SELECT * FROM new_film;
SELECT * FROM customer_review;

