CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
);

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar');

SELECT * FROM FirstTab;

CREATE TABLE SecondTab (
    id integer 
);

INSERT INTO SecondTab VALUES
(5),
(NULL);


SELECT * FROM SecondTab;



--1
--    Q1. What will be the OUTPUT of the following statement?
--		Prediction: I am not sure, since I do not know what ft is. But now after checking it is the 
--alias for FirstTab. Overall I think it will throw an error, or return one value of NULL
SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL );
	----What did I learn, when it is NULL in suqquery it is not a fair comparision, it's the absence of value. So nothing can be compared to NULL
--2
--Q2. What will be the OUTPUT of the following statement?
--I think it will return 6 Sharlee, 7 Krish, and NULL Avtaar.
--My prediction was incorrect, and I am not sure why.
 SELECT COUNT(*)
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 );
	-- On second try, I was correct in predicting only SHarlee, and Krish being called, but don't understand why it repeats itself.
 
--3
-- I think it will only produce Sharlee, and Krish.
--But it produced Zero, my prediction was incorrect. 
   SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab );
	--ID'S 5 AND 5 CANCEL EACH OTHER
	--but since there is a null that exists, it automtically runs zero since you can't compare between them. 
	
--4
-- I think it will select (5,'Pawan'),
-- (6,'Sharlee'),
-- (7,'Krish')
--SO 3, but if it is also counting the second table, so 4.
   SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL );
--So the answer was 4, but why? Was my prediction correct?
--No, the answer needs to be 2 since the 5's get cancelled out and Nulls can't be compared. 
