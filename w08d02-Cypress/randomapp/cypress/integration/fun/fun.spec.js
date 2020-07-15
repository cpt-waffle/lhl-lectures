describe('FUN FUN', () => {
    it('Go to google.ca and search something', () => {
        cy.visit('https://www.google.ca');
        cy.get('.gLFyf').type('waffles', {delay: 600})
    })
})