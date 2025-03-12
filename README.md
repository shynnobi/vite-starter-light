# Vite Starter Light

A modern, lightweight React template using Vite.

## 🚀 Key Features

- ⚡️ Vite + React 18 + TypeScript
- 🎨 Tailwind CSS + shadcn/ui
- 🧪 Jest + React Testing Library
- 📝 ESLint + Prettier + Commitlint
- 🔄 Husky + lint-staged

## 🚦 Getting Started

### 1. GitHub Template (Recommended)

1. Visit [vite-starter-light](https://github.com/shynnobi/vite-starter-light)
2. Click "Use this template" > "Create a new repository"
3. Clone your new repository:

```bash
git clone https://github.com/shynnobi/vite-starter-light.git
cd my-app
pnpm install  # or npm install, or yarn
pnpm dev      # start development server
```

Note: This method will include the Git history of the template.

### 2. Using degit (Clean Start)

This is the recommended method if you want to start with a clean Git history:

```bash
pnpm dlx degit shynnobi/vite-starter-light my-app
cd my-app
pnpm install
git init  # Initialize a fresh Git repository
```

### 3. Using create-vite

```bash
pnpm create vite my-app --template github:shynnobi/vite-starter-light
```

## 📜 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm test` - Run tests
- `pnpm lint` - Check and fix linting errors
