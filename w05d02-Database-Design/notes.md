---- Agenda ----

- ERD talk ( what is what is E and R and D)

- Naming Conventions

- different relationships

- Data types

- Normalization

-  BREAKOUT EXCERCISE - ERD 


-- ERD 

What is it?

Entity Relationship Digram

plan out your data, its relations and how it maps between itself


Enity (user, car, school, student)

Relationship


Question for all

SERIAL <-----
not int


Naming Conventions 

- we are going to name our tables and fields with `snake_case`
- name our tables in a pluralized form

Data Types

all attributes all must have a data type!

VARCHAR(255)
TEXT

INTEGER
BIGINT ===> price_cents
FLOAT  --> rounds values 14.45
BOOLEAN
(ARRAY AND JSON)

Relationship Types

One to One relationship 

One record from table A is related to ONE record in Table B

One To Many to relationship

One record from Table A is realted to ONE or MORE record in the second table

THe many to Many relationship!!!!

One or more records from Table A is related to One or more recorsd in Table B

To fix a a many-to-many relationship we add a "bridge-table" which connect the 2 tables
toghether and makes the following relationship

TABLE A                  BRIDGE TABLE                   TABLE B
       < ONE TO MANY ==>               <== MANY TO ONE >