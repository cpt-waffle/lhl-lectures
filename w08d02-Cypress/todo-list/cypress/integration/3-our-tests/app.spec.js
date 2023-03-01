describe('E2E tests for todo list', () => {
  it('renders the app', () => {
    cy.visit('/');
    cy.get('h1').contains(/get things done!/i);
  })

  // beforeEach
  beforeEach(() => {
    cy.visit('/');
    // aliasing
    cy.get('.list > :nth-child(1)').as('firstElement');
    
  })


  it('clicks the first item and the first item changes to done', () => {
    cy.get('@firstElement').should('have.class', 'listItem');
    cy.get(':nth-child(1) > .done').click();
    cy.get('@firstElement').should('have.class', 'doneItem');
  })

  it('clicks the first item and the first item changes to done then unclicks to undone', () => {
    cy.get('@firstElement').should('have.class', 'listItem');
    cy.get(':nth-child(1) > .done').click();
    cy.get('@firstElement').should('have.class', 'doneItem');
    cy.get('.undone').click();
    cy.get('@firstElement').should('have.class', 'listItem');
  })

  it('tries to submit an empty task, and it fails, while getting an error "task cannot be blank!"', () => {
    cy.get('input');
    cy.get('#submit').click();
    cy.get('.listItem').should('have.length', 4);
    cy.contains(/cannot be blank!/i);
  })

  it('tries to submit a correct task!', () => {
    cy.get('input').type('Buy a new watch');
    cy.get('#submit').click();
    cy.get('.listItem').should('have.length', 5);
  })

})