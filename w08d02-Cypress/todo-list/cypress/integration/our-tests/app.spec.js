
describe('Tests for our Todo List', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get('.list > :nth-child(1)').as('firstElement');
  })


  it('Visits the app', () => {
    cy.get('h1').contains('Get Things Done!');
  })

  it(' able to check the first item, and to see that it is done', () => {
    cy.get(':nth-child(1) > .done').click();
   
    cy.get('@firstElement').should("have.class", 'doneItem')
  })

  it(' able to check the first item, and to see that it is done', () => {
    cy.get('.list > :nth-child(1) > .done').click();
    cy.get('@firstElement').should("have.class", 'doneItem')
  })

  it(' tries to submit an empty task, should fail', () => {
    cy.get('input');
    cy.get('#submit').click();
    cy.get('.done').should('have.length', 4);
    cy.contains('task cannot be blank!');
  })

  it(' submits a good task!', () => {
    cy.get('input').type('buy computer parts');
    cy.get('#submit').click();
    cy.get('.done').should('have.length', 5);
    cy.get('input').should("have.value", '');
  })
})