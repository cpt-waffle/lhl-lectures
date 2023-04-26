------------ Agenda -------------
- Different types of Testing
- Cypress
- What is Cypress?
- installing cypress
- Writing Tests
   - one for fun
   - one for an app
- Q&A


## Why Do We Test?

- to avoid errors a user might make that will break code
- code works as expected
- edge cases
- test driven development practices !


- Save Time ( in the long run! )
- Save Money (hopefully less downtime !)
- Save your weekend 
---> NEVER DEPLOY ON A FRIDAY 
(prob best to deploy on a tuesday)

### Different Types of Testing

- Unit Testing
- Integration Testing 
- Static Test
- E2E Testing (Today!)


End to End Testing
(User Story Testing)

"I have expensive Taste..."

### Cypress

The testing framework we will use for E2E testing!

### Installation Notes!

In Compass it will ask you to install this packages Globally
`-g`

`npm install -D cypress@9.7.0`

-- add a command to package.json

```json
    "cypress": "./node_modules/.bin/cypress open"
```

### FOR WINDOWS ONLY

if you installed the VcXSrv package, and you are still encountering an error,
this maybe due to a firewall issue.

Advice: Turn off the windows firewall for a the remainder of the activities, once done turn it back on!

McAfee Firewall, TURN THAT OFF AS WELL!!


### Starting to write your tests

- Run your react application scheduler in a terminal
- for backend, you will need to make ANOTHER .env file
  ^--- env.development 
  ^--- env.test
  ```json
  database scheduler_test
  password: development
  ```
- you need to CREATE A NEW DATABASE scheduler_test
- when you are inside of psql `CREATE DATABASE scheduler_test OWNER development;`

- Run your backend server in a terminal 
  ^--- (needs to run development mode )
`NODE_ENV=TEST npm start`

- visit `localhost:8080/api/debug/reset`

- run cypress in another terminal 

### (3 terminals in total!)