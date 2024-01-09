--EXERCISE 1: Items and Customers Iused the DVD RENTAL FILE FOR THESE QUESTIONS
--1
SELECT amount FROM payment
ORDER BY amount;
--2
SELECT amount FROM payment WHERE amount >=0 ORDER BY amount DESC;
--3
SELECT * FROM customer;
SELECT first_name FROM customer 
ORDER BY first_name ASC
LIMIT 3;
--4
SELECT last_name FROM customer
ORDER BY last_name DESC;

--EXERCISE 2 : DVDrental Database
--1
SELECT * FROM customer;
--2
SELECT (first_name, last_name) FROM customer;
SELECT CONCAT(first_name,' ', last_name) AS full_name
FROM customer;
--3
SELECT * FROM customer;
SELECT create_date FROM customer;
SELECT DISTINCT create_date FROM customer;
--4
SELECT * FROM customer
ORDER BY first_name DESC;
--5
--FILM ID, 
SELECT film_id FROM film;

--TITLE, DESCRIPTION, YEAR OF RELEASE, 
SELECT title FROM film;
SELECT description FROM film;
SELECT release_year FROM film;

--RENTAL RATE
SELECT rental_rate FROM film;

SELECT film.film_id, film.title, film.description, film.release_year, film.rental_rate 
FROM film 
ORDER BY film.rental_rate ASC;

--6
--Address, and phone number of all who live in Texas district
SELECT address.address , address.phone FROM address
JOIN
city ON address.city_id = city.city_id
WHERE address.district = 'Texas';

--7
SELECT film_id FROM film WHERE film_id IN (15,150);
SELECT film_id FROM film_category WHERE film_id IN (15,150);
SELECT film_id FROM inventory WHERE film_id IN (15,150);
SELECT film_id FROM film_actor WHERE film_id IN (15,150);
--OR Combined using UNION
SELECT film_id FROM film WHERE film_id IN (15, 150)
UNION
SELECT film_id FROM film_category WHERE film_id IN (15, 150)
UNION
SELECT film_id FROM inventory WHERE film_id IN (15, 150)
UNION
SELECT film_id FROM film_actor WHERE film_id IN (15, 150);

--8 film_id, title, description, length, rental rate
SELECT film.film_id, film.description, film.length, film.rental_rate FROM film
WHERE title = 'Type Title';

--9
SELECT film.film_id, film.description, film.length, film.rental_rate FROM film
WHERE SUBSTRING(title, 1, 2) = SUBSTRING('Af', 1, 2)

--10
SELECT rental_rate FROM film 
ORDER BY rental_rate ASC
LIMIT 10;

--11  USING DISTINCT
SELECT DISTINCT rental_rate
FROM film
ORDER BY rental_rate ASC
LIMIT 10;

--12
--first_name and last_name from customer table
--amount and payment_date from payment table

-- SELECT first_name, last_name FROM customer table
-- JOIN 
-- payment.amount, payment.payment_date;

SELECT customer.first_name, customer.last_name, payment.amount, payment.payment_date
FROM CUSTOMER
JOIN payment ON customer.customer_id = payment.customer_id;

-13
-- SELECT return_date FROM rental;
SELECT film.film_id, film.title
FROM film
LEFT JOIN inventory ON film.film_id = inventory.film_id
WHERE inventory.film_id IS NULL;

--14
SELECT city.city, country.country
FROM city
JOIN country ON city.country_id = country.country_id;
