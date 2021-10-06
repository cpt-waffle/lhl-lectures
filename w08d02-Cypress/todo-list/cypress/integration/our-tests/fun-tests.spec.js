// we will start with the describe block to explain what the following tests will be 
// about

// we are going to have lots of "it" or "test" blocks to write our actuall tests

describe('tests for fun :)', () => {
    it('does something fun!!!!!', () => {
        cy.visit('/');
        const googleSearchInput = cy.get('.gLFyf');
        googleSearchInput.type('pictures of cats{backspace}{enter}', {delay: 600});
    })
})