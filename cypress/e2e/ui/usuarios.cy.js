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
    cy.get('@email').then((email) => {
      cy.contains('td', email, { timeout: 10000 }).should('exist');
    })
  })

  it('Validar campos obrigatórios ao tentar cadastrar usuário sem preencher nenhum campo', () => {
    cy.get(usuariosElements.menuCadastrarUsuarios).click();
    cy.get(usuariosElements.botaoCadastrarUsuario).click();

    cy.contains('Nome é obrigatório').should('be.visible')
    cy.contains('Email é obrigatório').should('be.visible')
    cy.contains('Password é obrigatório').should('be.visible')
  })

  it('Excluir um usuário com sucesso', () => {
    cy.criarUsuarioViaApi();
    cy.get(usuariosElements.menuListarUsuarios).click();
    cy.get('@email').then((email) => {
      cy.excluirUsuarioPorEmail(email)
    })
  })
})
