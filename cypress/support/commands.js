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


Cypress.Commands.add('criarUsuarioViaApi', (usuario = {}) => {
  let dadosUsuario;

  if (usuario.isLoginUser) {
    dadosUsuario = {
      nome: 'QA Teste',
      email: Cypress.env('defaultEmail'),
      password: Cypress.env('defaultPassword'),
      administrador: 'true',
    };
  } else {
    dadosUsuario = {
      nome: usuario.nome || faker.person.fullName(),
      email: usuario.email || faker.internet.email(),
      password: usuario.password || faker.internet.password(8),
      administrador: usuario.administrador ?? 'true',
    };
  }
  
  cy.wrap(dadosUsuario.nome).as('nome');
  cy.wrap(dadosUsuario.email).as('email');

  cy.request({
    method: 'POST',
    url: `${Cypress.env('apiUrl')}/usuarios`,
    body: dadosUsuario,
    failOnStatusCode: false,
  });
});

Cypress.Commands.add('cadastrarUsuario', ({ nome, email, password } = {}) => {
  nome = nome || faker.person.fullName();
  email = email || faker.internet.email();
  password = password || faker.internet.password();

  cy.wrap(nome).as('nome');
  cy.wrap(email).as('email');

  cy.get(usuariosElements.nome).clear().type(nome);
  cy.get(usuariosElements.email).clear().type(email);
  cy.get(usuariosElements.senha).clear().type(password);
  cy.get(usuariosElements.botaoCadastrarUsuario).click();
});

Cypress.Commands.add('excluirUsuarioPorEmail', (email) => {
  cy.intercept('GET', 'https://serverest.dev/usuarios').as('getUsuarios');

  cy.get('table tbody tr').contains('td', email)
    .parent('tr')
    .within(() => {
      cy.contains('button', 'Excluir').click();
    });

  cy.wait('@getUsuarios');
  cy.contains('td', email, { timeout: 10000 }).should('not.exist');

});
