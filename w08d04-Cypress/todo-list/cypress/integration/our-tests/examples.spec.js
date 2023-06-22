
describe('our first test ever to check if 2 + 2 is equal to 4', () => {
  it('checks if 2 + 2 is equal to 4', () => {
    expect(2+2).to.equal(4);
  })
})

describe("google tests", () => {
  // visit() -- goes to the html url page, and attempts to visit that page
  it('attempts to visit google', () => {
    cy.visit('https://www.google.ca')
    cy.get('#APjFqb').type('cats{enter}', {delay: 900})
    // cy.get('.FPdoLc > center > .RNmpXc').click();
  })
})