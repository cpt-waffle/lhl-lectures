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

Unit/Integration 

- JEST 
- Terminal

- cheap 

End to Testing 

- visual 
- expensive on time 
- expensive on resources


### E2E

- Cypress

to install cypress, (in reality you dont even need a repository)

in todays activities, you will asked to install a SPECIFIC version of cypress!

9.7.0

In compass, they ask you to install it `globaly`

in your frontend app (scheduler)

```sh
npm install -D cypress@9.7.0
```

Windows 10 

- install VCXRV (x server)
- disable your firewall ( add a rule to allow internal connections for VCXRV x server)
   - windows firewall 
   - mcaffee

### For Every system

go to your frontend folder (scheduler)
open up package.json
add this line: 

```json
"cypress": "./node_modules/.bin/cypress open"
```

### To Start Cypress

npm run cypress
