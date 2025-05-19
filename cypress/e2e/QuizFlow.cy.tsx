/// <reference types="cypress" />

describe('Tech Quiz End-to-End', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/questions/random', {
      fixture: 'questions.json',
    }).as('getQuestions');

    cy.visit('/');
  });

  it('takes all 10 questions and restarts', () => {
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');

    // Answer each question
    for (let i = 0; i < 10; i++) {
      cy.get('h2').should('be.visible');
      cy.get('button').first().click();
    }

    cy.contains('Quiz Completed').should('be.visible');
    cy.contains('Your score').should('be.visible');

    // Restart
    cy.contains('Take New Quiz').click();
    cy.wait('@getQuestions');
    cy.get('h2').should('be.visible');
  });
});
