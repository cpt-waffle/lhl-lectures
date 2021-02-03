--- Agenda ---

- Review - 
Database - what and why?
Express Server - What and why?
How do we conceptualize the two working togheter ?

JS + SQL
BREAK
JS + Express + SQL


Databases persist data 
data storage system
persist
organize
keep it secure
easier to update
Accuracy

NodeJS/Express
- create interface and communication
- deliver content
- control content
- concurrency -- helpful for scaling 

Database + Node

Client              HTTPS                Server
---------------------req------------------>
                                         DOES SOMETHING...
<--------------------res-------------------
GET /bank_account/:id     

(Check if cookie/session is the same as the id, then respond back with corrent user info)
(otherwise return to home page)


Lets just say...we do not need server (express)

Client                                   DB
---------------------req----------------->
<--------------------data-----------------

SECURITY FLAW
Client can do whatever they wish to with data

Client             SERVER               DB
-----------req--->does logic------------>
    <---res------   logic   <---data----