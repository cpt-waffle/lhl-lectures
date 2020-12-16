describe('', () => {
    // bunch tests, which are made with it(), or test()
    it(' tries to do stuff', () => {
        cy.visit('https://www.google.ca');
        cy.get('.gLFyf').type(`bird memes{enter}`, {delay: 200});
        cy.get('[href="https://www.shutterstock.com/search/funny+bird+memes"] > .LC20lb > span').click();
    })
})