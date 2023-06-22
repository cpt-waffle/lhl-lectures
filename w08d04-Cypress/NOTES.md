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

- Unit Testing   -- quick to write, quick to run, faster to work through
- Integration Testing -- quick to write, quick to run, faster to work through
- Static Testing --  quick to run 
- End to End Testing -- expensive, and a bit slower 


### Cypress

how to install cypress

going into the directory of your project, and running:

```npm install -D cypress@9.7.0```

add the script into package.json

```
    "cypress": "./node_modules/.bin/cypress open"
```

##### Windows 10  or using WSL2

install VCXRV package from compass or find it yourself on google 

Firewalls 

-- windows firewall settings, xserver, give it a allow rule for public/private networks
-- turn off the windows firewall for the activity 
-- turn it back on when your done!
-- mcaffee -- TURN IT OFF 

### to run cypress

`npm run cypress`
