
# 🖥️ B2Bit Login

## 📝 Descrição
Este é um projeto front-end utilizando React, TypeScript, e TailwindCSS para uma aplicação de autenticação e perfil de usuário. Ele permite que os usuários façam login e visualizem suas informações de perfil de forma segura.

## 🌍 Link de Acesso
https://b2bit-login-woad.vercel.app/

## 🚀 Funcionalidades
- **🔐 Autenticação de Usuário**: Permite o login e gerenciamento de sessão.
- **🛡️ Proteção de Rotas Privadas**: As páginas privadas são acessíveis apenas após o login bem-sucedido.
- **🖼️ Exibição de Perfil**: O usuário pode visualizar suas informações pessoais e foto de perfil.
- **⚙️ Integração com API Backend**: Consome uma API para autenticar o usuário e recuperar informações do perfil.
- **🎨 Design Responsivo**: Interface responsiva utilizando TailwindCSS para um design moderno e flexível.

## 🛠️ Tecnologias Utilizadas

- **Frontend**:
  - 🟢 React
  - 🟦 TypeScript
  - 🎨 TailwindCSS
  - 📦 React Router DOM
  - 📝 Formik para gerenciamento de formulários
  - 📜 Yup para validação de formulários
  - 🛠️ Axios para comunicação com a API

## 🗂️ Estrutura do Projeto

- **📂 src/assets**: Contém arquivos estáticos, como imagens e ícones.
- **📂 src/components**: Contém componentes reutilizáveis como Header, Button, Input e Container.
- **📂 src/context**: Contém o contexto de autenticação (AuthContext) para gerenciar o estado de login e logout.
- **📂 src/pages**: Contém as páginas da aplicação, como Home e Profile.
- **📂 src/routes**: Define as rotas e autenticação das páginas.
- **📂 src/services**: Contém os serviços para interação com a API, como `apiClient.ts` e manipulação de erros.

## 🔄 Funcionalidades Adicionais
- **📧 Validação de Formulários**: Utiliza Formik e Yup para validação eficiente de formulários de login.
- **🎨 Estilos Customizados**: Utiliza TailwindCSS e classes personalizadas para um design atraente e adaptável.
- **🔐 Proteção de Dados**: Armazena o token de autenticação no cookie para gerenciar sessões de forma segura.

## 🛠️ Como Rodar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/jhondharkyson520/b2bit-login.git
   ```
   
2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse a aplicação no navegador em `http://localhost:3000`.

