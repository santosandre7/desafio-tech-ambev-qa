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
   
  })

  it('Excluir um usuário com sucesso', () => {
  

  })
   
})
