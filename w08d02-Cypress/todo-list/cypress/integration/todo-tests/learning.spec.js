describe('lets try to go google.ca', () => {
    it('visits google.ca', () => {
        cy.visit('https://www.google.ca');
        cy.get('.gLFyf').type('pictures of cats');
        cy.get('#fbar').click('topLeft');
        cy.get('.FPdoLc > center > .gNO89b').click();
    })
})