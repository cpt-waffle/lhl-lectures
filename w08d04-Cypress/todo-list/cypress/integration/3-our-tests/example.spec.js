
describe('Our first test that doesnt even use the web or any website', () => {
  it('checks if 2 + 2 is equal to 4', () => {
    expect(2+2).to.equal(4);
  })

  it('goes on google.ca, searches cats', () => {
    // getById
    // findBy
    // findByTestId
    // getByPlaceholder
    cy.visit('https://www.google.ca');
    cy.get('#APjFqb').type('cats{enter}', {delay: 1000})
    cy.get('[href="/search?sca_esv=565345942&q=cats&tbm=isch&source=lnms&sa=X&ved=2ahUKEwjg452ptKqBAxVVkYkEHZIuBGUQ0pQJegQIDRAB"] > .GKS7s').click();
  })
})