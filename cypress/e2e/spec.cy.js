

describe('Teste formulario de cadastro', () => {
   beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html')
   })
  it('Usuario se cadastrando corretamente', () => {
        cy.get('[data-cy="CampoNome"]').type('teste nome')
  })
})