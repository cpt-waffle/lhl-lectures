describe('First Test Ever', () => {
  it('checks if 2 + 2 is equal to 4', () => {
    expect(2+2).to.equal(4);
  })
})

// Can I web Scrape using cypress? // no
// Can I use it as a bot?          // no


describe('Google Tests', () => {
  it('go to google.ca and search up cats', () => {
    // anytime you need to go to URL/app/website
    cy.visit('https://www.google.ca')
    // getBy*** 
    cy.get('#APjFqb').type('cats{enter}', {delay: 900});
    cy.get('.MUFPAc > :nth-child(2) > a').click();
  })
})