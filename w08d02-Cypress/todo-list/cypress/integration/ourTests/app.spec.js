
describe('Todo App tests', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('.list > :nth-child(1)').as('first-todo-item');
    })


    it("visits our application", () => {
        cy.get('@first-todo-item').find('.done');
        // dont do this!!!! (sometimes it will work, and sometimes
        // it will not)
        //  btn.click(); <------------------- BAD!! DO NOT DO!!
        // -------- alias ---------
        //  .as('first-todo-item'); <--- this sets the alias
        cy.get('@first-todo-item').find('button').click(); // <--- this calls upon it to get the alias back
        cy.get('@first-todo-item').find('button').should('have.class', 'undone');
    })


    it('tries to submit a blank task (bad)', () => {
        cy.get('input').type("{enter}");
        cy.contains(/task cannot be blank!!!/i);
        // cy.get('#submit').click();
    })

    it('tries to submit blank, then submits a correct task', () => {
        cy.get('input').type('turn on the dishwasher after lecture');
        cy.get('#submit').click();
    })
})
