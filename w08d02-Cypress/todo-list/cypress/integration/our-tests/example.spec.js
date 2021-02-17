describe('lets have some fun for no reason', () => {
    it('goes to google.ca', () => {
        cy.visit('https://www.google.ca'); // visit a specific URL
        cy.get('.gLFyf').type('picture of derp cats{enter}'); // grab a specific HTML element on the page
        cy.get('#hdtb-msb-vis > :nth-child(2) > .hide-focus-ring').click();
    })
})