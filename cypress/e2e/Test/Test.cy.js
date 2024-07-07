import PageCadastroUsuario from "../Page/PageCadastroUsuario";

const pageCadastroUsuario = new PageCadastroUsuario();

describe('Teste formulario de cadastro', () => {
      beforeEach(() => {
            cy.VisitUrl();
      })
      it('Usuario se cadastrando corretamente', () => {
            pageCadastroUsuario.PreencherNomeMaximoCaracteres();
            pageCadastroUsuario.PreencherNome();

            pageCadastroUsuario.PreencherSobrenomeMaximoCaracteres();
            pageCadastroUsuario.PreencherSobrenome();
            
      })
})