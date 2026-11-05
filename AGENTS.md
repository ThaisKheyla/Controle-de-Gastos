# AGENTS.md

## Project state

This is a **default Vite + React starter**, despite the name `controle-gastos`.
`src/App.jsx` still renders the template landing page (logos, counter, links);
the expense-tracking features do not exist yet. The root `README.md` is the
unmodified Vite template README — trust `package.json` and the source instead.

`RELATORIO.md` is a course deliverable with questions to answer. Do not delete
or rewrite it unless asked.

## Commands

```bash
npm run dev      # Vite dev server (HMR)
npm run build    # production build -> dist/
npm run lint     # eslint . (the only check)
npm run preview  # serve the built dist/
```

- No test framework, test script, or typecheck step exists. Do not add test
  commands to docs or CI that aren't real.
- There is no formatter config; do not run Prettier on the repo.
- Verify changes with `npm run lint` and `npm run build`.

## Stack and conventions

- React 19 + Vite 8, plain JavaScript/JSX (no TypeScript, no `tsconfig`).
- Entry chain: `index.html` -> `src/main.jsx` -> `src/App.jsx`.
- Global styles in `src/index.css`; component styles in `src/App.css`.
- `public/` files are served from `/` (e.g. `/icons.svg#...`, `/favicon.svg`).
- ESLint enforces `react-hooks` and `react-refresh` rules on `**/*.{js,jsx}`,
  ignoring `dist`. Keep modules exporting only components (or constants) so
  Fast Refresh keeps working.
- Frontend-only: no backend, API client, router, or state library is installed.
  Persist data client-side rather than inventing a server.

## Notes

- UI copy and the assignment text are in Portuguese (pt-BR); keep user-facing
  strings in Portuguese unless told otherwise.
## Regras

- Responda e comente o código em português.
- Use apenas React: não instale bibliotecas novas.
- Use componentes de função e useState para o estado.
- Use nomes de variáveis e componentes em português.
- Crie os componentes em src/components, um por arquivo.
- Mostre valores em reais, com duas casas: R$ 12,50.
- Não crie nem edite o RELATORIO.md.
- Faça apenas as alterações solicitadas em cada missão.