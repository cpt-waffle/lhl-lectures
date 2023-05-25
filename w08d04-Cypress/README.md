#### Cypress Testing

__Overview__

Yesterday we looked into Unit testing.

`Unit Testing` -  the idea of testing single peice of code in isolation. We were writting tests for components and functions alike, and everything was isolated.

`Integration Testing` -  the test in passing information from place to other.

`End to End Testing` - Full on user story testing. We fake a user (with our program tests) to click through an app and track what things happen.

#### Cypress - an End to End Testing Suite

Cypress is a great way to start testing end to end. You can mimick a user clicking and doing interactions to the app. You will also need to setup a testing database since, your app will be doing API calls.

In short, we will be running, `cypress`, `backend`, and `client` all toghther.

#### Installation

In react app

`npm install cypress --save-dev`

add this to your package.json

`"cypress": "node_modules/.bin/cypress open",`

Make sure your app is running

`npm start`

then open another terminal and run.

`npm run cypress`

#### Where to Look ?

Well since we just installed, cypress provides us an `examples` file with ALL of the examples. Have a look in `cypress/integration/examples`

#### Let's Write Some Tests

Same Idea as before: start with a `describe` block that has `it` blocks which is each test.

```js
describe('Application Test', () => {
  it('At the very least renders our app', () => {
    cy.visit('/');
  })

  it('Clicks everything', () => {
    cy.get('.done').click({ multiple: true});
    cy.get('.undone').should('have.length', 4);
  })

  it('Unclicks Everything', () => {
    cy.get('.undone').click({ multiple: true });
    cy.get('.done').should('have.length', 4);
  })

  it('contains atleast "Buy Milk" item', () => {
    cy.contains("Buy Milk");
  })

  it('Clicks only one item ', () => {
    cy.get('.done').first().click();
    cy.get('.undone').should('have.length', 1);
  })

  it('Adds an item to our list', () => {
    cy.get('input').type('Hello, World', { delay: 200 });
    cy.get('form > button').click();
    cy.get(".done").should('have.length', 4);
  })

  it('Clicks everyhwere on "Do Testing"', () => {
    cy.contains("Do Testing").parent().click('topLeft');
    cy.contains("Do Testing").parent().click('top');
    cy.contains("Do Testing").parent().click('topRight');
    cy.contains("Do Testing").parent().click('bottomLeft');
    cy.contains("Do Testing").parent().click('bottomRight');
  })


  it('Should not be able to submit an empty', () => {
    cy.get('input').type(' ');
    cy.get('form > button').click();
  })
})
```