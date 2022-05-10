/// <reference types="cypress" />

describe('covid step', () => {
  beforeEach(() => {
    cy.fillInIdentification();
    cy.wait(750);
  });

  it('user can not go to next page if they did not fill out the from', () => {
    cy.get('[datatestid="next-step-btn"]').click();
    cy.contains('ველი სავალდებულოა').should('be.visible');
  });

  it('different inputs should appear based on user input', () => {
    cy.get('#covid-yes').click();
    cy.contains('ანტისხეულების ტესტი გაქვს გაკეთებული?').should('be.visible');

    cy.get('#antibodies-yes').click();
    cy.contains(
      'თუ გახსოვს, გთხოვ მიუთითე ტესტის მიახლოებით რიცხვი და ანტისხეულების რაოდენობა'
    ).should('be.visible');

    cy.get('#antibodies-no').click();
    cy.contains(
      'მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*'
    ).should('be.visible');

    cy.get('#covid-date').type('1232021');
    cy.contains(
      'მიუთითე მიახლოებითი პერიოდი (დღე/თვე/წელი) როდის გქონდა Covid-19*'
    ).click();
    cy.get('#covid-date').type('{enter}');
  });

  it('user should be able to go to next page if they fill out the form with valid data', () => {
    cy.fillInCovid();
    cy.url().should('include', 'vaccine');
  });
});
