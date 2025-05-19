/// <reference types="cypress" />

describe('Tech Quiz End-to-End', () => {
    beforeEach(() => {
      // Stub your questions API so it’s deterministic
      cy.intercept('GET', '/api/questions', { fixture: 'questions.json' }).as('getQuestions');
  
      // Load the app
      cy.visit('/');
      cy.wait('@getQuestions');
    });
  
    it('lets me take all 10 questions and then restart', () => {
      // 1) Start the quiz
      cy.contains('Start Quiz').click();
  
      // 2) For each of the 10 questions...
      for (let i = 0; i < 10; i++) {
        // - Confirm a question is displayed
        cy.get('[data-cy="question"]').should('be.visible');
  
        // - Pick the first answer option
        cy.get('[data-cy="option"]').first().click();
  
        // - Click Next (or Submit on the last question)
        cy.contains(i < 9 ? 'Next' : 'Submit').click();
      }
  
      // 3) After the loop, we should see the score screen
      cy.contains('Your Score').should('be.visible');
      // (Optional) assert the score text
      cy.contains(/\d+ out of 10/).should('be.visible');
  
      // 4) Restart the quiz
      cy.contains('Start New Quiz').click();
      cy.contains('Start Quiz').should('be.visible');
    });
  });
  