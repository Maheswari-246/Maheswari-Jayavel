Creating a Database e commerce

CREATE DATABASE ecommerce;  
USE ecommerce;
-- Creating a table for customers   
Create table customers(customer_id int Primary key auto_increment, 
customer_name varchar(50),customer_email varchar(50),customer_address varchar(250));
 
 desc customers;
+------------------+--------------+------+-----+---------+----------------+
| Field            | Type         | Null | Key | Default | Extra          |
+------------------+--------------+------+-----+---------+----------------+
| customer_id      | int          | NO   | PRI | NULL    | auto_increment |
| customer_name    | varchar(50)  | YES  |     | NULL    |                |
| customer_email   | varchar(50)  | YES  |     | NULL    |                |
| customer_address | varchar(250) | YES  |     | NULL    |                |
+------------------+--------------+------+-----+---------+----------------+ 

-- Creating a table for orders

Create table orders(
    cus_id int,order_date Date,Total_amount decimal(10,2),
    foreign key (cus_id)References customers(customer_id)); 

    desc orders;
+--------------+---------------+------+-----+---------+-------+
| Field        | Type          | Null | Key | Default | Extra |
+--------------+---------------+------+-----+---------+-------+
| cus_id       | int           | YES  | MUL | NULL    |       |
| order_date   | date          | YES  |     | NULL    |       |
| Total_amount | decimal(10,2) | YES  |     | NULL    |       |
+--------------+---------------+------+-----+---------+-------+  

-- Creating a table for products

Create table Products(                                                
    -> Products_id int primary key auto_increment, products_name varchar(20),
    -> products_price decimal(10,2),products_description varchar(250));

    desc products;
+----------------------+---------------+------+-----+---------+----------------+
| Field                | Type          | Null | Key | Default | Extra          |
+----------------------+---------------+------+-----+---------+----------------+
| Products_id          | int           | NO   | PRI | NULL    | auto_increment |
| products_name        | varchar(20)   | YES  |     | NULL    |                |
| products_price       | decimal(10,2) | YES  |     | NULL    |                |
| products_description | varchar(250)  | YES  |     | NULL    |                |
+----------------------+---------------+------+-----+---------+----------------+ 

-- Insertin the data into the customers table

Insert into customers(customer_name,customer_email,customer_address)
     values("pooja","Pooja1234@gmail.com","No1,xyz"),
     ("Ravi","ravi1234@gmail.com","No2,xyz"),
     ("Ram","Ram1234@gmail.com","No3,xyz"),     
     ("priya","Priya1234@gmail.com","No4,xyz");

     Select * from customers; 
+-------------+---------------+---------------------+------------------+
| customer_id | customer_name | customer_email      | customer_address |
+-------------+---------------+---------------------+------------------+
|           1 | pooja         | Pooja1234@gmail.com | No1,xyz          |
|           2 | Ravi          | ravi1234@gmail.com  | No2,xyz          |
|           3 | Ram           | Ram1234@gmail.com   | No3,xyz          |
|           4 | priya         | Priya1234@gmail.com | No4,xyz          |
+-------------+---------------+---------------------+------------------+  

-- Inserting the data into the orders table

Insert into orders(cus_id,order_date,Total_amount) 
     values(1,'2025-04-15',250),  
     (2,'2025-03-30',150),  
     (3,'2025-02-01',300),  
     (4,'2025-04-20',100); 

     select * from orders; 
+--------+------------+--------------+
| cus_id | order_date | Total_amount |
+--------+------------+--------------+
|      1 | 2025-04-15 |       250.00 |
|      2 | 2025-03-30 |       150.00 |
|      3 | 2025-02-01 |       300.00 |
|      4 | 2025-04-20 |       100.00 |
+--------+------------+--------------+   

-- Inserting the data into the products table

Insert into products(products_name,products_price,products_description)
    values("Products A",200,"Products ABCD"),
     ("Products B",100,"Products EFGH"),
     ("Products C",150,"Products IJKL"),
     ("Products D",250,"Products MNOP");

Select * from products;
+-------------+---------------+----------------+----------------------+
| Products_id | products_name | products_price | products_description |
+-------------+---------------+----------------+----------------------+
|           1 | Products A    |         200.00 | Products ABCD        |
|           2 | Products B    |         100.00 | Products EFGH        |
|           3 | Products C    |         150.00 | Products IJKL        |
|           4 | Products D    |         250.00 | Products MNOP        |
+-------------+---------------+----------------+----------------------+  

--Queries

-- 1.Retrieve all customers who have placed an order in the last 30 days.

select c.customer_id,c.customer_name,c.customer_email,c.customer_address,o.order_date
    from customers as c 
     Inner Join 
     orders as o
     on c.customer_id=o.cus_id
     where o.order_date >= CURDATE() - Interval 30 Day;
+-------------+---------------+---------------------+------------------+------------+
| customer_id | customer_name | customer_email      | customer_address | order_date |
+-------------+---------------+---------------------+------------------+------------+
|           1 | pooja         | Pooja1234@gmail.com | No1,xyz          | 2025-04-15 |
|           2 | Ravi          | ravi1234@gmail.com  | No2,xyz          | 2025-03-30 |
|           4 | priya         | Priya1234@gmail.com | No4,xyz          | 2025-04-20 |
+-------------+---------------+---------------------+------------------+------------+  

--2.Get the total amount of all orders placed by each customer.

select c.customer_name, c.customer_email,sum(o.total_amount) as Amount
    from customers as c 
     Inner Join  
     orders as o
     on c.customer_id=o.cus_id
     Group by c.customer_id;   
+---------------+---------------------+--------+
| customer_name | customer_email      | Amount |
+---------------+---------------------+--------+
| pooja         | Pooja1234@gmail.com | 250.00 |
| Ravi          | ravi1234@gmail.com  | 150.00 |
| Ram           | Ram1234@gmail.com   | 300.00 |
| priya         | Priya1234@gmail.com | 100.00 |
+---------------+---------------------+--------+  

--3.Update the price of Product C to 45.00.

update products set products_price=45.00 where products_name="Products C"; 

select * from products;
+-------------+---------------+----------------+----------------------+
| Products_id | products_name | products_price | products_description |
+-------------+---------------+----------------+----------------------+
|           1 | Products A    |         200.00 | Products ABCD        |
|           2 | Products B    |         100.00 | Products EFGH        |
|           3 | Products C    |          45.00 | Products IJKL        |
|           4 | Products D    |         250.00 | Products MNOP        |
+-------------+---------------+----------------+----------------------+  

--4.Add a new column discount to the products table.

alter table products add discount decimal(5,2) default 0.00;

elect * from products;
+-------------+---------------+----------------+----------------------+----------+
| Products_id | products_name | products_price | products_description | discount |
+-------------+---------------+----------------+----------------------+----------+
|           1 | Products A    |         200.00 | Products ABCD        |     0.00 |
|           2 | Products B    |         100.00 | Products EFGH        |     0.00 |
|           3 | Products C    |          45.00 | Products IJKL        |     0.00 |
|           4 | Products D    |         250.00 | Products MNOP        |     0.00 |
+-------------+---------------+----------------+----------------------+----------+  

--5.Retrieve the top 3 products with the highest price.

select * from products order by products_price desc limit 3;
+-------------+---------------+----------------+----------------------+----------+
| Products_id | products_name | products_price | products_description | discount |
+-------------+---------------+----------------+----------------------+----------+
|           4 | Products D    |         250.00 | Products MNOP        |     0.00 |
|           1 | Products A    |         200.00 | Products ABCD        |     0.00 |
|           2 | Products B    |         100.00 | Products EFGH        |     0.00 |
+-------------+---------------+----------------+----------------------+----------+  

--6.Get the names of customers who have ordered Product A

--Normalized version

Create table order_items (id int primary key auto_increment,    
    order1_id int,product1_id int,quantity int,price decimal(10,2),
     Foreign key (order1_id) References orders(cus_id),              
     Foreign key (product1_id) References products(products_id));

     desc order_items;
+-------------+---------------+------+-----+---------+----------------+
| Field       | Type          | Null | Key | Default | Extra          |
+-------------+---------------+------+-----+---------+----------------+
| id          | int           | NO   | PRI | NULL    | auto_increment |
| order1_id   | int           | YES  | MUL | NULL    |                |
| product1_id | int           | YES  | MUL | NULL    |                |
| quantity    | int           | YES  |     | NULL    |                |
| price       | decimal(10,2) | YES  |     | NULL    |                |
+-------------+---------------+------+-----+---------+----------------+   

-- Inserting the data into the order_items table

Insert into order_items(order1_id,product1_id,quantity,price)
    values(1,1,10,100.00),
     (1,2,5,150.00),
     (2,3,3,250.00),
     (3,4,10,160.00);

select * from order_items;
+----+-----------+-------------+----------+--------+
| id | order1_id | product1_id | quantity | price  |
+----+-----------+-------------+----------+--------+
| 1 |         1 |           1 |       10 | 100.00 |
| 2 |         1 |           2 |        5 | 150.00 |
| 3 |         2 |           3 |        3 | 250.00 |
| 4 |         3 |           4 |       10 | 160.00 |

SELECT DISTINCT c.customer_name
FROM customers as c
JOIN orders as o ON c.customer_id = o.cus_id
JOIN order_items as oi ON o.cus_id = oi.order1_id
JOIN products as p ON oi.product1_id = p.products_id
WHERE p.products_name = 'Product A';

+-----------------+
| customer_name   |
+-----------------+
|   pooja         |
+-----------------+

--7.Join the orders and customers tables to retrieve the customer's name and order date for each order.

select c.customer_name,o.order_date  
     from customers as c  
     join orders as o      
     on c.customer_id=o.cus_id;
+---------------+------------+
| customer_name | order_date |
+---------------+------------+
| pooja         | 2025-04-15 |
| Ravi          | 2025-03-30 |
| Ram           | 2025-02-01 |
| priya         | 2025-04-20 |
+---------------+------------+    

--8.Retrieve the orders with a total amount greater than 150.00


elect * from orders 
     where Total_amount >150;
+--------+------------+--------------+
| cus_id | order_date | Total_amount |
+--------+------------+--------------+
|      1 | 2025-04-15 |       250.00 |
|      3 | 2025-02-01 |       300.00 |
+--------+------------+--------------+   

--9.Normalize the database by creating a separate table for order items and updating the orders table to reference the order_items table


Create table order_items (id int primary key auto_increment,    
    order1_id int,product1_id int,quantity int,price decimal(10,2),
     Foreign key (order1_id) References orders(cus_id),              
     Foreign key (product1_id) References products(products_id));

     desc order_items;
+-------------+---------------+------+-----+---------+----------------+
| Field       | Type          | Null | Key | Default | Extra          |
+-------------+---------------+------+-----+---------+----------------+
| id          | int           | NO   | PRI | NULL    | auto_increment |
| order1_id   | int           | YES  | MUL | NULL    |                |
| product1_id | int           | YES  | MUL | NULL    |                |
| quantity    | int           | YES  |     | NULL    |                |
| price       | decimal(10,2) | YES  |     | NULL    |                |
+-------------+---------------+------+-----+---------+----------------+   

-- Inserting the data into the order_items table

Insert into order_items(order1_id,product1_id,quantity,price)
    values(1,1,10,100.00),
     (1,2,5,150.00),
     (2,3,3,250.00),
     (3,4,10,160.00);

select * from order_items;
+----+-----------+-------------+----------+--------+
| id | order1_id | product1_id | quantity | price  |
+----+-----------+-------------+----------+--------+
| 1 |         1 |           1 |       10 | 100.00 |
| 2 |         1 |           2 |        5 | 150.00 |
| 3 |         2 |           3 |        3 | 250.00 |
| 4 |         3 |           4 |       10 | 160.00 |
--10.Retrieve the average total of all orders.

select avg(Total_amount) as Average_amount from orders;
+----------------+
| Average_amount |
+----------------+
|     200.000000 |
+----------------+