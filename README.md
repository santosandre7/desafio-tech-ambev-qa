# Desafio Técnico - QA (Ambev)

Projeto de automação de testes utilizando [Cypress](https://www.cypress.io/) para validar funcionalidades da aplicação [Serverest.dev](https://serverest.dev/).

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