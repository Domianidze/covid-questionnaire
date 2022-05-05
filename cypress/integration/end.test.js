/// <reference types="cypress" />

it('user should not be able to visit end page without data', () => {
    cy.visit('/end')
    cy.url().should('not.include', 'end');    
})