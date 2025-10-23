// ...existing code...
# Todo (Next.js)

A minimal Next.js + Tailwind CSS to-do app created with `create-next-app`.

## Quick start

1. From the `todo` folder install dependencies and start the dev server:

```bash
cd todo
npm ci
npm run dev
# Open http://localhost:3000
```

2. Edit the main UI in [todo/src/app/page.js](todo/src/app/page.js). The primary handlers are [`addTodo`](todo/src/app/page.js), [`toggleTodo`](todo/src/app/page.js), and [`deleteTodo`](todo/src/app/page.js). UI components live in:
- [todo/src/components/AddTodoForm.jsx](todo/src/components/AddTodoForm.jsx)
- [todo/src/components/TodoList.jsx](todo/src/components/TodoList.jsx)
- [todo/src/components/TodoItem.jsx](todo/src/components/TodoItem.jsx)

## Scripts

See [todo/package.json](todo/package.json) for available scripts:

- npm run dev — start dev server
- npm run build — build for production (static export)
- npm run start — run production server
- npm run lint — run ESLint

## Build & Deploy

This project is configured for static export (see [todo/next.config.mjs](todo/next.config.mjs)). To build the static output:

```bash
cd todo
npm run build
# Output is placed in ./todo/out
```

A GitHub Actions workflow at [.github/workflows/main.yml](.github/workflows/main.yml) uploads the `./todo/out` artifact and deploys to GitHub Pages.

## Styling

Tailwind/PostCSS are configured. See [todo/postcss.config.mjs](todo/postcss.config.mjs) and the Tailwind import in [todo/src/app/globals.css](todo/src/app/globals.css).

## License

MIT — see the repository LICENSE.
{ changed code }
// ...existing code...