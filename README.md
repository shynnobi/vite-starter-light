# Vite Starter Light

A modern, lightweight React template using Vite.

## 🚀 Key Features

- ⚡️ Vite + React 18 + TypeScript
- 🎨 Tailwind CSS + shadcn/ui
- 🧪 Jest + React Testing Library
- 📝 ESLint + Prettier + Commitlint
- 🔄 Husky + lint-staged

## 🚦 Getting Started

### 1. Clean Start with degit (Recommended)

For a fresh project without Git history:

```bash
pnpm dlx degit shynnobi/vite-starter-light my-app
cd my-app
pnpm install
git init  # Initialize a fresh Git repository
pnpm dev  # Start development server
```

📌 **Why use `degit`?**

- No `.git` folder → You start with a clean history
- Faster than `git clone`
- Ideal for starting fresh projects

### 2. GitHub Template

This method creates a new repository from the template while preserving the Git history.

1. Visit [vite-starter-light](https://github.com/shynnobi/vite-starter-light)
2. Click "Use this template" > "Create a new repository"
3. Clone your new repository:

```bash
git clone https://github.com/shynnobi/vite-starter-light.git my-app
cd my-app
pnpm install  # or npm install, or yarn
pnpm dev      # start development server
```

📌 **Note:** This method includes the full Git history of the template. If you prefer a clean start without commit history, use the `degit` method above.

### 3. Using create-vite

This method fetches the latest version of the template from GitHub, but may not always be perfectly in sync.

```bash
pnpm create vite my-app --template github:shynnobi/vite-starter-light
```

## 📜 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm test` - Run tests
- `pnpm lint` - Check and fix linting errors
