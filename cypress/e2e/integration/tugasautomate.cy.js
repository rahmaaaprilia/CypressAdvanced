/// <reference types="cypress" />

describe('Automate Test Saucedemo', () => {
    before(() => {
        cy.visit('https://www.saucedemo.com/')
        cy.get('.login_logo').should('contain.text', 'Swag Labs')
    });

    it('Login Saucedemo', () => {
      cy.fixture('user').then((user) => {
      cy.get('#user-name').type(user.username)
      cy.get('#password').type(user.password)
      cy.get('#login-button').click()

      cy.url().should('include', '/inventory.html')
      cy.get('.title').should('contain', 'Products')
        })
    });

    it('Inventory Page to add to chart', () => {
      cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('exist').click()
      cy.get('.shopping_cart_link').should('contain', '1')
    });

    it('Cart Page', () => {
        cy.get('.shopping_cart_link').click()
        cy.url().should('include', 'cart.html')
        cy.get('.title').should('contain', 'Your Cart')
    });

    it('Checkout', () => {
        cy.get('#checkout').click();
        cy.url().should('include', 'checkout-step-one.html')
        cy.get('#checkout_info_container').should('be.visible')

        cy.fixture('form').then((user) => {
        cy.get('#first-name').type(user.firstname)
        cy.get('#last-name').type(user.lastname)
        cy.get('#postal-code').type(user.id)
        cy.get('#continue').click()

        cy.url().should('include', 'checkout-step-two.html')
        cy.get('.title').should('contain', 'Checkout: Overview')
        })
    });

    it('Finish', () => {
        cy.get('#finish').click();
        cy.url().should('include', 'checkout-complete.html')
        cy.get('.title').should('contain', 'Checkout: Complete!')
    });
});