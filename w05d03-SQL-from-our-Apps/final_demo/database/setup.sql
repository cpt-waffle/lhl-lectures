-- Normally you would have multiple files called migrations, but for demo purposes
-- we are using one big file for ease of setup.


DROP TABLE IF EXISTS departments CASCADE;
--  CREATE DEPARTMENTS
CREATE TABLE departments (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(50)
);

DROP TABLE IF EXISTS employees CASCADE;
-- CREATE EMPLOYEES
CREATE TABLE employees (
  id SERIAL PRIMARY KEY NOT NULL,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  email VARCHAR(100),
  department_id INTEGER REFERENCES departments(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS addresses CASCADE;
-- CREATE ADRESSES
CREATE TABLE addresses (
	id SERIAL PRIMARY KEY NOT NULL,
	street_name VARCHAR(100),
	postal_Code VARCHAR(10),
	province    VARCHAR(50),
	employee_id INTEGER REFERENCES employees(id) ON DELETE CASCADE
);

-- SEED DEPARTMENTS

INSERT INTO departments (id, name) VALUES (1, 'HR');
INSERT INTO departments (id, name) VALUES (2, 'Marketing');
INSERT INTO departments (id, name) VALUES (3, 'Finance');
INSERT INTO departments (id, name) VALUES (4, 'Sales');
INSERT INTO departments (id, name) VALUES (5, 'Operations');

-- SEED EMPLOYEES

INSERT INTO employees (id, first_name, last_name, email, department_id) VALUES (1, 'Tiya', 'Blevins', 'tiya@b.ca', 1);
INSERT INTO employees (id, first_name, last_name, email, department_id) VALUES (2, 'Suzannah', 'Booker', 'suzannah@b.ca', 1);
INSERT INTO employees (id, first_name, last_name, email, department_id) VALUES (3, 'Alissa', 'Shah', 'alissa@s.ca', 1);
INSERT INTO employees (id, first_name, last_name, email, department_id) VALUES (4, 'Raul', 'Bird', 'raul@b.ca', 1);
INSERT INTO employees (id, first_name, last_name, email, department_id) VALUES (5, 'Vikki', 'Charles', 'vikki@c.ca', 1);


INSERT INTO employees (id, first_name, last_name, email, department_id) VALUES (6, 'Lemar', 'Gary', 'lemar@g.ca', 2);
INSERT INTO employees (id, first_name, last_name, email, department_id) VALUES (7, 'Lydia', 'Santos', 'lydia@s.ca', 2);
INSERT INTO employees (id, first_name, last_name, email, department_id) VALUES (8, 'Russell', 'Santana', 'russell@s.ca', 2);
INSERT INTO employees (id, first_name, last_name, email, department_id) VALUES (9, 'Lily-Mae', 'Cartwright', 'lily.mae@c.ca', 2);
INSERT INTO employees (id, first_name, last_name, email, department_id) VALUES (10, 'Alyx', 'Hayden', 'alyx@h.ca', 2);

INSERT INTO employees (id, first_name, last_name, email, department_id) VALUES (11, 'Siana', 'Burns', 'siana@b.ca', 3);
INSERT INTO employees (id, first_name, last_name, email, department_id) VALUES (12, 'Antoinette', 'Boyer', 'antoinette@b.ca', 3);
INSERT INTO employees (id, first_name, last_name, email, department_id) VALUES (13, 'Abdul', 'Grainger', 'abdul@g.ca', 3);
INSERT INTO employees (id, first_name, last_name, email, department_id) VALUES (14, 'Caiden', 'Nielsen', 'caiden@n.ca', 3);
INSERT INTO employees (id, first_name, last_name, email, department_id) VALUES (15, 'Douglas', 'Stephens', 'douglas@st.ca', 3);


INSERT INTO employees (id, first_name, last_name, email, department_id) VALUES (16, 'Fiza', 'Savage', 'fiza@s.ca', 4);
INSERT INTO employees (id, first_name, last_name, email, department_id) VALUES (17, 'Aalia', 'Kirk', 'aalia@kirk.ca', 4);
INSERT INTO employees (id, first_name, last_name, email, department_id) VALUES (18, 'Lily-May', 'Berry', 'lily-m@b.ca', 4);
INSERT INTO employees (id, first_name, last_name, email, department_id) VALUES (19, 'Geraldine', 'Walmsley', 'geraldine@walm.ca', 4);
INSERT INTO employees (id, first_name, last_name, email, department_id) VALUES (20, 'Hilary', 'Whiteley', 'hilary@w.ca', 4);
INSERT INTO employees (id, first_name, last_name, email, department_id) VALUES (21, 'Edna', 'Forrest', 'edna@f.ca', 4);
INSERT INTO employees (id, first_name, last_name, email, department_id) VALUES (22, 'Sana', 'Becker', 'sana@b.ca', 4);
INSERT INTO employees (id, first_name, last_name, email, department_id) VALUES (23, 'Chantel', 'Maddox', 'chantel@m.ca', 4);

INSERT INTO employees (id, first_name, last_name, email, department_id) VALUES (24, 'Chelsy', 'Pearce', 'chelsey@p.ca', 5);
INSERT INTO employees (id, first_name, last_name, email, department_id) VALUES (25, 'Johan', 'Heath', 'johan@h.ca', 5);

-- SEED ADDRESSES

INSERT INTO addresses (id, street_name, postal_Code, province, employee_id) VALUES (1, '3309 avenue Royale', 'G1R 5B2', 'Quebec', 1);
INSERT INTO addresses (id, street_name, postal_Code, province, employee_id) VALUES (2, 'Richmond', 'V6X 2B8', 'British Columbia', 2);
INSERT INTO addresses (id, street_name, postal_Code, province, employee_id) VALUES (3, 'Yorkton', 'S3N 1J6', 'Saskatchewan', 3);
INSERT INTO addresses (id, street_name, postal_Code, province, employee_id) VALUES (4, '272 Stoney Creek', 'S4P 3Y2', 'Saskatchewan', 4);
INSERT INTO addresses (id, street_name, postal_Code, province, employee_id) VALUES (5, '2564 Tycos Dr', 'M5T 1T4', 'Ontario', 5);
INSERT INTO addresses (id, street_name, postal_Code, province, employee_id) VALUES (6, '1606 Harvest Moon Dr', 'L3R 0L7', 'Ontario', 6);
INSERT INTO addresses (id, street_name, postal_Code, province, employee_id) VALUES (7, '2167 Acton Avenue', 'M3H 4J1', 'Ontario', 7);
INSERT INTO addresses (id, street_name, postal_Code, province, employee_id) VALUES (8, '4962 Galts Ave', 'T4N 2A6', 'Alberta', 8);
INSERT INTO addresses (id, street_name, postal_Code, province, employee_id) VALUES (9, '1671 Goyeau Ave', 'N9A 1H9', 'Ontario', 9);
INSERT INTO addresses (id, street_name, postal_Code, province, employee_id) VALUES (10, '4407 rue Principale', 'J9L 3G8', 'Quebec', 10);
INSERT INTO addresses (id, street_name, postal_Code, province, employee_id) VALUES (11, '2350 Shaughnessy St', 'V3C 4S7', 'British Columbia', 11);
INSERT INTO addresses (id, street_name, postal_Code, province, employee_id) VALUES (12, '2424 90th Avenue', 'T0J 1B0', 'Alberta', 12);
INSERT INTO addresses (id, street_name, postal_Code, province, employee_id) VALUES (13, '4245 Robson St', 'V6B 3K9', 'British Columbia', 13);
INSERT INTO addresses (id, street_name, postal_Code, province, employee_id) VALUES (14, '3180 René-Lévesque Blvd', 'H3B 4W8', 'Quebec', 14);
INSERT INTO addresses (id, street_name, postal_Code, province, employee_id) VALUES (15, '230 Cornwall Street', 'S4H 0G6', 'Saskatchewan', 15);
INSERT INTO addresses (id, street_name, postal_Code, province, employee_id) VALUES (16, '2776 49th Avenue', 'X0C 0C0', 'Nunavut', 16);
INSERT INTO addresses (id, street_name, postal_Code, province, employee_id) VALUES (17, '2694 rue Levy', 'H3C 5K4', 'Quebec', 17);
INSERT INTO addresses (id, street_name, postal_Code, province, employee_id) VALUES (18, '2552 Black Avon Road', 'B0H 1R0', 'Nova Scotia', 18);
INSERT INTO addresses (id, street_name, postal_Code, province, employee_id) VALUES (19, '2379 rue des Champs', 'G7H 4N3', 'Quebec', 19);
INSERT INTO addresses (id, street_name, postal_Code, province, employee_id) VALUES (20, '2894 Merton Street', 'M1L 3K7', 'Toronto', 20);
INSERT INTO addresses (id, street_name, postal_Code, province, employee_id) VALUES (21, '4191 Dundas St', 'M2N 2G8', 'Toronto', 21);
INSERT INTO addresses (id, street_name, postal_Code, province, employee_id) VALUES (22, '548 Adelaide St', 'M5H 1P6', 'Toronto', 22);
INSERT INTO addresses (id, street_name, postal_Code, province, employee_id) VALUES (23, '3426 René-Lévesque Blvd', 'H3B 4W8', 'Quebec', 23);
INSERT INTO addresses (id, street_name, postal_Code, province, employee_id) VALUES (24, '2868 49th Avenue', 'X0E 1R0', 'Northwest Territories', 24);
INSERT INTO addresses (id, street_name, postal_Code, province, employee_id) VALUES (25, '708 Isabella Street', 'K8N 4Z5', 'Belleville', 25);