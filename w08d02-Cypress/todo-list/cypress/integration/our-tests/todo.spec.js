describe('todo list tests', () => {

  beforeEach(() => {
    // const resetURL = 'http://localhost:8080/api/debug/reset';
    // cy.visit(resetURL);
    cy.visit('/');
    cy.get(':nth-child(1) > .done').as('firstButton')
  })

  it('goes to our app page', () => {
    cy.get('h1').contains(/get things done/i);
  })

  it('checks off first element in the app', () => {
    cy.get(':nth-child(1) > .done').click();
  })

  it('checks off first element and then it checks it back on', () => {
    // Aliasing  -- is a way to store a DOM element as reference in cypress
    //    its like using a variable in javascript, but this is done in cypress 
    // because of async functions
    //                       its a promise
    cy.get('@firstButton').click();
    cy.get('@firstButton').click();
  })

  it('tries to submit a blank task, gets an error and should not be able to', () => {
    cy.get('#submit').click();
    cy.contains(/cannot be blank!/i);
    cy.get('.listItem').should('have.length', 4)
  })

  it('fills in correct task to do, and submits it', () => {
    cy.get('input').type('finish testing in react!');
    cy.get('#submit').click();
    cy.get('.listItem').should('have.length', 5)
  })

})