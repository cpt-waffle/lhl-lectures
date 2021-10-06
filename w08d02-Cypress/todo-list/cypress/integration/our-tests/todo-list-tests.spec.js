describe('todo-list tests', () => {
    it('visits our application', () => {
        cy.visit('/');
    })

    it('clicks on the first item and switches it to done!', () => {
        const doneButton = cy.get('.list>li>.done').eq(0) // eq() will select me only 1 btn
        doneButton.click();
        doneButton.should('have.class', 'undone');
        // cy.get(':nth-child(1) > .done').click().should('have.class', 'undone');
    })

    it('click on everything and make it switch to be completed!', () => {
        cy.get('.list>li>.done').click({multiple: true}).should('have.class', 'undone');
    })

    it('click on everything and make it switch to not completed', () => {
        cy.get('.list>li>.undone').click({multiple: true}).should('have.class', 'done');
    })

    it('submits a correct item into the list', () => {
        // const input = cy.get('input');
        cy.get('input').type('buy ETH (non financial advice)');
        cy.get('#submit').click();
        cy.get('input').should('have.value', '');
    })

    it('submits incorrect item', () => {
        cy.get('#submit').click();
        cy.get('.list>li').should('have.length', 5);
    })

    it('submits incorrect item, and get an error message', () => {
        cy.get('#submit').click();
        cy.contains('Error!, Input cant be blank!');
    })

})