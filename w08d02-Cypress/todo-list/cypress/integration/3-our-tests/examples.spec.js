// describe blocks
// it blocks
describe('sample tests', () => {
    it('tests for 2+2 is equal 4', () => {
        expect(2+2).to.equal(4);
    })

    it('visits google.ca', () => {
        cy.visit('https://www.google.ca/');
        //gLFyf gsfi
        cy.get('.gLFyf.gsfi').type('cats{enter}', {delay: 1000});
        cy.get('.MUFPAc > :nth-child(2) > a').click();
    })

    it('visits google.ca and finds dogs', () => {
        cy.visit('https://www.google.ca/');
        cy.get('.gLFyf.gsfi').type('dogs memes {enter}');
        cy.get('.MUFPAc > :nth-child(2) > a').click();
    })
})