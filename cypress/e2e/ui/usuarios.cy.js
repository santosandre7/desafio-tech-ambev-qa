/// <reference types="cypress" />
import { usuariosElements}  from '../../support/pages/usuarios/elements';

context('Usuarios', () => {
  before(() => {
    cy.criarUsuarioViaApi({isLoginUser: true});
  });

  beforeEach(() => {
    cy.login();
  })

  it('Cadastrar um usuário com sucesso', () => {
    cy.get(usuariosElements.menuCadastrarUsuarios).click();
    cy.cadastrarUsuario();
    cy.contains('Lista dos usuários').should('be.visible');
  })

  it('Verificar campos obrigatórios', () => {
   
    cy.log('Passei aquiiii')
  })

  it('Excluir um usuário com sucesso', () => {
    cy.criarUsuarioViaApi();
    cy.get(usuariosElements.menuListarUsuarios).click();
    cy.get('@email').then((email) => {
      cy.excluirUsuarioPorEmail(email)
    })
  })
})
