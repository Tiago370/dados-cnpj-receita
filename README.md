# Projeto Final da Disciplina: Site Para Acessar Dados do CNPJ

## Descrição do Projeto
 Esse projeto é um site que possibilita ao usuário acessar os dados cadastrais das empresas pelos seus respectivos CNPJs. 
### Tecnologias Utilizadas

- **Next.js**: Framework React para construção da interface do usuário com renderização no lado do servidor (SSR) e geração de sites estáticos (SSG).
- **Node.js**: Ambiente de execução JavaScript para o back-end.
- **Express**: Framework para Node.js para simplificar o desenvolvimento da API RESTful.
- **TailwindCSS**: Framework CSS utilitário para estilização de componentes de forma rápida e responsiva, sem a necessidade de escrever CSS personalizado.

---

## Problema que o Projeto Tenta Resolver

Em algumas situações precisamos consultar dados de empresas e guardar esses dados para consultas posteriores. O ato de de guardar esses podem ter motivações diferentes, como seleção de fornecedores, prospecção de vendas, estudo de mercado, etc.

---

## Funcionalidades

- **Autenticação de usuário**: Sistema de login com autenticação JWT.
  
---

## Como Executar o Projeto

### Requisitos

- Node.js (versão 22.11.0 ou superior)
- NPM

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/Tiago370/dados-cnpj-receita
   cd dados-cnpj-receita
   ```
2. Execute o back-end:

   ```bash
   cd back-end
   npm install
   node app.js
   ```
3. Execute o front-end (em outro terminal):

   ```bash
   cd front-end
   npm install
   npm run dev
   ```