/// <reference types="cypress" />

it('user can start the questionnaire', () => {
    cy.visit('/')
    cy.get('[datatestid="start-button"]').click();
    cy.url().should('include', 'identification');    
})