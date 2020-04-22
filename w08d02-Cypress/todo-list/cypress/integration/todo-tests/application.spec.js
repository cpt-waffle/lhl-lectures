describe('Application tests', () => {
    it('At the very least... renders todo app on the screen', () => {
        cy.visit('/')
    })

    it('Clicks on everything', () => {
        cy.get('.done').click({multiple: true});
    })

    it('Clicks on everything AGAIN', () => {
        cy.get('.undone').click({multiple: true});
    })

    it('clicks only one item', () => {
        cy.get('.list > :nth-child(3) > .done').click();
    })

    it('adds an item to our list', () => {
        const formInput = cy.get('input');
        formInput.type('Homework;DROP TABLE users;');
        cy.get('#submit').click();
    })

    it('tries to inject javascript', () => {
        const formInput = cy.get('input');
        formInput.type("<script>alert('hello world');</script>");
        cy.get('#submit').click();
    })

    it('tries to submit an empty item', () => {
        const formInput = cy.get('input');
        formInput.type(' ');
        cy.get('#submit').click();
        cy.contains('CANNOT BE BLANK')
    })

    it('should have 6 items on the screen', () =>{
        cy.get('.list').find('li').should('have.length', 6)
    })

    it('finds an item in our list, and clicks the item', () => {
        cy.contains('Do Testing').parent().click('topRight');
        cy.contains('Do Testing').parent().click('top');
        cy.contains('Do Testing').parent().click('topLeft');
        cy.contains('Do Testing').parent().click('left');
        cy.contains('Do Testing').parent().click('right');
        cy.contains('Do Testing').parent().click('bottomRight');
        cy.contains('Do Testing').parent().click('bottom');
        cy.contains('Do Testing').parent().click('bottomLeft');

    })

})


// describe('More Application Tests....', () => {
//     it('At the very least... renders todo app on the screen', () => {
//         cy.visit('/')
//     })

//     it('tries to submit an empty item', () => {
//         const formInput = cy.get('input');
//         formInput.type(' ');
//         cy.get('#submit').click();
//         cy.contains('CANNOT BE BLANK')
//     })
// })