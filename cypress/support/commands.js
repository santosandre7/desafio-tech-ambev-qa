import { loginElements } from "./pages/login/elements"
Cypress.Commands.add('login', (email, senha) => { 
    cy.get(loginElements.email).clear().type(email)
    cy.get(loginElements.senha).clear().type(senha)
    cy.get(loginElements.botao_entrar).click()
    cy.contains('Bem Vindo').should('be.visible')
 })