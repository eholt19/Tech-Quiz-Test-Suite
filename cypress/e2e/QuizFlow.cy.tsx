describe('Quiz Flow', () => {
    it('completes a quix and shows a score', () => {
        cy.visit('/')
        cy.contains('Start Quiz').click()

        for(let i = 0; i < 10; i++) {
            cy.get('[data-cy=answer-option]').first().click()
            cy.contains('Next').click()
        }

        cy.get('[data-cy=score]').should('exist')
    })
})