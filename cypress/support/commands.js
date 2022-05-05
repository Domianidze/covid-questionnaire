Cypress.Commands.add('fillInIdentification', () => {
    cy.visit('/questionnaire/identification');
    cy.get('#firstname').type('ტესტ');
    cy.get('#lastname').type('ტესტ');
    cy.get('#email').type('test123@redberry.ge');
    cy.get('.pr-5').click();
    cy.get('button > img').click();
})

Cypress.Commands.add('fillInCovid', () => {
    cy.get(':nth-child(3) > label').click();
    cy.get('.pr-5').click();
    cy.get('button > img').click();
})

Cypress.Commands.add('fillInVaccine', () => {
    cy.get(':nth-child(1) > :nth-child(2) > label').click();
    cy.get(':nth-child(2) > :nth-child(3) > label').click();
    cy.get('.pr-5').click();
    cy.get('button > img').click();
})

Cypress.Commands.add('fillInTips', () => {
    cy.get(':nth-child(2) > :nth-child(4) > label').click();
    cy.get(':nth-child(3) > :nth-child(5) > label').click();
    cy.get('.pr-5').click();
    cy.get('.w-44').click();
})