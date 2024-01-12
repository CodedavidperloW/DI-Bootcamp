--drop table product;
--drop table products_desc;

CREATE TABLE products (
	ID SERIAL PRIMARY KEY,
	NAME VARCHAR (50) NOT NULL,
	PRICE INTEGER
);
--CONSTRAINT -- WHAT DOES THIS MEAN?

CREATE TABLE products_desc (
	ID SERIAL PRIMARY KEY,
	description VARCHAR (500),
	product_id INTEGER
)

INSERT INTO
	products (price, name)
VALUES
(700, 'iPad'),(800, 'iPhone'),(900, 'iWatch'),(1000, 'iCar');

SELECT * FROM products;

INSERT INTO products_desc (description, product_id)
VALUES
('Great iPad', 2);

SELECT * FROM products_desc;

SELECT products.id, products.name, products.price, products_desc.product_id
FROM products
INNER JOIN products_desc
ON products.id = products_desc.product_id;


--FOREIGN KEY


CREATE TABLE products_desc (
		ID SERIAL PRIMARY KEY,
	description VARCHAR (500),
	product_id INTEGER,
	constraint fk_products_id
		FOREIGN KEY (product_id)
			references products(id)
);

insert into products_desc (description, product_id)
values('aaa', 2),('bbbb', 3),('ccccc', 4),('dddd',5);
SELECT * FROM products_desc;
SELECT * FROM products;

delete from products where id =2;

--ON DELETE / ON UPDATE
--NO ACTION / RESTRICT
-- SET NULL














