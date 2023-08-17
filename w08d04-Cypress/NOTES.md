------------ Agenda -------------
- Different types of Testing
- Cypress
- What is Cypress?
- installing cypress
- Writing Tests
   - one for fun
   - one for an app
- Q&A


### Different Types of Testing

- Unit Testing  -- quick to write, quick to run, fast to test
- Integration Testing -- quick to write, quick to run, fast to test
- Static Testing  -- quick to write, quick to run, fast to test
- End to End Testing - quick(ish) to write, not quick to run, takes a lot of resources 

### As A User I want to make a short url by inputting a long URL'


### E2E

- Cypress

To install cypress, (in reality) you dont even need repo

in today's activities you will be installing it in the repo. (client folder)

```sh
npm install -D cypress@9.7.0
```

### Windows 10 - 11 and/or using WSL2 or 3

- install VCXRV (x server)
- disable your firewall!


-- windows firewall
-- mcafee 

### For Every system

go to package.json of client
and add the cypress command

```json
"cypress": "./node_modules/.bin/cypress open"
```

## To Run Cypress

`npm run cypress`