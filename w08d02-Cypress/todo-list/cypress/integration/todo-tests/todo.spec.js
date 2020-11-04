describe('Todo tests', () => {
    it('goes to the application page', () => {
        cy.visit('/');
    })

    it('contains an item in the list which says "Buy Milk"', () => {
        cy.contains(/Buy Milk/i, {timeout: 11000});
    })

    it('clicks the item that says buy milk and switches it done', () => {
        cy.get(':nth-child(1) > .done').click();
        cy.get(':nth-child(1) > .doneItem');
    })

    it('tries to sumbit an empty item into the list', () => {
        cy.get('#submit').click();
        cy.contains(/cannot be blank/i);
    })

    it('submits a acceptable item into the list', () => {
        cy.get('.list').children().should('have.length', 4)
        cy.get('input').type('get a cat', {delay: 200});
        cy.get('#submit').click();
        cy.get('.list').children().should('have.length', 5)

    })

    it('refreshes the page, and makes sure that there are 4 items in list', () => {
        cy.visit('/');
        cy.get('.list').children().should('have.length', 4)
    })

    it('clicks on all of the items switching them to done', () => {
        cy.get('.done').click({multiple: true});
    })
    it('clicks on all of the items switching them to done', () => {
        cy.get('.undone').click({multiple: true});
    })
})