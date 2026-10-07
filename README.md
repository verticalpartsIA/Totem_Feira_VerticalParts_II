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
bun run build  → dist/client (SPA estático, _shell.html vira index.html)
GitHub Actions → zip + SCP + unzip em public_html/ (push na main)
```

Ver [`DEPLOY_CONTEXT.md`](./DEPLOY_CONTEXT.md) para instruções completas.

---

## Rotas

| Rota | Tela do Canva |
|------|---------------|
| `/` | Boas-vindas |
| `/revenda` | Amplie seu portfólio de revenda |
| `/elevadores` | Elevadores (carga, homelift, passageiro, automóvel) |
| `/escadas` | Escadas & esteiras rolantes |
| `/equipamentos` | QR — fornecemos e instalamos equipamentos |
| `/bst-monarch` | Consultar linha BST Monarch |
| `/bst-linha` | Detalhe BST Monarch |
| `/contato` | QR WhatsApp — "Quero construir uma parceria" |

Design de referência: Canva "TOTEM" (DAHW3083bfw). Imagens em `public/images/totem/`.

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

---

## Contributors

- Gelson Simões — criador e responsável pelas soluções VerticalParts

---

**Feito por Gelson Simões**
