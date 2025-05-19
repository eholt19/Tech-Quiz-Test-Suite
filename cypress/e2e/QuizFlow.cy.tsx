/// <reference types="cypress" />

describe('Tech Quiz End-to-End', () => {
  beforeEach(() => {
    // Stub the real endpoint your app calls
    cy.intercept('GET', '/api/questions/random', {
      fixture: 'questions.json',
    }).as('getQuestions');

    // Load the app
    cy.visit('/');
  });

  it('lets me take all 10 questions and then restart', () => {
    // 1) Click to start quiz (triggers GET /api/questions/random)
    cy.contains('Start Quiz').click();
    cy.wait('@getQuestions');

    // 2) Answer each question by clicking the first button
    for (let i = 0; i < 10; i++) {
      cy.get('h2').should('be.visible');
      cy.get('button').first().click();
    }

    // 3) Verify completion screen
    cy.contains('Quiz Completed').should('be.visible');
    cy.contains('Your score').should('be.visible');

    // 4) Click to take a new quiz
    cy.contains('Take New Quiz').click();

    // 5) Wait for questions to reload
    cy.wait('@getQuestions');

    // 6) Now the first question should be visible again
    cy.get('h2').should('be.visible');
  });
});
