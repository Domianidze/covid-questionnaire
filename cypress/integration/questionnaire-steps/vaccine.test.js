/// <reference types="cypress" />

describe('vaccine step', () => {
  beforeEach(() => {
    cy.fillInIdentification();
    cy.wait(750);

    cy.fillInCovid();
    cy.wait(750);
  });

  it('user can not go to next page if they did not fill out the from', () => {
    cy.get('[datatestid="next-step-btn"]').click();
    cy.contains('ველი სავალდებულოა').should('be.visible');
  });

  it('different componnets should appear based on user input', () => {
    cy.get('#vaccine-yes').click();
    cy.contains('აირჩიე რა ეტაპზე ხარ').should('be.visible');

    cy.get('#first_dosage_and_not_registered_yet').click();
    cy.contains('რომ არ გადადო, ბარემ ახლავე').should('be.visible');

    cy.get('#vaccine-no').click();
    cy.contains('რას ელოდები').should('be.visible');

    cy.get('#had_covid_and_planning_to_be_vaccinated').click();
    cy.contains(
      'ახალი პროტოკოლით კოვიდის გადატანიდან 1 თვის შემდეგ შეგიძლიათ ვაქცინის გაკეთება.'
    ).should('be.visible');
  });

  it('user should be able to go to next step if they fill out the form with valid data', () => {
    cy.fillInVaccine();
    cy.url().should('include', 'tips');
  });
});
