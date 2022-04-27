describe('Example Tests', () => {
  it(" tests for 2 + 2 is equal to 4", () => {
    expect(2 + 2).to.equal(4);
  })
  // cy.visit()
  it(" goes to google.ca", () => {
    cy.visit('https://www.google.ca')
    cy.get('.gLFyf').type('cats{enter}', {delay: 300})
    cy.get('.MUFPAc > :nth-child(2) > a').click()
  })
})