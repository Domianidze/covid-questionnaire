/// <reference types="cypress" />

it('user should be able to submit data', () => {
    // Fill in Identification
    cy.fillInIdentification();
    cy.wait(750);
    
    // Fill in Covid
    cy.get('#covid-yes').click();
    cy.get('#antibodies-yes').click();
    cy.get('#antibodies-date').type('1232021');
    cy.get('#antibodies-amount').type('500');  
    cy.get('[datatestid="questionnaire-form"]').click();
    cy.get('[datatestid="next-step-btn"]').click();
    cy.wait(750)
    
    // Fill in Vaccine
    cy.get('#vaccine-no').click();
    cy.get('#registered_and_waiting').click(); 
    cy.get('[datatestid="questionnaire-form"]').click();
    cy.get('[datatestid="next-step-btn"]').click(); 
    cy.wait(750)
    
    // Fill in tips and submit
    cy.get('#once_in_a_two_weeks').click();
    cy.get('#3').click();
    cy.get('#in-person-meeting').type('ტესტ');
    cy.get('#environment-opinion').type('ტესტ');
    cy.get('[datatestid="questionnaire-form"]').click();
    cy.get('[datatestid="submit-button"]').click();
    cy.intercept('POST', 'https://covid19.devtest.ge/api/*', {
        statusCode: 200,
    });
    cy.wait(1000)
})