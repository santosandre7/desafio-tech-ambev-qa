/// <reference types="cypress" />
import { usuariosElements}  from '../../support/pages/usuarios/elements';

context('Usuarios', () => {
  before(() => {
    cy.criarUsuarioViaApi()
  });

  beforeEach(() => {
    cy.visit('/')
    cy.login()
  })

  it('Cadastrar um usuário com sucesso', () => {
    cy.log('Passei aquiiii')
  })

  it('Editar um usuário com sucesso', () => {
    cy.log('Passei aquiiii')
  })

  it('Excluir um usuário com sucesso', () => {
   
    cy.log('Passei aquiiii')
  })

})
