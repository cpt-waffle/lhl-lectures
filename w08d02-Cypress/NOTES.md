------------ Agenda -------------
- Different types of Testing
- Cypress
- What is Cypress?
- Writing Tests
   - one for fun
   - one for an app
- Q&A

## --------------------

Why We Test 

- having less downtime
- keeping your server running as long as possible
- releasing less bugs into prod
- $$ 

Kind of Tests

- unit  <-- quick, cheap
- integration <-- quick, cheap
- feature <--
- End to End <--- a server, a client, the tests themselves
time consuming, fun (the entire user story)

As a user, i want to be able to add an item to my todo list
  -> user goes on the webpage/app
  -> user focuses on the input field
  -> user writes down the item 
  -> user presses enter
  -> user sees that an item has been added to the list

## Cypress 

to install cypress:

npm install cypress --save-dev # in your frontend folder

add `"cypress": ./node_modules/.bin/cypress open` to your package.json

## How to Work with Cypress On Your own Project (Scheduler etc)

terminal 1 - frontend
terminal 2 - backend
terminal 3 - cypress