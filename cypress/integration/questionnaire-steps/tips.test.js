/// <reference types="cypress" />

describe('tips step', () => {
    beforeEach(() => {
      cy.fillInIdentification();
      cy.wait(750);
      cy.fillInCovid();
      cy.wait(750);
      cy.fillInVaccine();
      cy.wait(750);
    });
    it('user can not go to next page if they did not fill out the from', () => {
      cy.get('.w-44').click();
      cy.contains('ველი სავალდებულოა').should('be.visible');    
    });
    it('user should be able to go to next step if they fill out the form with valid data', () => {
        cy.fillInTips();
        cy.url().should('include', 'end');     
        cy.intercept('POST', 'https://covid19.devtest.ge/api/*', {
            statusCode: 200,
        });
        cy.wait(1000)
    })
  });
  