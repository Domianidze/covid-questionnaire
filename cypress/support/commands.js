Cypress.Commands.add('fillInIdentification', () => {
  cy.visit('/questionnaire/identification');
  cy.get('#firstname').type('ტესტ');
  cy.get('#lastname').type('ტესტ');
  cy.get('#email').type('test123@redberry.ge');
  cy.get('[datatestid="questionnaire-form"]').click();
  cy.get('[datatestid="next-step-btn"]').click();
});

Cypress.Commands.add('fillInCovid', () => {
  cy.get('#covid-no').click();
  cy.get('[datatestid="questionnaire-form"]').click();
  cy.get('[datatestid="next-step-btn"]').click();
});

Cypress.Commands.add('fillInVaccine', () => {
  cy.get('#vaccine-yes').click();
  cy.get('#fully_vaccinated').click();
  cy.get('[datatestid="questionnaire-form"]').click();
  cy.get('[datatestid="next-step-btn"]').click();
});

Cypress.Commands.add('fillInTips', () => {
  cy.get('#once_in_a_two_weeks').click();
  cy.get('#3').click();
  cy.get('[datatestid="questionnaire-form"]').click();
  cy.get('[datatestid="submit-button"]').click();
});
