## Database Design

Today we will be going over some review and new material on ERDs and designing of a database.

### ERDs ( Entity Relationship Diagram )

 - type of structural diagram for use in database design.
 - very handy to visualize the flow of data and how its all connected.

 You can use pen and paper to draw these out, which is quick and great!

![Schema](https://raw.githubusercontent.com/vasiliy-klimkin/lhl-lectures/master/w05d01-SQL-Intro/tinyurl-schema.png)

### Entity

An ERD entity is a definable thing or concept within a system, such as a person/role.

Aka: the table that has data.

### Entity Attributes ( aka: properties )

The characterstics for the entity.

Think of it as storage units for the values of that specific row. A row is a peiece of data that contains a bunch of attributes that describe that data.

```
 id |          email          |  password
----+-------------------------+------------
  1 | rick.sandchez@gmail.com | picklerick
```

### Naming Conventions For Entities ( Tables )

- Tables should be named pluralized ( in some cases thats not the case and if you google plural vs singular, you can find MANY different arguments and cases from each side. During bootcamp we will adapt the pluralized table convention.)
- Tables and attribute names are written in `snake_case`
- A foreign key is made up of the singular of the primary keys table and the suffix _id (`user_id`)



### Relationship

 - connect related info between two tables.

 ![Schema](https://raw.githubusercontent.com/vasiliy-klimkin/lhl-lectures/master/w05d01-SQL-Intro/tinyurl-schema.png)


### Primary Keys

A primary key is a way to uniquely identify a particular record withing a table.  Rules of a primary key are:

- must be unique

We can usually set `psql` to increment it for us by using `SERIAL` word. The data type is still integer though. We can reference the primary key in other tables to link data toghether. That relation is called a `foreign key`.

### Foreign Keys

A foreign key, is an attribute that references the PRIMARY KEY from another table. For example:

 ![Schema](https://raw.githubusercontent.com/vasiliy-klimkin/lhl-lectures/master/w05d01-SQL-Intro/tinyurl-schema.png)

in the above schema we can see that the `Users` primary key is being referenced in `Urls` table. 


### Data Types

Each attribute must have a data type.

![datatypes](https://i.stack.imgur.com/tuRiZ.png)

You might be wondering why so many different datatypes and maybe even asking yourself why have  VARCHAR and TEXT. A while back we would care alot about memory, so we would try to steer away from
data types that take up a big chunk of memory unless very needed. Nowdays memory is quite low costly, so so its not a big concern.

### Relationship Types

#### one to one

![one-to-one](https://webdesigntips.blog/wp-content/uploads/2020/01/TypeORM-With-NEST-JS-Basic-Tutorial.png)

In a one-to-one relationship, one record in a table is associated with one and only one record in another table.

#### one to many

 ![Schema](https://raw.githubusercontent.com/vasiliy-klimkin/lhl-lectures/master/w05d01-SQL-Intro/tinyurl-schema.png)

 In a one-to-many relationship, one record is related to one or more records from the other table.

#### many to many

In a many-to-many relationshipmultiple records in a table are associated with multiple records in another table. We usually never want to have this relationship, and we use a bridge table to make it from many-to-many to become one-to-many and many-to-one.

![bridge-table](https://i.stack.imgur.com/HY78n.png)

#### Breakout: Convert Two Spreadsheets

[Link](https://gist.github.com/andydlindsay/20e7305e853bad7b587f294b054cf8de)


#### Normalization
- The process of designing (and redesigning) a relational database to
  - reduce duplicated data
  - ensure data integrity
- This will help to improve the structure of the data
- Beware: taking this process too far can result in extremely complex queries to retrieve related data
[Normalization](https://www.studytonight.com/dbms/database-normalization.php)


