/// <reference types="cypress" />
import { usuariosElements}  from '../../support/pages/usuarios/elements';

context('Usuarios', () => {
  before(() => {
  cy.request({
    method: 'POST',
    url: `${Cypress.env('apiUrl')}/usuarios`,
    body: {
      nome: 'QA Teste',
      email: Cypress.env('defaultEmail'),
      password: Cypress.env('defaultPassword'),
      administrador: 'true'
    },
    failOnStatusCode: false
  });
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
