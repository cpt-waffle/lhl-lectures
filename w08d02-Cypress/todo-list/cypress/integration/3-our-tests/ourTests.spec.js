// describe 
// it  or tests blocks

describe('Random easy number check test', () => {
  it('tests if 2+2 is equal to 4', () => {
    expect(2+2).to.equal(4);
  })
})

describe('random actual test that visit a webpage', () => {
  it(' goes to google, searches for cats, clicks the first link', () => {
    cy.visit('https://www.google.ca')
    cy.get('.gLFyf').type('cats{enter}', {delay: 800});
    cy.get('.MUFPAc > :nth-child(2) > a').click();
  })
})