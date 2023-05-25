describe('Our first Test EVer', () => {
  it('checks if 2 + 2 is equal to 4', () => {
    expect(2+2).to.equal(4);
  })
})


describe('google tests', () => {
  it('goes to google.ca, searches cats', () => {
    cy.visit('https://www.google.ca')
    cy.get('#APjFqb').type('cats{enter}', {delay: 700});
  })
})