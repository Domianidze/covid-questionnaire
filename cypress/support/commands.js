Cypress.Commands.add('fillInIdentification', () => {
    cy.visit('/questionnaire/identification');
    cy.get('#firstname').type('ტესტ');
    cy.get('#lastname').type('ტესტ');
    cy.get('#email').type('test123@redberry.ge');
    cy.get('[dataTestId="questionnaire-form"]').click();
    cy.get('[dataTestId="next-step-btn"]').click();
})

Cypress.Commands.add('fillInCovid', () => {
    cy.get('#covid-no').click();
    cy.get('[dataTestId="questionnaire-form"]').click();
    cy.get('[dataTestId="next-step-btn"]').click();
})

Cypress.Commands.add('fillInVaccine', () => {
    cy.get('#vaccine-yes').click();
    cy.get('#fully_vaccinated').click();
    cy.get('[dataTestId="questionnaire-form"]').click();
    cy.get('[dataTestId="next-step-btn"]').click();
})

Cypress.Commands.add('fillInTips', () => {
    cy.get('#once_in_a_two_weeks').click();
    cy.get('#3').click();
    cy.get('[dataTestId="questionnaire-form"]').click();
    cy.get('[dataTestId="submit-button"]').click();
})