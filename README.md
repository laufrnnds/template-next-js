This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# template-next-js

## Instruções de Arquitetura

a. Como criar uma nova página

    1. Na pasta Pages criar uma pasta com o nome da página
    2. Dentro da nova pasta criar um index.tsx.
    3. No arquivo criar com export default uma função com o nome da página
    4. Dentro da função criar um retorno com as tags HTML e componente que serão renderizados;

b. Como criar um componente

    1. Criar uma pasta chamada components na pasta pages ou na pasta da página, caso use o componente só nela.
    2. Dentro da nova pasta criar um arquivo index.ts
    3. No arquivo criar com export default uma função com o nome do componente
    4. Dentro da função criar um retorno com as tags HTML que serão renderizadas como componentes

c. Como criar um util

    1. Criar uma pasta chamada utils na pasta src.
    2. Dentro da nova pasta criar um arquivo index.tsx
    3. No arquivo index.tsx criar com export default uma função com o nome da função
    4. Dentro da função criar um retorno, e essa função pode receber parâmetros

d. Como criar um layout

    1. Criar uma pasta chamada layouts na pasta pages.
    2. Dentro da nova pasta criar um arquivo colocar o nome do layout, exemplo default.tsx
    3. No arquivo criado criar com export default uma função com o nome do layout, exemplo DefaultLayout
    4. Dentro da função criar um retorno com os componentes e tags HTML que serão renderizadas.

e. Como criar um config

    1. Criar uma pasta chamada configs na pasta src.
    2. Dentro da nova pasta criar um arquivo colocar o nome da config, exemplo config.tsx
    3. No arquivo criado criar uma const ou function e exporta-la.

---

📁 root
├── 📂 src
│ ├── 📂 pages
│ │ ├── 📂 example
│ │ │ ├── 📂 components
│ │ │ │ └── 📂 example
│ │ │ │ └── 📄 index.tsx
│ │ │ │
│ │ │ └── 📄 index.tsx
│ │ │
│ │ ├── 📂 components
│ │ │ └── 📂 example
│ │ │ └── 📄 index.tsx
│ │ │
│ │ └── 📂 layout
│ │ └── 📄 example.tsx
│ │
│ │
│ ├── 📂 utils
│ │ ├── 📂 data
│ │ │ └── 📄 example.tsx
│ │ │
│ │ └── 📁 config

│ └── 📁 config
│
📁 public
📄 README.md
