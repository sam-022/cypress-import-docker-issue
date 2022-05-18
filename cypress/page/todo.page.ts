class Todo {
  get todolist() {
    return cy.get('.todo-list li')
  }
}

export default new Todo()