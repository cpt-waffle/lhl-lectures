---- Agenda ----

- ERD talk ( what is what is E and R and D)

- Naming Conventions

- different relationships

- Data types

- Normalization

-  BREAKOUT EXCERCISE - ERD 


-------------------- ERD ------------------------

Entity Relationship Diagram

diagram for sure in a database design
visualize the flow of data and how its all connected toghether!!

Entity

Definable concept withing a system that will contain data

Entitity Attributes

Should my entities be plural or singular?

Entities (tables) ---> plural 
Entitiry Attributres (column) ----> Singular

Entities (tables) ---> Singular 
Entitiry Attributres (column) ----> Singular


----------------

PK - a unique identifyer for a particular record.
- PK are always UNIQUE 
- PK cannot be null!
- SERIAL type

FK - is an attribute that REFERENCES the PRIMARY key from another table. 
- can be null (if you set that constraint)
- when deleting a record that is the REFEERENCE of the FOREGIN KEY (delete user )
database will be give you an error saying "There are references to the key you are going to delete, use CASCADE"





----- Datatypes

We got VARCHAR  that goes ALL THE WAY up to  255 characters
We got   TEXT   that goes all the way up to ... forever

FLOAT   - it sometimes rounds itself (PI )
DECIMAL - VERY persise

bigint : store the amount in cents. This is what EFTPOS transactions use.
decimal(12,2) : store the amount with exactly two decimal places. This what most general ledger software uses.
float : terrible idea - inadequate accuracy. This is what naive developers use.





---- Relationships

one to one -- useful?

one to many

many to one 



---- GOODIES

pgadmin4 for linux 

postico for macbook 