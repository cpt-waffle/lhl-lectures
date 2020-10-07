describe('lets go to google.ca', () => {
    it('Visit google.ca', () => {
        cy.visit('https://www.google.ca');
    })

    it(' selects the input field of google', () => {
        cy.get('.gLFyf.gsfi').type('pictures of cats');
        cy.get('#footer').click('topLeft');
        cy.get('.FPdoLc > center > .gNO89b').click();
    })
})