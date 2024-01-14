--Week 7 Day 5 Daily Challenge
--1
CREATE TABLE customer(
id SERIAL PRIMARY KEY,
first_name VARCHAR NOT NULL,
last_name VARCHAR NOT NULL);

CREATE TABLE customer_profile(
id SERIAL PRIMARY KEY,
isLoggedIn BOOLEAN DEFAULT false,
customer_id INTEGER REFERENCES customer(id) UNIQUE);


--2
INSERT INTO customer (first_name, last_name) VALUES
('John','Doe'),
('Jerome', 'Lalu'),
('Lea', 'Rive');


--3
-- INSERT INTO customer_profile (isLoggedIn, customer_id) VALUES
-- (true, 1),
-- (false,2)

INSERT INTO customer_profile (isLoggedIn, customer_id) 
SELECT
true,
(SELECT id FROM customer WHERE first_name ='John')
UNION ALL
SELECT 
false,
(SELECT id FROM customer WHERE first_name ='Jerome');


--4
--a
SELECT customer.first_name
FROM customer
INNER JOIN customer_profile ON customer.id = customer_profile.customer_id
WHERE customer_profile.isLoggedIn = true;
--b
SELECT customer.first_name, COALESCE (customer_profile.isLoggedIn, false) AS isLoggedIn
FROM customer
LEFT JOIN customer_profile ON customer.id = customer_profile.customer_id;
--c
SELECT customer.first_name 
FROM customer
RIGHT JOIN customer_profile ON customer.id = customer_profile.customer_id
WHERE customer_profile.isLoggedIn = 'false';

--Part Two
--1
CREATE TABLE book(
book_id SERIAL PRIMARY KEY,
title VARCHAR(50) NOT NULL,
author VARCHAR(50) NOT NULL);
--2
INSERT INTO book (title, author) VALUES 
('Alice In Wonderland', 'Lewis Carroll'),
	('Harry Potter', 'J.K Rowling'),
	('To Kill A Mockingbird', 'Harper Lee');
--3
CREATE TABLE student (
student_id SERIAL PRIMARY KEY,
name VARCHAR (50) NOT NULL UNIQUE,
age NUMERIC CHECK  (age <= 15)
);
--4
INSERT INTO student (name, age) VALUES
('John', 12),
('Lera', 11),
('Patrick', 10),
('Bob', 14);
--5
CREATE TABLE library (
book_fk_id INTEGER,
student_id INTEGER,
borrowed_date DATE,
PRIMARY KEY (book_fk_id, student_id),
FOREIGN KEY (book_fk_id) REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (student_id) REFERENCES student(student_id)	ON DELETE CASCADE ON UPDATE CASCADE);

SELECT * FROM library;
--6
INSERT INTO library (student_id, book_fk_id, borrowed_date)
VALUES
    ((SELECT student_id FROM student WHERE name = 'John'),
     (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
     '2022-02-15'),

    ((SELECT student_id FROM student WHERE name = 'Bob'),
     (SELECT book_id FROM book WHERE title = 'To Kill A Mockingbird'),
     '2021-03-03'),

    ((SELECT student_id FROM student WHERE name = 'Lera'),
     (SELECT book_id FROM book WHERE title = 'Alice In Wonderland'),
     '2021-05-23'),

    ((SELECT student_id FROM student WHERE name = 'Bob'),
     (SELECT book_id FROM book WHERE title = 'Harry Potter'),
     '2021-08-12');
--7
--a
SELECT book_fk_id, student_id, borrowed_date FROM library;
--b
-- SELECT (name, book) FROM student;
SELECT
CONCAT (student.name, ' - ', book.title) AS student_and_book
FROM
library
JOIN
student ON library.student_id = student.student_id
JOIN
book ON library.book_fk_id = book.book_id;
--c
--The below code did not bring an average age. 
--don't know where I went wrong.
SELECT AVG(student.age)
FROM library
JOIN student ON library.student_id = student.student_id
WHERE library.book_fk_id = (SELECT book_id FROM book WHERE title = 'Alice in Wonderland');
--d
DELETE FROM student
WHERE name = 'Lera';
SELECT * FROM student;
--Lera is not on the table..