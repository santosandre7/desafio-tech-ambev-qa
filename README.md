# Desafio Técnico - QA (Ambev)

Projeto de automação de testes utilizando [Cypress](https://www.cypress.io/) para validar funcionalidades da aplicação [Serverest.dev](https://serverest.dev/).

## 📋 Cenários de Teste - Gerenciamento de Usuários

### Feature: Gerenciamento de Usuários

#### Background
```gherkin
Given que estou logado no sistema
````


✅ Cenário 1: Cadastrar um usuário com sucesso
```gherkin
        Given que acesso o menu de cadastro de usuários
        When cadastro um novo usuário
        Then o usuário deve ser exibido na lista
````
✅ Cenário 2: Validar campos obrigatórios ao tentar cadastrar usuário sem preencher nenhum campo
```gherkin
        Given que acesso o menu de cadastro de usuários
        When tento cadastrar sem preencher os campos
        Then mensagens de obrigatoriedade devem ser exibidas
````
✅ Cenário 3: Excluir um usuário com sucesso
```gherkin
        Given que já existe um usuário cadastrado
        When acesso o menu de listar usuários
        And excluo o usuário
        Then o usuário não deve mais estar na lista
````


## 📁 Estrutura de Pastas


```bash
cypress/
├── e2e/
│ ├── api/
│ └── ui/ 
├── support/ #onde fica os custom commands e seletores
````

## 📦 Tecnologias

- [Node.js](https://nodejs.org/)
- [Cypress](https://www.cypress.io/)
- [Faker](https://fakerjs.dev/) para geração de dados dinâmicos

## 🚀 Instalação

1. Clone este repositório:

```bash
#clonar por ssh
git clone git@github.com:santosandre7/desafio-tech-ambev-qa.git
cd desafio-tech-ambev-qa
```
2. Instale as dependências

```bash
npm install
```

3. Configure as variáveis de ambiente. Crie um arquivo .env com base no .env.example.(como aqui é um teste, utilize as credenciais abaixo)
```bash
DEFAULT_USER_EMAIL='andre.santos@ambev.com'
DEFAULT_USER_PASSWORD='desafioambev'
```

## ✅ Como Rodar os Testes
Testes de Interface (UI)
```bash
npm run test:ui
```
Testes de API
```bash
npm run test:api
```

Todos os testes
```bash
npm run test:all
```

## ✍️ Autor
- André Santos