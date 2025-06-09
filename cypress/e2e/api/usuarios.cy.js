/// <reference types="cypress" />
import { usuariosElements}  from '../../support/pages/usuarios/elements';

context('Usuarios', () => {
  it('Cadastrar um usuário com sucesso', () => {
    cy.criarUsuarioViaApi().then((res) => {
        expect(res.status).to.eq(201);
        expect(res.body.message).to.equal('Cadastro realizado com sucesso');
        cy.consultarUsuarioByID(res.body._id).then((res) => {
        cy.get('@email').then((email) => {
            expect(res.body.email).to.equal(email)
        })
        })
    });
  })


  it('Validar campos obrigatórios ao tentar cadastrar usuário sem preencher nenhum campo', () => {
    cy.request({
        method: 'POST',
        url: `${Cypress.env('apiUrl')}/usuarios`,
        body: {},
        failOnStatusCode: false,
        }).then((res) => {
            expect(res.body.nome).to.equal('nome é obrigatório')
            expect(res.body.email).to.equal('email é obrigatório')
            expect(res.body.password).to.equal('password é obrigatório')
    });
  })

  it('Excluir um usuário com sucesso', () => {
    cy.criarUsuarioViaApi().then((res) => {
        expect(res.status).to.eq(201);
        expect(res.body.message).to.equal('Cadastro realizado com sucesso');
        cy.excluirUsuarioByID(res.body._id).then((res) => {
            expect(res.body.message).to.equal('Registro excluído com sucesso')
        })
    });
  })
})
