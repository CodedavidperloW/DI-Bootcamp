-- NOT NULL --
-- UNIQUE --
-- PRIMARY KEY --
-- FOREIGN KEY -- THE VALUE IN THAT COLUMN EXISTS IN RELATION 


-- CREATE TABLE test4 (
-- 	user_id SERIAL PRIMARY KEY,
-- 	username VARCHAR(50) UNIQUE,
-- 	PASSWORD(1000) NOT NULL,
-- 	email VARCHAR(255) NOT NULL UNIQUE
-- );

CREATE TABLE products (
id SERIAL PRIMARY KEY,
	name VARCHAR(50) NOT NULL UNIQUE,
	price INTEGER NOT NULL
);

INSERT INTO products (price, name)
values (700, 'iPad'),
(800, 'iPhone'),
(500, 'iWatch'),
(1000, 'iCar')

SELECT * FROM products;
SELECT PRICE, id FROM products;
--column aliases
SELECT price as product_price, name as product_name from products;

--Order By   ---DESCENDING
SELECT * FROM products ORDER BY NAME DESC

--WHERE
SELECT * FROM products
WHERE id = 1 OR NAME = 'iCar'

UPDATE products SET NAME = 'iKey', price= 326 WHERE id = 4;

SELECT * FROM products;

--delete all data
--delete from products
--truncate products-- deletes all the data and resizes it to the beginning.
---why truncate? 
--drop table ex123


--ALTER
ALTER TABLE products ADD COLUMN description VARCHAR(500);

--CHANGE PRODUCT DESCRIPTION
ALTER TABLE products RENAME description TO about;
SELECT * FROM products;
ALTER TABLE products DROP COLUMN about;
SELECT * FROM products
select count(1) from products
select sum(price) from products
select name from products WHERE length(name)>=4


----- JOIN
select * from products;

CREATE TABLE description (
	id SERIAL PRIMARY KEY,
	description VARCHAR(500),
	product_id integer 
)

INSERT INTO description (description, product_id) VALUES
('Amazing iPad', 1),
('Great iPhone', 2),
('Best Car', 4),
('Color Car', 20),
('Best Key', 5)

SELECT * FROM products;
SELECT * FROM description;

SELECT products.id, products.name, products.price, description.description
from products
full join description
on products.id = description.product_id;

SELECT * FROM products;


-- left join / right join / full join













