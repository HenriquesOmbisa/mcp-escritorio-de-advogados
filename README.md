# MPC Escritório de Advogados — Website

Website institucional em **Next.js** para o **MPC Escritório de Advogados** (Luanda, Angola). Design executivo em verde e dourado, português de Angola (`pt-AO`), com páginas estáticas, formulários validados e SEO completo.

## Stack

- **Next.js 16** (App Router, Turbopack) · **React 19**
- **Tailwind CSS v4**
- **shadcn/ui** (preset `radix-nova`) com componentes em `src/components/ui`
- **react-hook-form** + **zod** para formulários (consulta e contacto)
- **framer-motion** para animações (loader de página, hero)
- **react-icons** / **lucide-react** para ícones

## Estrutura

```
src/
├── app/                  # Rotas (App Router)
│   ├── layout.tsx        # Layout raiz + SEO (metadata, OG, JSON-LD)
│   ├── globals.css       # Tema (cores, fontes, raio)
│   ├── page.tsx          # Home
│   ├── sobre-nos/        # Sobre o escritório
│   ├── areas-de-actuacao/  # Lista de áreas + [slug]/ (9 páginas SSG)
│   ├── consultas/        # Página de consultas (modalidades + processo)
│   ├── contactos/        # Contactos + formulário
│   ├── sitemap.ts
│   ├── robots.ts
│   └── icon.tsx / apple-icon.tsx
├── components/
│   ├── ui/               # Componentes shadcn (button, input, form, select…)
│   ├── forms/            # Formulários RHF (consulta, contacto)
│   ├── hero.tsx
│   ├── page-loader.tsx   # Loader do 1º acesso / recargas
│   └── footer.tsx
└── lib/
    ├── constants.ts      # Áreas, contactos, estatísticas, SITE_URL
    ├── validations.ts    # Schemas zod
    └── utils.ts
```

## Começar

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Comandos

| Comando            | Descrição                    |
| ------------------ | ---------------------------- |
| `npm run dev`      | Servidor de desenvolvimento  |
| `npm run build`    | Build de produção            |
| `npm run start`    | Serve a build de produção    |
| `npm run lint`     | ESLint                       |
| `npx tsc --noEmit` | Verificação de tipos         |

## Configuração

- **`SITE_URL`** (`src/lib/constants.ts`): placeholder `https://mpcadvogados.ao` — substituir pelo domínio real antes do deploy.
- **Contactos**: fictícios em `src/lib/constants.ts` (`CONTACT`), atualizar com os dados reais.
- **Imagens**: `public/bg-image.png` (fundo) e `public/images/` (Unsplash) — substituir pelas fotografias reais do escritório.

## Deploy

Compatível com plataformas Next.js (Vercel, Node servers). As páginas de áreas são geradas estaticamente (`generateStaticParams`); a home e restantes rotas são pré-renderizadas.
