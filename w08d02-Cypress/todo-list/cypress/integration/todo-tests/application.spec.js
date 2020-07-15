describe('TodoList tests', () => {
    it('At the very least.... renderes todo app on the screen', () => {
        cy.visit('/');
    })

    it('Clicks ON everything', () => {
        cy.get('.done').click({multiple: true});
    })

    it('Clicks ON everything AGAIN', () => {
        cy.get('.undone').click({multiple: true});
    })

    it('clicks on 3rd item', () => {
        cy.get(':nth-child(3) > .done').click();
    })

    it('spams the submit button', () => {
        cy.get('#submit').click();
        cy.get('#submit').click();
        cy.get('#submit').click();
        cy.get('#submit').click();
        cy.get('#submit').click();
        cy.get('#submit').click();
    })

    it('submits a real item into the list', () => {
        cy.get('input').type('try cypress for first time');
        cy.get('#submit').click();
        cy.get('.list').find('li').should('have.length', 5);
    })

    it('it does a refresh of the page', () => {
        cy.visit('/');
    })

})