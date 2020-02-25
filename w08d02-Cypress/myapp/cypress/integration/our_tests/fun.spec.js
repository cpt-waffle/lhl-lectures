describe('FUN FUN FUN ', () => {
  it("Goes to google.ca", () => {
    cy.visit('https://www.google.ca')
    cy.get('.gLFyf.gsfi').type('hello world', {delay: 200})
    cy.contains('Google Search').click();
  })

});