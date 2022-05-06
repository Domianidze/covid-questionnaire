/// <reference types="cypress" />

describe('identification step', () => {
    beforeEach(() => {
      cy.visit('/questionnaire/identification');
    });
    it('user can not go to next page if they did not fill out the from', () => {
      cy.get('.opacity-50 > img').click();
      cy.contains('ველი სავალდებულოა').should('be.visible');

      // Error message should disappear after 2 seconds 
      cy.wait(2000)
    })
    it('error messages should change depending on user input', () => {
      cy.get('#firstname').type('ტ');
      cy.get(':nth-child(1) > .pb-3').click();
      cy.get('.mr-24 > :nth-child(1) > div > .absolute').contains('ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან').should('be.visible');
      cy.get('#firstname').clear();
      cy.get('#firstname').type('ტესტ!');
      cy.get('.mr-24 > :nth-child(1) > div > .absolute').contains('ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს').should('be.visible');

      cy.get('#lastname').type('ტ');
      cy.get(':nth-child(2) > .pb-3').click();
      cy.get(':nth-child(2) > div > .absolute').contains('ველი უნდა შედგებოდეს მინიმუმ 2 სიმბოლოსგან').should('be.visible');
      cy.get('#lastname').clear();
      cy.get('#lastname').type('ტესტ!');
      cy.get(':nth-child(2) > div > .absolute').contains('ველი უნდა შეიცავდეს მხოლოდ ანბანის ასოებს').should('be.visible');

      cy.get('#email').type('test123');
      cy.get(':nth-child(3) > .pb-3').click();
      cy.get(':nth-child(3) > div > .absolute').contains('თქვენ მიერ შეყვანილი მეილი არასწორია').should('be.visible')
      cy.get('#email').clear();
      cy.get('#email').type('test123@gmail.com');
      cy.get(':nth-child(3) > div > .absolute').contains('გთხოვთ დარეგისტრირდეთ Redberry-ს მეილით (youremail@redberry.ge)')
    })
    it('user should be able to go to next step if they fill out the form with valid data', () => {
      cy.fillInIdentification();
      cy.url().should('include', 'covid');  
      
      // Test local storage
      cy.visit('/questionnaire')
      cy.url().should('include', 'questionnaire');
      
      // Test Start Page
      cy.visit('/start')
      cy.contains('კითხვარის გაგრძელება');
    })
});
  