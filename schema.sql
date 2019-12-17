DROP DATABASE IF EXISTS employee_trackerDB;
CREATE database employee_trackerDB;
USE employee_trackerDB;

CREATE TABLE departments (
  id INT NOT NULL AUTO_INCREMENT,
  employee_name VARCHAR(30) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE roles (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL(10,4) NULL,
  department_id INT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE employees (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30) NULL,
  last_name VARCHAR(30) NULL,
  role_id INT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id)
);


INSERT INTO departments (employee_name)
VALUES ('Marketing');

INSERT INTO departments (employee_name)
VALUES ('Sales');

INSERT INTO departments (employee_name)
VALUES ('Accounting');


INSERT INTO roles (title, salary, department_id)
VALUES ('marketing coordinator', 50000, 1);

INSERT INTO roles (title, salary, department_id)
VALUES ('graphic designer', 65000, 1);

INSERT INTO roles (title, salary, department_id)
VALUES ('videographer', 60000,1);

INSERT INTO roles (title, salary, department_id)
VALUES ('marketing director', 100000, 1);


INSERT INTO roles (title, salary, department_id)
VALUES ('salesman', 70000, 2);

INSERT INTO roles (title, salary, department_id)
VALUES ('assistant', 40000, 2);

INSERT INTO roles (title, salary, department_id)
VALUES ('vice president', 200000, 2);


INSERT INTO roles (title, salary, department_id)
VALUES ('accountant', 60000, 3);

INSERT INTO roles (title, salary, department_id)
VALUES ('chief finance officer', 120000, 3);


INSERT INTO employee_name (first_name, last_name, role_id)
VALUES('Bianca', 'Navejas', 1);

INSERT INTO employee_name (first_name, last_name, role_id)
VALUES('Joanna', 'Sowa', 2);

INSERT INTO employee_name (first_name, last_name, role_id)
VALUES('Brian', 'Hlavacek', 3);

INSERT INTO employee_name (first_name, last_name, role_id, manager_id)
VALUES('James', 'Flores', 4, 5);

INSERT INTO employee_name (first_name, last_name, role_id)
VALUES('Victor', 'Ramirez', 1);

INSERT INTO employee_name (first_name, last_name, role_id)
VALUES('Jeanette', 'Gonzalez', 2);

INSERT INTO employee_name (first_name, last_name, role_id, manager_id)
VALUES('Camilo', 'Rodriguez', 3, 5);

INSERT INTO employee_name (first_name, last_name, role_id)
VALUES('Kyle', 'Swanson', 1);

INSERT INTO employee_name (first_name, last_name, role_id, manager_id)
VALUES('Dan', 'Jones', 2, 5);


SELECT * FROM departments;
select * from roles;
select * from employees;