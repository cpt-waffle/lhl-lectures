------------ Agenda -------------
- Different types of Testing
- Cypress
- What is Cypress?
- installing cypress
- Writing Tests
   - one for fun
   - one for an app
- Q&A



## Different Types of Testing

- Unit Tests
- Integration Tests
- Function Tests
- static Tests
- E2E  -- End to End
-  How the backend works, how the frontwords, how the frontend interacts with the user
-- (User Story Testing (A Vasiliy Term***))

## Cypress

Installation of Cypress

### FRONTEND

`npm install -D cypress@9.7.0` -- 
-- add to package.json (scheduler)
`"cypress": "./node_modules/.bin/cypress open"`

### Backend setup

-- in scheduler_api 
-- `env.development`
--  ^--- copy that file and paste/rename `env.test`
-- DATABASE=scheduler_developement --- scheduler_test (REPLACE WIHT SCHEDULER_TEST)
   --- psql (logged in as development:development)
   --- create database scheduler_test
   --- \q
-- `NODE_ENV=TEST npm start` <-- the command to start everything

-- `localhost:8080/api/debug/reset`

### For the windows users ( The ones that are running WSL2/VM)

-- needs to install XCV Server (X server)
-- link in compass

-- IF IT DOES NOT WORK --- that means you have a firewall issue
-- TURN OFF YOUR FIREWALL FOR A BIT
-- (make a rule in the firewall to allow internal connections to X server)


