# Deploy Context — Totem Feira VerticalParts II

## Acesso ao servidor (Hostinger — Shared Hosting Apache)

| Campo  | Valor             |
|--------|-------------------|
| Host   | 185.245.180.223   |
| Porta  | 65002             |
| User   | u926853941        |
| Senha  | ver `.env.local` ou gestor de senhas |

> ⚠️ Não commitar credenciais. Linha acima é intencional como placeholder.

**Domínio:** `https://interativo.vpsistema.com`
**Caminho público:** `/home/u926853941/domains/interativo.vpsistema.com/public_html/`
**Backup anterior:** `.../public_html_backup_20260621/`

---

## Fluxo de deploy

O Hostinger é **Apache shared hosting sem Node.js**. O deploy é pre-render estático:

### 1. Build
```bash
npm run build
# Gera dist/server/server.js (Cloudflare Workers handler via Nitro)
```

### 2. Pre-render HTML
```bash
node temp-prerender.mjs
# Wraps server.js num HTTP local (porta 19999)
# Pré-renderiza 8 rotas → static-output/
```

### 3. Montar pasta deploy
```powershell
# Copiar assets do build
Copy-Item dist\client\assets\* deploy\assets\ -Force

# Copiar imagens locais (substituindo CDN)
Copy-Item "04_ASSETS_E_IMAGENS\imagens\LOGO BRANCO.png" deploy\assets\logo-verticalparts-white-v2.png
# (ver mapeamento completo abaixo)

# Processar HTML: substituir CDN paths por /assets/...
# (ver temp-prepare-deploy.mjs)
```

### 4. Criar e enviar ZIP
```powershell
Compress-Archive -Path deploy\* -DestinationPath deploy.zip

# Upload via PHP temporário
curl -L -X POST https://interativo.vpsistema.com/up_xxx.php -F "f=@deploy.zip" -k
```

### 5. Extrair e corrigir JS no servidor
```bash
ssh u926853941@185.245.180.223 -p 65002
cd ~/domains/interativo.vpsistema.com/public_html
unzip -q deploy_new.zip
rm deploy_new.zip

# CRÍTICO: patchar URLs CDN nos JS bundles
cd assets
sed -i 's|/__l5e/assets-v1/48f16f42.../logo...|/assets/logo-verticalparts-white-v2.png|g' logo*.js
sed -i 's|/__l5e/assets-v1/fb2247d4.../escada...|/assets/escada-rolante.png|g; s|/__l5e/.../pecas.png|/assets/pecas.png|g' routes*.js
sed -i 's|/__l5e/assets-v1/cdade634.../sobre.png|/assets/sobre.png|g' sobre*.js
```

---

## Mapeamento de imagens (CDN → local)

| Asset no deploy            | Origem local                                              |
|----------------------------|-----------------------------------------------------------|
| `logo-verticalparts-white-v2.png` | `04_ASSETS_E_IMAGENS\imagens\LOGO BRANCO.png`    |
| `escada-rolante.png`       | Download: blog.br.tkelevator.com (Shopping Plaza Sul)     |
| `pecas.png`                | `VerticalPArts_Peças\Imagens_Peças_...\VPEL-067 (1).jpg` |
| `sobre.png`                | `_Tratadas_MarcaDAgua\KAÇULA\Elevador_KACULA_01.jpg`     |

---

## Pastas de imagens do cliente (Windows)

```
C:\Users\gelso\VerticalParts\VerticalParts - INSTALAÇÃO DE EQUIPAMENTOS\Curadoria\
├── VerticalPArts_Peças\Imagens_Peças_Elevadores_Escadas_Esteiras\   ← 49 imagens de peças
└── _Tratadas_MarcaDAgua\   ← 8 pastas de clientes (fotos com marca d'água)
    ├── AEROPORTO DE BRASÍLIA\
    ├── Armazem_MARAJO\
    ├── KAÇULA\
    ├── MATEUS MAIOR\
    ├── SHOPPING CENTER 3\
    ├── SHOPPING GRANJA VIANA\
    ├── SHOPPING JOCKEY\
    └── SHOPPING PARALELA\
```

---

## Problema conhecido resolvido

**Logo e imagens não apareciam nas sub-páginas** após hidratação React.
- HTML pré-renderizado estava correto, mas os **bundles JS** tinham URLs do CDN hardcoded
- Fix: `sed -i` nos 3 arquivos JS (`logo*.js`, `routes*.js`, `sobre*.js`) no servidor

---

## O que falta

- [ ] Trocar imagens dos botões (usuário quer fotos específicas enviadas no chat)
- [ ] Integrar fotos reais dos 8 clientes em `src/lib/clientes.ts`
- [ ] Integrar 49 imagens de peças na página `/pecas`
- [ ] Testar no totem físico (TV 42")

---

_Última atualização: 2026-06-21_
