describe('todo list tests', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get(':nth-child(1) > .done').as('firstBTN');

  })

  it('visits the application', () => {
    cy.contains(/get Things done/i);
  })

  it('finds the first element in our list, and clicks that item', () => {
    cy.get(':nth-child(1) > .done').click();
  })

  it('finds the the first element in our list, clicks and then unclicks it', () => {
    cy.get('@firstBTN').click();
    cy.get('@firstBTN').click();
    cy.get('@firstBTN').click();
    cy.get('@firstBTN').click();
    cy.get('@firstBTN').click();
    cy.get('@firstBTN').click();
    cy.get('@firstBTN').click();

    // cy.get('input').type('test').clear().tepe('test')
  })

  it('tries to submit a correct item into the todo list', () => {
    cy.get('.listItem').should('have.length', 4);
    cy.get('input').type('finish cypress testing!{enter}');
    cy.get('.listItem').should('have.length', 5);
  })

  it('tries to submit an incorrect task', () => {
    cy.get('.listItem').should('have.length', 4);
    cy.get('input').type("{enter}")
    cy.get('.listItem').should('have.length', 4);
    cy.contains(/cannot be blank/i);
  })

})