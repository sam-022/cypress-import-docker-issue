import todoPage from '../page/todo.page'

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo')
  })

  it('displays two todo items by default', () => {
    todoPage.todolist.should('have.length', 2)
    todoPage.todolist.first().should('have.text', 'Pay electric bill')
    todoPage.todolist.last().should('have.text', 'Walk the dog')
  })
})
