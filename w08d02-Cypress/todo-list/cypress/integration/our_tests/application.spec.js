describe('Full on Application Tests', () => {
  it('At the very least, goes to our app page, and renders', () => {
    cy.visit('/');
  })

  it('CLICK EVERYTHING', () => {
    cy.get('.done').click({multiple: true});
    cy.get('.undone').should('have.length',4);
  })

  it('UNCLICKS EVERYTHING', () => {
    cy.get('.undone').click({multiple: true});
  })

  it('contains item "BUY MILK"', () => {
    cy.contains('Buy Milk')
  })

  it('Clicks only One item', () => {
    cy.get('.done').first().click();
  })

  it('Adds an Item to our list', () => {
    cy.get('input').type('Cool testing', {delay: 100});
    cy.get('form > button').click();
  })

  it('Should not be able to add an empty item', () =>{
    cy.get('input').type(' ', {delay: 100});
    cy.get('form > button').click();
    cy.contains('CANNOT BE BLANK');
  })


  it('CLICK ALL AROUND THE Item', () => {
    cy.contains('Do Testing').parent().click('topLeft')
    cy.contains('Do Testing').parent().click('left')
    cy.contains('Do Testing').parent().click('right')
    cy.contains('Do Testing').parent().click('bottomRight')


  })

  it('clicks on specific element', () => {
    cy.get(':nth-child(3) > .done').click();
  })

})
