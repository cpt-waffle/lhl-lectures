------------ Agenda -------------
- Different types of Testing
- Cypress
- What is Cypress?
- installing cypress
- Writing Tests
   - one for fun
   - one for an app
- Q&A

##############################

##  Why We Test

- time ( when writting first tests, its slow, but eventually things get much quicker)
- stability of your app 
- saves a bit of $

## Different Tests

- unit testing -- quick, cheap
- integration tests -- quick, cheap
- End to End testing -- time consuming

## End to End Testing

You get to test your app, as it runs ( just like in prod)
getting the data, showing the data, user clicking on things, user typing things
, etc

### Installing Cypress

1) In your `client` (scheduler) install cypress
*IN COMPASS IT WILL ASK YOU TO INSTALL IT GLOBALLY `npm i -g cypress@9.7.0`
`npm i -D cypress@9.7.0`

2)

add in `package.json` the command script to run cypress:

```
"scripts": {
   "cypress":"./node_modules/.bin/cypress open",
   ....
}
```

**WSL2 and anyone using firewalls 

^ disable your firewall!!

3) 

you will run `3 terminals` 

terminal 1 -- frontend 'npm start'
terminal 2 -- backend (but in test/error mode) 
(scheduler-api)
"test:server": "NODE_ENV=test npm start"
// visit http://localhost:8001/api/debug/reset
terminal 3 -- runs cypress


