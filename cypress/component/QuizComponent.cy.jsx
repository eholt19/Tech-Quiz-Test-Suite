// import React from 'react';
import { mount } from 'cypress/react';
import Quiz from '../../client/src/components/Quiz';

describe('Quiz Component', () => {
  it('renders the Start Quiz button', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').should('be.visible');
  });

  it('renders the first question after start', () => {
    mount(<Quiz />);
    cy.contains('Start Quiz').click();
    cy.get('[data-cy="question"]').should('exist');
  });
});
