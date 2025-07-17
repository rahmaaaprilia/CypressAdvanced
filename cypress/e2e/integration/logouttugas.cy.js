/// <reference types="cypress" />

describe('Logout Assertion', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
        cy.get('#signin_button').click()
    });

    it('Should try to login with invalid data', () => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.get('input[name="submit"]').click()
    });
    
    it('Should display error message', () => {
        cy.get('.alert-error').should('be.visible').and('contain.text', 'Login and/or password are wrong.')
    });

    // login dengan custom command
    it('Should login to application with valid data', () => {
    cy.fixture('user').then((user) => {
        cy.login(user.username, user.password)

        cy.get('h2').should('contain.text', 'Cash Accounts')
        })
    });

    it('Should logout from the application', () => {
        cy.contains('username').click()
        cy.get('#logout_link').click()
    
        // assertion logout
        cy.url().should('include', 'index.html')
        cy.get('#searchTerm').should('be.visible')
    });
});