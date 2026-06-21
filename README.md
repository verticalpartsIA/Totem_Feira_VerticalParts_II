# Totem Feira VerticalParts II

> Totem interativo para feiras e eventos — catálogo digital de projetos instalados pela VerticalParts.

**Produção:** [interativo.vpsistema.com](https://interativo.vpsistema.com)

---

## Sobre o projeto

Aplicação web desenvolvida para rodar em totens de TV (formato 9:16, telas de 42" a 55") em feiras e eventos do setor de transporte vertical. Permite que visitantes naveguem pelo portfólio de instalações da **VerticalParts** — empresa especializada em escadas rolantes, esteiras rolantes, elevadores e projetos especiais.

O sistema foi projetado para uso autônomo: sem teclado, sem mouse, apenas toques na tela. Após 30 segundos de inatividade, retorna automaticamente à tela inicial.

---

## Funcionalidades

- **Menu principal** com 6 categorias de navegação por imagem
- **Catálogo por categoria:** Escadas Rolantes · Esteiras Rolantes · Elevadores · Projetos Especiais
- **Galeria de clientes** com projetos instalados (fotos reais com marca d'água)
- **Catálogo de Peças** — componentes de elevadores, escadas e esteiras
- **Página Sobre** — institucional VerticalParts
- **Contato** — informações e QR Code
- **Redirecionamento por inatividade** (30 segundos)
- Design responsivo otimizado para portrait 9:16

---

## Stack técnica

| Camada | Tecnologia |
|--------|------------|
| Framework | [TanStack Start v1](https://tanstack.com/start) (SSR + React 19) |
| Roteamento | TanStack Router (file-based) |
| Estilização | Tailwind CSS v4 + shadcn/ui |
| Build | Vite 8 + Nitro (Cloudflare Workers target) |
| Deploy | Apache shared hosting (Hostinger) — pre-render estático |
| Tipagem | TypeScript strict |

---

## Arquitetura de deploy

A Hostinger usa **Apache shared hosting** (sem Node.js). O deploy é feito via pre-render estático manual:

```
npm run build          → dist/server/server.js  (Cloudflare Workers handler)
node temp-prerender.mjs → static-output/          (8 rotas pré-renderizadas)
[patch assets]         → deploy/                  (JS bundles com URLs locais)
unzip no servidor      → public_html/             (Apache serve)
```

Ver [`DEPLOY_CONTEXT.md`](./DEPLOY_CONTEXT.md) para instruções completas.

---

## Rotas

| Rota | Descrição |
|------|-----------|
| `/` | Tela inicial — menu de categorias |
| `/categoria/escadas` | Projetos de escadas rolantes |
| `/categoria/esteiras` | Projetos de esteiras rolantes |
| `/categoria/elevadores` | Projetos de elevadores |
| `/categoria/projetos` | Projetos especiais |
| `/projeto/:slug` | Detalhes e galeria do projeto |
| `/pecas` | Catálogo de peças |
| `/sobre` | Institucional |
| `/contato` | Contato e QR Code |

---

## Estrutura de pastas

```
src/
├── assets/           # Asset manifests (imagens referenciadas por URL)
├── components/ui/    # Componentes shadcn/ui
├── hooks/            # use-idle-redirect, use-mobile
├── lib/
│   ├── clientes.ts   # Dados dos projetos e clientes
│   └── error-reporting.ts
├── routes/
│   ├── __root.tsx
│   ├── index.tsx          # Tela inicial
│   ├── categoria.$slug.tsx
│   ├── projeto.$slug.tsx
│   ├── pecas.tsx
│   ├── sobre.tsx
│   └── contato.tsx
└── server.ts         # SSR entry (Nitro)
```

---

## Desenvolvimento local

```bash
npm install
npm run dev        # http://localhost:8080
```

---

## Clientes no portfólio

| Cliente | Categoria | Local |
|---------|-----------|-------|
| Aeroporto de Brasília | Escadas | Brasília, DF |
| Armazém Marajó | Escadas | — |
| KAÇULA | Elevadores | — |
| Mateus Maior | Elevadores | — |
| Shopping Center 3 | Elevadores | São Paulo, SP |
| Shopping Granja Viana | Elevadores | Cotia, SP |
| Shopping Jockey | Elevadores | — |
| Shopping Paralela | Elevadores | Salvador, BA |

---

## Licença

Projeto proprietário — © 2026 VerticalParts. Todos os direitos reservados.
