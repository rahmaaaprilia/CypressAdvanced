/// <reference types="cypress" />

describe('Navbar Test', () => {
    before(() => {
         cy.visit('http://zero.webappsecurity.com/index.html')
    });

    it('Should display online banking content', () => {
        cy.get('#onlineBankingMenu').click()
        cy.url().should('include', 'online-banking.html')

        //assertion tambahan
        cy.get('h3').should('contain.text', 'Our Bank is trusted by over 1,000,000 customers world wide.')
        cy.get('#online_banking_features').should('be.visible')
    });

    it('Should display feedback content', () => {
        cy.get('#feedback').click()
        cy.url().should('include', 'feedback.html')

        //assertion tambahan
        cy.get('form').should('be.visible')
        cy.get('input[name="name"]').should('be.visible')
        cy.get('input[name="email"]').should('be.visible')
        cy.get('input[name="subject"]').should('be.visible')
        cy.get('textarea[name="comment"]').should('be.visible')
    });

    it('Should display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')

        //assertion tambahan
        cy.get('#onlineBankingMenu').should('be.visible')
        cy.get('#feedback').should('be.visible')
    });
});