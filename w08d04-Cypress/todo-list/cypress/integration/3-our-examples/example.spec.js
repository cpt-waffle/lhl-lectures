
describe('lets do some math with no UI', () => {
  it('checks if 2 + 2 is equal to 4', () => {
    expect(2+2).to.equal(4); // mocha + chai
  })

  //unfortunatly no test() blocks in Cypress
  // test(' if 2 + 2 is equal to 4', () => {
    
  // })
})


describe('we are going to make some fun tests for google.ca', () => {
  it(' goes to google.ca and searches cats', () => {
    cy.visit("https://www.google.ca/");
    cy.get('#APjFqb').type('cats{enter}', {delay: 2000});
  })
})