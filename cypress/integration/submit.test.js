/// <reference types="cypress" />

it('user should be able to submit data', () => {
    // Fill in Identification
    cy.fillInIdentification();
    cy.wait(750);
    
    // Fill in Covid
    cy.get(':nth-child(2) > label').click();
    cy.get(':nth-child(2) > :nth-child(2) > label').click();
    cy.get('#antibodies-date').type('1232021');
    cy.get('#antibodies-amount').type('500');  
    cy.get('.mr-24').click();
    cy.get('button  > img').click(); 
    cy.wait(750)
    
    // Fill in Vaccine
    cy.get(':nth-child(3) > label').click();
    cy.get(':nth-child(2) > :nth-child(2) > label').click(); 
    cy.get('.mr-24').click();
    cy.get('button  > img').click(); 
    cy.wait(750)
    
    // Fill in tips and submit
    cy.get(':nth-child(2) > :nth-child(4) > label').click();
    cy.get(':nth-child(3) > :nth-child(5) > label').click();
    cy.get('#in-person-meeting').type('ტესტ');
    cy.get('#environment-opinion').type('ტესტ');
    cy.get('.mr-24').click();
    cy.get('.w-44').click()
    cy.intercept('POST', 'https://covid19.devtest.ge/api/*', {
        statusCode: 200,
    });
    cy.wait(1000)
})