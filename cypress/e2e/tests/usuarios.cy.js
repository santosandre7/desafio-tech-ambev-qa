/// <reference types="cypress" />
import { usuariosElements}  from '../../support/pages/usuarios/elements';

context('Usuarios', () => {
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/')
    cy.login('andre.santos@ambev.com', 'desafioambev')
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
