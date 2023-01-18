// describe block
describe("Random Example Test to try things out!", () => {
  it('tests if 2 + 2 is equal to 4', () => {
    expect(2+2).to.equal(4);
  })

  it('visits google, and looks for cats', () => {
    //cy.visit() -- visits the specific url
    cy.visit('https://www.google.ca');
    // cy.get('.classes')
    // cy.get('#ids')
    cy.get('.gLFyf').type('cats{enter}', {delay: 500});
    cy.get('#rso > :nth-child(2) > .MjjYud > .g > .GLI8Bc > .jGGQ5e > .yuRUbf > a > .LC20lb').click();
  })
})


// it blocks