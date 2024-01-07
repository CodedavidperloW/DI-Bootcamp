CREATE TABLE students (
student_id SERIAL PRIMARY KEY,
	last_name VARCHAR (50),
	first_name VARCHAR (50),
	birth_date DATE
);

INSERT INTO students (first_name, last_name, birth_date) 
VALUES 
('Marc','Benichou', '1998-11-02'),
('Yoan','Cohen', '2010-03-12'),
('Lea','Benichou', '1987-07-27'),
('Amelia','Dux', '1996-04-07'),
('David','Grez', '2003-06-14'),
('Omer','Simpson', '1980-10-03');

INSERT INTO students (first_name, last_name, birth_date) 
VALUES ('David', 'Perlow', '1984-03-26');

SELECT * FROM STUDENTS;
SELECT first_name, last_name FROM students;
SELECT first_name, last_name FROM students WHERE student_id =2;
SELECT first_name, last_name FROM students WHERE last_name = 'Benichou' AND first_name = 'Marc';
SELECT * FROM students WHERE first_name ILIKE '%a%';
SELECT * FROM students WHERE first_name ILIKE 'a%';
SELECT * FROM students WHERE first_name ILIKE '%a';
SELECT *
FROM students
WHERE SUBSTRING(first_name FROM LENGTH(first_name)-1 FOR 1) ='a';
SELECT first_name, last_name FROM students WHERE student_id =1 OR student_id= 3;

SELECT *
FROM students
WHERE birth_date > '2000-01-01'

