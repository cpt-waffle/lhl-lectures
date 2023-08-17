
describe('Our first test that does nothing on the web', () => {
  it("checks if 2 + 2 is equal to 4", () => {
    expect(2 + 2).to.equal(4);
  })

  it('visits google.ca and searches for cats', () => {
    cy.visit('https://www.google.ca')
    cy.get('#APjFqb').type('cats{enter}');
    cy.get('.g > :nth-child(1) > [jscontroller="SC7lYd"] > .kvH3mc > .jGGQ5e > .yuRUbf > :nth-child(1) > a > .TbwUpd').click()
  })
})