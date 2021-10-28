<div align="center">
    <h1>Nest API do zero!</h1>
    <p>Projeto para iniciar uma API com NestJS + MongoDB do zero!</p>
</div>

## Proposta

A proposta desse projeto é iniciar uma API do NestJS do zero, e integrá-la com o MongoDB. A entidade selecionada vai
ser User. Essa entidade deverá ter os seguintes atributos:

- Nome: string, tamanho mínimo 6, tamanho máximo 30, apenas letras e um único espaço entre as palavras;
- Idade: número inteiro, mínimo 1, máximo 100;
- E-mail: string, deve ser um e-mail válido;
- Senha: string, tamanho mínimo 8, tamanho máximo 20;

Deverá ter as seguintes operações: string,

- `POST /users` - Salvar usuário.
- `GET /users` - Listar usuários
- `GET /users/:user_id` - Recuperar um único usuário através do id
- `PUT /users/:user_id` - Atualizar os dados de um usuário através do id. Obs.: a senha não deverá ser atualizada através desse endpoint.
- `DELETE /users/:user_id` - Deletar um usuário através do id
- `PATCH /users/:user_id/password` - Atualizar a senha do usuário através do id. Deve ser informada a senha antiga e a nova senha.

## Etapas

### 0. Preparação do ambiente

- (✓) Instalar e configurar o Git
- (✓) Instalar e configurar o Node.js
- (✓) Instalar e configurar o VSCode
- (✓) Instalar e configurar o MongoDB
- (✓) Instalar e configurar o MongoDB Compass

### 1. Instalação do Nest.js

- (✓) Instalar o NestJS globalmente
- (✓) Criar um projeto com o cli do NestJS

### 2. Desenvolvimento do projeto

- ( ) Implementar a classe Schema
- ( ) Implementar a classe Repository
- ( ) Implementar a classe Service
- ( ) Implementar a classe DTO
- ( ) Implementar a classe Controller

### 3. Aplicar arquitetura de camadas

- ( ) Adicionar a camada de infraestrutura
- ( ) Adicionar a camada de negócio
- ( ) Adicionar a camada de apresentação (ou interface de usuário)

### 4. Adicionar recursos extras

- ( ) Adicionar middleware do Morgan para exibição de logs da aplicação
- ( ) Adicionar interceptador de timeout para requisições que demorarem mais que 5 segundos
- ( ) Adicionar filtro para tratar exceções de negócio e exceções internas

### 5. Adicionar testes

- ( ) Configurar aplicação para dar o suporte correto aos testes unitários e e2e
- ( ) Adicionar testes unitários
- ( ) Adicionar testes e2e