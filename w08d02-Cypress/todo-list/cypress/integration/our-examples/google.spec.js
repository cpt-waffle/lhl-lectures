describe('Google Tests', () => {
  it('goes to google, searches cats, goes to images', () => {
    cy.visit('https://www.google.ca')
    cy.get('.gLFyf').type('cats{enter}', {delay: 800})
  })
})