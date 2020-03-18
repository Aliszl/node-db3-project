-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.
select 
	productname,
category.categoryname
from product
left join category 
	on category.id = product.categoryId;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.
SELECT `Order`.Id, Shipper.CompanyName 
FROM `Order` 
LEFT JOIN Shipper 
ON Shipper.Id = `Order`.ShipVia 
where `Order`.OrderDate < '2012-08-09';
-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.
SELECT 
OrderDetail.OrderId,
Product.ProductName
 FROM OrderDetail
JOIN Product
    ON Product.Id = OrderDetail.ProductId
    WHERE OrderDetail.OrderId = 10251;
-- Display the OrderID, Customer's Company Name 
--and the employee's LastName for every order. 
--All columns should be labeled clearly.
-- Displays 16,789 records.

SELECT
`Order`.Id, 
Customer.CompanyName,
Employee.LastName
 FROM `Order`
JOIN Customer 
ON Customer.Id = CustomerId
JOIN Employee
ON Employee.Id = EmployeeId
;
