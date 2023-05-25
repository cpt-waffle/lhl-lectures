------------ Agenda -------------
- Different types of Testing
- Cypress
- What is Cypress?
- installing cypress
- Writing Tests
   - one for fun
   - one for an app
- Q&A


### Why we test ??

-- Testing is only good, when you are mid level of an app in 
-- TDD you write test first, make sure it fails, and then write code to pass it

### Different Types of Testing

- Unit Testing
- Integrationg Testing
- Static Testing 
- E2E Testing (the most expensive tests)

### Cypress

## installation of Cypress

This is installed on the front-end of your application

`npm install -D cypress@9.7.0`

## -------------------------------------------

### FOR WINDOWS ONLY

install VCXSRV package (X Server)

Turn off your firewall!
McAfee Firewall <--

## -------------------------------------------

### Go into your package.json, of the front-end application

add the following line of code:

```json
   "scripts": {
      "cypress": "./node_modules/.bin/cypress open",
   }
```

### To start cypress

`npm run cypress `

### To start testing your application you will need to run

- backend server (test mode)
- frontend server
- cypress framework