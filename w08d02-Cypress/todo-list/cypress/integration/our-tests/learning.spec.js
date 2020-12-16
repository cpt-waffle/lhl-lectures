describe('we are just learning wth is cypress', () => {
    it('does stuff', () => {
        cy.visit('https://www.google.ca');
        cy.get('.gLFyf').type('Ramsay memes{enter}', {delay: 40});
        cy.get('[href="https://www.scarymommy.com/gordon-ramsay-memes-quotes/"] > .LC20lb > span')
        .click();
    })

})