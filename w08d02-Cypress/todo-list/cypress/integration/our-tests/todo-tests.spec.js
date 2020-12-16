describe('Todo App Tests', () => {
    it('visits our page', () => {
        cy.visit('/');
        cy.contains('Buy Milk', {timeout: 11000});
        // cy.get('.list').children().should('have.length', 4, {});
    })

    it('clicks done on "Buy Milk", verifies that it has been changed and then unclicks it', () => {
        cy.get(':nth-child(1) > .done').click();
        const item = cy.get('.list > :nth-child(1)');
        item.should('have.class', 'doneItem');
        cy.get('.undone').click();
        item.should('not.have.class', 'doneItem');
    })

    it('tries to submit an empty todo item(nothing entered), gets error "Cannot be Blank"', () => {
      cy.get('#submit').click();
      cy.contains(/Cannot be Blank/i);
    })

    it('submits a todo item and the list becomes 5 items', () => {
        // cy.visit('localhost:8001/api/debug/reset');
        // cy.visit('/');
        cy.get('input').type('do some cypress testing');
        cy.get('#submit').click();
        cy.get('.list').children().should('have.length', 5, {});
    })

    it('clicks all the items from done to undone', () => {
        cy.get('.done').click({ multiple: true });
    })

    it('clicks all the items from undone to done', () => {
        cy.get('.undone').click({ multiple: true });
    })

    it("does a wierd reset bug...", () => {
        cy.visit('/');
    })
    

})