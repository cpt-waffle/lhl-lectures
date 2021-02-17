describe('todo-app tests', () => {
    it('visits our application', () => {
        cy.visit('/');
    })

    it('clicks the first item in the list, and changes to to done', () => {
        // cy.get('.list>li>.done').eq(0);
        // cy.get('.done').first();
        const item = cy.get(':nth-child(1) > .done').click();
        item.should('have.class', 'undone');
        
    })

    it('unchecks the first item in the list', () => {
        const item = cy.get('.undone').click();
        item.should('not.have.class', 'undone');
    })

    it('clicks everything', () => {
        cy.get('.done').click({multiple: true});
    })

    it('submits a correct item into the list', () => {
        cy.get('input').type('do cypress testing', {delay: 20});
        cy.get('#submit').click();
        cy.get('.list>li').should('have.length', 5);
    })

    it('submits a incorrect item into the list, and shows a visual error', () => {
        cy.get('input').clear();
        cy.get('#submit').click();
        cy.get('.list>li').should('have.length', 5);
        cy.contains('Error! Cannot be Blank!');
    })

    it('submits a incorrect item into the list, and shows a visual error, then adds correct item', () => {
        cy.get('input').clear();
        cy.get('#submit').click();
        cy.get('.list>li').should('have.length', 5);
        cy.contains('Error! Cannot be Blank!');
        cy.get('input').type('do cypress testing', {delay: 20});
        cy.get('#submit').click();
        cy.get('.list>li').should('have.length', 6);
    })
})