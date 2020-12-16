describe('todo tests', () => {

    it('visits our todo app', () => {
        cy.visit('/');
    })

    it('checks to see if there is a buy milk item in the list', () => {
        cy.contains('Buy Milk', {timeout: 11000});
    })

    it('clicks the first item in the list, and switches it to done', () => {
        cy.get(':nth-child(1) > .done').click();
        cy.get('.list > :nth-child(1)').should('have.class', 'doneItem');
        cy.get('.undone').click();
        cy.get('.list > :nth-child(1)').should('not.have.class', 'doneItem');
    });

    it('clicks the first item in the list, and switches it to done then refreshes', () => {
        cy.get(':nth-child(1) > .done').click();
        cy.get('.list > :nth-child(1)').should('have.class', 'doneItem');
    });

    it('types in a new item to list', () => {
        cy.get('input').type('get a cat').should('have.value', 'get a cat');
        cy.get('#submit').click();
    })

    it('after the previous test, we should have 5 items in the list', () => {
        cy.get('.list').children().should('have.length', 5);
    })

    it('i wanna click all the items at the same time to done', () => {
        cy.get('.done').click({ multiple: true});
    })

})