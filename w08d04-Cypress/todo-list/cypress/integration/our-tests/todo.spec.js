
describe('todo list tests', () => {

  beforeEach(() => {
    // cy.visit('http://localhost:8001/api/debug/reset)
    cy.visit('/')
    cy.get(':nth-child(1) > .done').as('firstItemButton');
    cy.get('#submit').as('submitBtn');
  })


  it('visits our todo app', () => {

  })

  it('clicks the first item done ', () => {
    // aliasing
    // is a way to set "variables" or "references" in cypress
    cy.get('@firstItemButton').click();
    cy.get('@firstItemButton').click();
    cy.get('@firstItemButton').click();
    cy.get('@firstItemButton').click();
    cy.get('@firstItemButton').click();
    cy.get('@firstItemButton').click();
    cy.get('@firstItemButton').click();
    cy.get('@firstItemButton').click();
    cy.get('@firstItemButton').click();
    cy.get('@firstItemButton').click();

  })

  it('tries to submit a correct item into the list', () => {
    cy.get('.listItem').should('have.length', 4);
    cy.get('input').type('write some cypress tests');
    cy.get('@submitBtn').click();
    cy.get('.listItem').should('have.length', 5);
  })

  it('tries to submit an incorrect item, we expect not to be added', () => {
    cy.get('.listItem').should('have.length', 4);
    cy.get('@submitBtn').click();
    cy.get('.listItem').should('have.length', 4);
    cy.contains(/cannot be blank/i);
  })


})