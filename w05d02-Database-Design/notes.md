---- Agenda ----

- ERD talk ( what is what is E and R and D)

- Naming Conventions

- different relationships

- Data types

- Normalization

-  BREAKOUT EXCERCISE - ERD 


------------- ERD --------------
What is ERD ?

Entity Relationship Diagram 

 - establish connection between tables ( relationships )
 - plans out your data splitting


---------- Naming Conventions -------

we must have columns (which is our data that is categorized)
columns are nouns and usually they are singular
table names are usually plural 
all columns must have a type
                 (0-255)
first_name ---> varchar (text) (NOT NULL) (DEFAULT)
price_cent --->  INTEGER 
BOOLEAN    ---> TRUE and FALSE
(SERIAL)

-------------- Relationships ---------------

One to many relationship ( one user has many urls)
Many to one relationship (one url has one user)
bridge tables for a many to many relationship
(when we have clinics and patients and a patient visits a clinic
we want to record this without data duplication so we made a bridge table called it admissions
and put the hospital_id and client_id into it)
One to one relationship 
