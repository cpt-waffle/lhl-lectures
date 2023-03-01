------------ Agenda -------------
- Different types of Testing
- Cypress
- What is Cypress?
- installing cypress
- Writing Tests
   - one for fun
   - one for an app
- Q&A



#### Why we Test

- time (when writing first tests, its slow on time, but eventually testing app vs writings tests, makes it faster to test the entire app)
- stability for the app 
- less downtime/bugs
- saves a bit $$

#### Different Types of Tests

- Unit Tests -- quick, cheap
- Integration Tests -- quick, and cheap
- End to End Tests -- time consuming

### End to End Testing

You get test every aspect of your app, as an end user (backend/frontend/database)


### Cypress!

Installing cypress

```sh
npm i -D cypress@9.7.0
# add into package.json the following scripct command 
# "cypress": "./node_modules/.bin/cypress open"
```
Run Cypress in terminal with

`npm run cypress`

#### For Windows Users

WSL2 -- Is your firewall on? (windows defender, mccaffee)
TURN IT OFF
xcv screen  X Server 


### How to start writting and running tests for your app

- 3 terminals 
 - term 1 runs your scheduler/react app
 - term 2 runs your backend (ran in development mode) (be sure to visis /api/debug/reset)
 - term 3 runs your cypress framework


 