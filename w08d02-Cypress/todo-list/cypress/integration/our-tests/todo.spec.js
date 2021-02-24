
describe('todo-list tests', () => {

    it('goes to our page', () => {
        cy.visit('/')
    })

    it('clicks the first item on the list and checks it to be done', () => {
       cy.get('.list>li>.done').eq(0).click().should("have.class", 'undone');
    })

    it('clicks on remaining items, makes em all done', () => {
        cy.get('.list>li>.done').click({multiple: true});
    })

    it('clicks onitems, makes em all un-done', () => {
        cy.get('.list>li>.undone').click({multiple: true});
    })

    it('submits a correct item into the list', () => {
        cy.get('input').type('do some cypress');
        cy.get("#submit").click();
        cy.get('.list>li').should('have.length', 5);
    })

    it(" submits a incorrect item, form rejects it, does not add it into the list", () => {
        cy.get('input').clear();
        cy.get("#submit").click();
        cy.get('.list>li').should('have.length', 5);
    })

    it(" submits a incorrect item, form rejects it, does not add it into the list", () => {
        cy.get('input').clear();
        cy.get("#submit").click();
        cy.contains('Error! Form Cannot Be Blank!');
    })

})