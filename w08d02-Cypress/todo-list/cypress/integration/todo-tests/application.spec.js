describe('Todo tests', () => {
   it('Renders the application', () => {
        cy.visit('/')
    });

    it('has an item wich says, Buy Milk', () => {
        cy.visit('/')
        cy.contains(/buy milk/i);
    })

    it('Clicks on only the first item and makes it DONE!', () => {
        cy.visit('/')
        cy.get(':nth-child(1) > .done').click();
    })

    it('Clicks ALL THE items in the list', () => {
        cy.visit('/')
        cy.get('.done').click({ multiple: true });
    })

    it('Clicks all the items into the undone state', () => {
        cy.visit('/')
        cy.get('.done').click({ multiple: true });
        cy.get('.undone').click({ multiple: true });
    })


    it('types a new item, submits it, and we now have 5 items', () => {
        cy.visit('/')
        cy.wait(3200);
        cy.get('input').type('do cypress testing');
        cy.get('#submit').click();
        cy.get('.list').children().should('have.length', 5);
    })

    it('tries to submit an item that is empty, but gets an error/warning', () => {
        cy.visit('/')
        cy.wait(3200);
        cy.get('#submit').click();
        cy.contains(/cannot be blank/i);
    })


})

describe('Bad Todo Tests', () => {
    it('Looks for items that have been submitted, and it counts them There should 4', () => {
        cy.visit('/')
        cy.wait(3200);
        cy.get('.list').children().should('have.length', 4);
    })
})