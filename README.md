# Instruções para Execução do Projeto B2Bit

## Pré-requisitos

- Node.js
- npm

## Instalação

1. Crie o projeto com o comando:
    ```
    npm create vite b2bit
    ```

2. Navegue até o diretório do projeto:
    ```
    cd b2bit
    ```

3. Instale as dependências do projeto:
    ```
    npm install
    ```

4. Instale as bibliotecas adicionais necessárias com os seguintes comandos:
    ```
    npm install react-router-dom localforage match-sorter sort-by
    npm install -D tailwindcss postcss autoprefixer
    npm install react-hook-form
    yarn add react-hot-toast
    npm i nookies
    npm install axios
    npm install formik --save
    npm install yup
    npm install tailwindcss@latest postcss@latest autoprefixer@latest
    ```

5. Inicialize o Tailwind CSS:
    ```
    npx tailwindcss init -p
    ```

## Execução

Para iniciar a aplicação, execute o seguinte comando:

   ```
   npm run dev
   ```


## Uso

Acesse a aplicação em `http://localhost:3000` (ou a porta que você definiu) no seu navegador.

## Deploy

A versão de deploy da aplicação pode ser acessada em https://b2bit-login-woad.vercel.app/.

