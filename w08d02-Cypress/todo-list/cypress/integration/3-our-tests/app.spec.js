// beforeEach x
// alias      x

describe('Tests for Todo List', () => {
  beforeEach(() => {
    cy.visit('/');
  })

  it('visits the app', () => {

    cy.get(':nth-child(1) > .done').click();
    cy.get(".list > :nth-child(1)").should('have.class', 'doneItem');
  })

  it('visits the app, and clicks on the 2nd element to be done', () => {
    cy.get(".list > :nth-child(2)").as('secondElement');
    cy.get(".list > :nth-child(2) > .done").click();
    cy.get('@secondElement').should('have.class', 'doneItem');
  })

  it('visits the page, and counts number of items i have todo', () => {
    cy.get(".done").should('have.length', 4)
  })

  it('visits the page, and adds a new item to the list', () => {
    cy.get(".done").should('have.length', 4);
    cy.get('input').type('buy ETH');
    cy.get('#submit').click();
    cy.get(".done").should('have.length', 5);
  })

  it('visits the page, tries to sumbit empty item, nothing gets added', () => {
    cy.get(".done").should('have.length', 4);
    cy.get('#submit').click();
    cy.get(".done").should('have.length', 4);
  })

  it("tries to sumbit empty item, gets an error, nothing gets added", () => {
    cy.get(".done").should('have.length', 4);
    cy.get('#submit').click();
    cy.get(".done").should('have.length', 4);
    cy.contains('task cannot be blank!')
  })
})