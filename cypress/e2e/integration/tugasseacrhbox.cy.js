/// <reference types="cypress" />


describe('Searchbox Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
    });

    // tampilan search: online
    it('Should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('online {enter}')
    });
    
    // hasil search online
    it('Should show search result page', () => {
        cy.get('h2').should('contain.text', 'Search Results:')

        cy.contains('The following pages were found for the query: online').should('be.visible')

        cy.contains('Zero - Free Access to Online Banking').should('be.visible');
        cy.contains('Zero - Online Statements').should('be.visible');
    });

});