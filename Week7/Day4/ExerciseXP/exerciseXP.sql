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


---EXERCISE TWO:  DVD RENTAL
SELECT * FROM new_film;
--1
UPDATE customer_review
SET language_id= 3
WHERE film_id = 1;

--2
--The following are my FOREIGN KEYS:
film_id
language_id
--When modifying a table, the id's need to be matched correctly
--otherwise restraints and errors occur.

--3 
--Dropping a table is straight forward and a permanent process. 
--What it does require is to see how and what is linked to the table in order
--to avoid complications.

DROP TABLE customer_review;

--4
SELECT rental.return_date FROM rental
WHERE rental.return_date IS NULL
ORDER BY rental.return_date DESC;

--5
SELECT
	film.title,
	film.rental_rate,
	rental.return_date
FROM
	film
	----Above I am selecting the title, rental_rate, and return_date from the film table.
	--Below I am joining the inventory table on the film.film_id to create a connection within the inventory.film_id
JOIN 
	inventory ON film.film_id = inventory.film_id
JOIN
--Then we join the rental table to the inventory table and link 
	rental ON inventory.inventory_id = rental.inventory_id
WHERE 
	rental.return_date IS NULL
ORDER BY
	film.rental_rate DESC
LIMIT 30; 

--6

--1
-- SELECT film.title FROM film
-- JOIN film
-- WHERE actor.first_name IS Penelope
-- ;
SELECT film.title
FROM film
JOIN film_actor ON film.film_id = film_actor.film_id
JOIN actor ON film_actor.actor_id = actor.actor_id
WHERE actor.first_name = 'Penelope' AND actor.last_name ='Monroe'
AND film.description ILIKE '%sumo wrestler%';

--2
-- SELECT film.title
-- FROM film
-- INNER JOIN film.length ON film.rating = film.rating;
SELECT film.title
FROM film
WHERE film.length <60 AND film.rating ='R';

--3
SELECT film.title
FROM film
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
JOIN customer ON rental.customer_id = customer.customer_id
JOIN payment ON rental.rental_id = payment.rental_id
WHERE customer.first_name = 'Matthew' AND customer.last_name = 'Mahan'
AND payment.amount >4.00
AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01'

--4
-- SELECT DISTINCT film.title
-- FROM film
-- JOIN inventory ON film.film_id = inventory.film_id
-- JOIN rental ON inventory.inventory_id = rental.inventory_id
-- JOIN customer ON rental.customer_id = customer.customer_id
-- WHERE (film.title ILIKE '%boat%' OR film.description ILIKE '%boat%');

SELECT DISTINCT replacement_cost FROM film 
ORDER BY replacement_cost DESC;

SELECT DISTINCT film.title
FROM film
JOIN inventory ON film.film_id = inventory.film_id
JOIN rental ON inventory.inventory_id = rental.inventory_id
JOIN customer ON rental.customer_id = customer.customer_id
WHERE (film.title ILIKE '%boat%' OR film.description ILIKE '%boat%')
AND film.replacement_cost > 17.99;