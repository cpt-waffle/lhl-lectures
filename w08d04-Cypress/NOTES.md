------------ Agenda -------------
- Different types of Testing
- Cypress
- What is Cypress?
- installing cypress
- Writing Tests
   - one for fun
   - one for an app
- Q&A


### Different Types Of Testing

- unit/integration
- End to End (E2E)
- Static


## End To End Testing

you get to test your app all the way through

storyboard testing
user stories testing


### Cypress!

- end to end testing system (+ more)
- alot of visuals 
- industry standards 


### Installing Cypress (for scheduler)*

```sh
npm install cypress@9.7.0 --save-dev
```

Windows 10 using WSL2 

- install VCXRV (x-server)
- disable your firewall (add a rulle to allow internal internet connections for X-server)


### Add a line of code to package.json so we are able to start cypress

```json
scripts: {
   ...
   "cypress": "./node_modules/.bin/cypress open",
}
```


### Jest Commands


getByText
GetByPlaceholderName
getByTestId


debug()


### What are some benefits and drawbacks between Jest and Cypress ??


Cypress 
 - visuals
 - see what happens
 - checks to see if your frontend and backend is working together correctly!



### To start Writing Tests for your application

- make sure you have the:
- frontend app running   (terminal 1)
- backend server running (terminal 2)
- cypress is on          (terminal 3)