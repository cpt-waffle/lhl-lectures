
describe('todo list tests', () => {

  beforeEach(() => {
    cy.visit('/');
    cy.get(':nth-child(1) > .done').as('first_item_button');
    // cy.visit('http://localhost:8001/api/debug/reset');
  })



  it("visits our page", () => {
    cy.get('h1').should('have.text', 'Get Things Done!')
    cy.get('.list li').last();
  })

  it('visits our page and checks that there is a first item that says buy milk', () => {
    cy.get('.list li h2').first().should('have.text', 'Buy Milk');
  })


  it('visits our page and clicks the first item to be done', () => {
    cy.get(':nth-child(1) > .done').click();
  })

  it('visits our page and clicks the first item to be done then unclicks it', () => {
    cy.get('@first_item_button').click();
    cy.get('@first_item_button').click();
    cy.get('@first_item_button').click();
    cy.get('@first_item_button').click();
    cy.get('@first_item_button').click();
    cy.get('@first_item_button').click();
    cy.get('@first_item_button').click();
    cy.get('@first_item_button')
  })

  it('tries to submit a correct task into the list', () => {
    cy.get('.list li').should('have.length', 4);
    cy.get('input').type('buy eth', {delay: 400});
    cy.get('#submit').click('bottomLeft');
    cy.get('.list li').should('have.length', 5);
  })

  it('tries to submit an empty task, and should have an error', () => {
    cy.get('.list li').should('have.length', 4);
    cy.get('#submit').click();
    cy.get('.list li').should('have.length', 4);
    cy.contains('cannot be blank!');
  })
})