beforeEach(() => {
  cy.visit('/')
  cy.get(':nth-child(1) > .done').as('first_item_done')
  // cy.visit('http://localhost:8001/api/debug/reset');
})


describe('todo list tests', () => {
  it('visits the todo list app and sees there is an h1 with Get things done', () => {
    cy.get('h1').should('have.text', 'Get Things Done!')
  })

  it('visits our page and checks that there is a first item that says Buy Milk', () => {
    cy.visit('/')
    cy.get('.list li h2').first().should('have.text' , 'Buy Milk')
    cy.get('.list li h2').last().should('have.text' , 'Write some Memes')
  });

  it('visits our page and clicks on the first items to be done', () => {
    // things are async when waiting
    // a promise
    // aliasing
    cy.get('@first_item_done').click()
    cy.get('@first_item_done').click()
    cy.get('@first_item_done').click()
    cy.get('@first_item_done').click()

  })

  it('tries to submit a correct task into the list', () => {
    cy.get('.list li').should('have.length', 4)
    cy.get('input').type('paint the last remaining walls with primer')
    cy.get('#submit').click()
    cy.get('.list li').should('have.length', 5)
    cy.get('input').should('have.value', '');
  })

  it('tries to submit an empty task, which it should not be able to',  () => {
    cy.get('.list li').should('have.length', 4)
    cy.get('#submit').click()
    cy.get('.list li').should('have.length', 4)
    cy.contains('cannot be blank!');
  })
})