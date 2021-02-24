

describe('lets have some fun times!', () => {
    it('does something fun', () => {
        cy.visit('https://www.google.ca');
        const googleInputSearchField = cy.get('.gLFyf.gsfi');
        googleInputSearchField.type('pictures of cats{enter}');
        // cy.get('[href="https://pixabay.com/images/search/cat/"] > .LC20lb > span').click();
        // cy.get('.FPdoLc > center > .gNO89b').click();
    })
})

// web scraping....
// taking info/parsing info
// <div> 
//   <p>Toronto to MTL      <span><h2>Price: 40$ </h2></span></p>
// </div>

