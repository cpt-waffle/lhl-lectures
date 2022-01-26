
describe('Our App Tests', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/');
        cy.get('.list > :nth-child(1)').find('.done').as('click-btn');
      })


    it('2+2=4', () => {
        expect(2+2).to.equal(4);
    })

    it('visits our application', () => {
        cy.get('@click-btn').click();
    })

    it('clicks buy milk DONE icon and checks if its changed classes', () => {
        cy.get('@click-btn').click();
        cy.get('@click-btn').should('have.class', 'undone');
    })

    it('Clicks on everything', () => {
        cy.get('.done').click({ multiple: true });
    })

    it('tries to submit an EMPTY task, and app throws a error message!', () => {
        cy.get('.done').should('have.length', 4);
        cy.get('#submit').click();
        cy.get('.done').should('have.length', 4);
        cy.contains('Task Cannot be Blank!!!');
    })

    it('sumbits an empty task, then submits a correct task', () => {
        cy.get('.done').should('have.length', 4);
        cy.get('#submit').click();
        cy.get('.done').should('have.length', 4);
        cy.contains('Task Cannot be Blank!!!').as('error');
        cy.get('input').type('BUY ETH');
        cy.get('#submit').click();
        cy.get('.done').should('have.length', 5);
        cy.get('@error').should('not.exist');
    })
})