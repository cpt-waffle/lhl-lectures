beforeEach(() => {
  cy.visit('/');
})


describe('application tests', () => {
  it('visits the app', () => {
    cy.get('h1').should('have.text', 'Get Things Done!');
  })

  it("visits the app, and checks if we have the first and last item", () => {
    cy.get('.list li:nth-child(1) h2').should('have.text', "Buy Milk");
    cy.get('.list li:nth-child(2) h2').should('have.text', "Do Testing");
    cy.get('.list li:nth-child(4) h2').should('have.text', "Write some Memes");

  })

  it('visits the app, and clicks on the first item to be done', () => {
    // const button =  cy.get('@first_item') // DONT DO THIS :(
    cy.get('.list li:nth-child(1) .done').as('first_item');
    cy.get('@first_item').click();
    cy.get('@first_item').should('have.class', 'undone');
  })

  // Jest
  // data-id
  // data-test-id
  it('tries to submit a correct task into the list', () => {
    cy.get('.list li').should('have.length', 4);
    cy.get('input').type('write a passing test and a failing test');
    cy.get('[data-cy="submit"]').click();
    cy.get('.list li').should('have.length', 5);
  })


  it('tries to submit a correct task into the list', () => {
    cy.get('.list li').should('have.length', 4);
    cy.get('input')
    cy.get('[data-cy="submit"]').click();
    cy.get('.list li').should('have.length', 4);
    cy.contains('Task cannot be Blank!');
  })
})