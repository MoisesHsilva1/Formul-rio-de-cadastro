class PageCadastroUsuario {
    constructor () {
        this.InputNome = '[data-cy="CampoNome"]'
        this.InputSobrenome = '[data-cy="CampoSobrenome"]'
    }
    PreencherNome () {
        cy.get(this.InputNome).type('Moisés')
      
    }
    PreencherNomeMaximoCaracteres () {
        cy.get(this.InputNome).type('bfdasvhdvagdvgaadasbdasjgda')
        .invoke('val')
        .should('have.length', 15)
        cy.get(this.InputNome).clear();
    }
    PreencherSobrenome() {
        cy.get(this.InputSobrenome).type('Henrique')
        
    }   
    PreencherSobrenomeMaximoCaracteres() {
        cy.get(this.InputSobrenome).type('bfdasvhdvagdvgaadasvahfhda')
        .invoke('val')
        .should('have.length',  20)
        cy.get(this.InputSobrenome).clear();
    }
}
export default PageCadastroUsuario;