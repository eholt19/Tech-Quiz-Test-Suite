import Quiz from '../../client/src/components/Quiz;

describe('Quiz Component', () => {
    it('renders quiz questions', () => {
        cy.mount(<Quiz />)
        cy.get('[data-cy="question"]').should('exist')
    })
})