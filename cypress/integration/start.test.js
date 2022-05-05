/// <reference types="cypress" />

it('user can start the questionnaire', () => {
    cy.visit('/')
    cy.get('.inline-block').click();
    cy.url().should('include', 'identification');    
})