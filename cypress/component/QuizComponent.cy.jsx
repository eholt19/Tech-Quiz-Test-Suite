// import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  beforeEach(() => {
    // stub the questions endpoint for component tests
    cy.intercept('GET', '/api/questions/random', {
      fixture: 'questions.json',
    }).as('getQuestions');
  });

  it('renders Start Quiz button', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').should('be.visible');
  });

  it('renders a question after starting', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();

    // wait for our stubbed request to finish
    cy.wait('@getQuestions');

    // now the <h2> (the question) should exist
    cy.get('h2').should('be.visible');
  });
});
