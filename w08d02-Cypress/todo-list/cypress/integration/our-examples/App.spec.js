describe('Todo List E2E tests', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get(':nth-child(1) > .done').as('firstButton');
  })

  it('renders the app', () => {
    cy.get('h1').contains(/get things done!/i);
  })

  it('clicks on an first item in the list, and makes it done', () => {
    cy.get(':nth-child(1) > .done').click(5,10 );
  })

  it('clicks the first item and then unclicks it making it notdone', () => {
    // alias is like a variable for finding your dom elements and keeping them
    // as a reference
    cy.get('@firstButton').click(); // async promises
    cy.get('@firstButton').click();
  })

  it('tries to submit a blank task, it should not be able to', () => {
    cy.get('input');
    cy.get('#submit').click();
    cy.get('.listItem').should('have.length', 4);
    cy.contains(/cannot be blank!/i);
  })

  it('tries to submit a correct task, succeeds', () => {
    cy.get('input').type('buy ETH');
    cy.get('#submit').click();
    cy.get('.listItem').should('have.length', 5);
  })

})