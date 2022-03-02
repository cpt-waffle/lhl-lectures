
describe('Sample Tests', () => {
    it(" tests for 2 + 2 is equal to 4", () => {
        expect(2 + 2).to.equal(4);
    })

    // visit command
    //  --- goes to the specific webpage/app

    // xit, .only
    it("visits google.ca", () => {
        cy.visit('https://www.google.ca/')
        cy.get('.gLFyf').type("best buy maple on{enter}",
        { delay: 10});
    })
})