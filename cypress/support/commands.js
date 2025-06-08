import { loginElements } from "./pages/login/elements";
import { usuariosElements } from "./pages/usuarios/elements";
import { faker } from "@faker-js/faker";

Cypress.Commands.add('login', (credenciais = {}) => {
  const email = credenciais.email || Cypress.env('defaultEmail');
  const senha = credenciais.senha || Cypress.env('defaultPassword');

  if (!email || !senha) {
    throw new Error('Variáveis de ambiente "defaultEmail" e/ou "defaultPassword" não estão definidas.');
  }

  cy.visit('/login');
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

Cypress.Commands.add('cadastrarUsuario', ({ nome, email, password } = {}) => {
  nome = nome || faker.person.fullName();
  email = email || faker.internet.email();
  password = password || faker.internet.password();

  cy.get(usuariosElements.menuCadastrarUsuarios).click();
  cy.get(usuariosElements.nome).clear().type(nome);
  cy.get(usuariosElements.email).clear().type(email);
  cy.get(usuariosElements.senha).clear().type(password);
  cy.get(usuariosElements.botaoCadastrarUsuario).click();
});