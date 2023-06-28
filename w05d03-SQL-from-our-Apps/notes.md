## --------- Agenda ----------

- Databases Conceptual Review
- How to make SQL commands from .js file
- How to make functions for helper methods -- (tomorrow's activities)
- How to make SQL commands from server
- common pitfalls
- Q and A


### Theory 

Because of psql being its own service, sometimes you want other programs to access the data.


database.txt

[
  {id:  name:, password: }
  {id:  name:, password: }
  {id:  name:, password: }
  {id:  name:, password: }
]

fs.read

fs.write

```sh
cptwaffle@cptwaffle-desktop:~/lhl/lectures/w05d03-SQL-from-our-Apps$ psql
```

the address is localhost
the username   cptwaffle
the database   cptwaffle
password       ignored
port           5432
