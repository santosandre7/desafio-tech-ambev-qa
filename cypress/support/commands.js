import { loginElements } from "./pages/login/elements";

Cypress.Commands.add('login', ({ email = Cypress.env('defaultEmail'), senha = Cypress.env('defaultPassword') } = {}) => {
  if (!email || !senha) {
    throw new Error('Variáveis de ambiente "email" e/ou "senha" não estão definidas.');
  }

  cy.get(loginElements.email).clear().type(email);
  cy.get(loginElements.senha).clear().type(senha);
  cy.get(loginElements.botao_entrar).click();
  cy.contains('Bem Vindo').should('be.visible');
});

Cypress.Commands.add('criarUsuarioViaApi', () => {
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