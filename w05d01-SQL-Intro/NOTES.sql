
How do we start thinking of making a database....

 - TinyApp 
  -- how do we start thinking of design?

-- User Stories / User Scenarios ?

-- basic description of a feature

As a ____ i want to ______

 - As a user I want to save a long_url, and the app needs to create me a short_url
 - As a user, I want to see all of my urls
 - As a user, I want to delete short_urls I do not want anymore
 - As a user, I want to favorite some of my urls
 - As a user, I want to create an account 


 User -- noun
   (id)
   - email
   - username
   - password
   - created_at 
 Url  -- noun
  - long_url
  - short_url
  - created_at
  - (created_by) 


users
id, email,username,password,created_at,long_url,short_url
1 v@k.ca  vas,    123      3-3-2021,   


Urls

id, long_url,      short_url  user_id
1,    google.ca    asd43      1
2,    apple.ca     fsdt345    1
3,    facebook.com 123saf5    1

-- Convention at lighthouse*
 - plural table names 

 ----- 

INTEGER, VARCHAR, TEXT, CHAR, DATE, BOOLEAN, TIMESTAMP


User
id -----
VARCHAR() VS TEXT
text is unlimited
varchar 150
 email,
varchar 150
username,
varchar 150 <-- ( bcrypt )
password, 
DATE or TIMESTAMP
created_at




Urls
varchar 150
long_url,
varchar 7
DATE or TIMESTAMP
short_url, created_at



Primary Key

Id (SERIAL) <----
Unique Identifier !!



Username, pass,

1 Derek,   123  
2 brandon  fff  

task, is_completed   user_id

dishes     false           1
 vaccuum    true           2



 Relationships -

 One to One
 one to many 
 many to many

 