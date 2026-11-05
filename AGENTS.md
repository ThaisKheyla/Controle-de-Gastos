# AGENTS.md

## Projeto

Aplicativo de controle de gastos pessoais em React + Vite. Permite cadastrar,
listar, remover e filtrar gastos por categoria, calcular totais e salvar os
dados no localStorage. Os componentes ficam em `src/components`, um por arquivo.

## Comandos

```bash
npm run dev      # Vite dev server (HMR)
npm run build    # production build -> dist/
npm run lint     # eslint . (the only check)
npm run preview  # serve the built dist/
```

- Não há framework de testes, script de testes ou etapa de typecheck.
- Não há configuração de formatter; não rode Prettier no repositório.
- Valide alterações com `npm run lint` e `npm run build`.

## Stack e convenções

- React 19 + Vite 8, JavaScript/JSX (sem TypeScript).
- Entrada: `index.html` -> `src/main.jsx` -> `src/App.jsx`.
- Estilos globais em `src/index.css` e da aplicação em `src/App.css`.
- Aplicação frontend sem backend; os gastos são persistidos no navegador.
- ESLint verifica `react-hooks` e `react-refresh` em arquivos JS/JSX.

## Regras

- Responda e comente o código em português.
- Use apenas React: não instale bibliotecas novas.
- Use componentes de função e hooks do React para o estado e efeitos.
- Use nomes de variáveis e componentes em português.
- Crie os componentes em src/components, um por arquivo.
- Mostre valores em reais, com duas casas: R$ 12,50.
- Mantenha os textos da interface em português (pt-BR).
- Não crie nem edite o RELATORIO.md.
- Faça apenas as alterações solicitadas em cada missão.