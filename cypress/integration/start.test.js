/// <reference types="cypress" />

it('user can start the questionnaire', () => {
    cy.visit('/')
    cy.get('[dataTestId="start-button"]').click();
    cy.url().should('include', 'identification');    
})