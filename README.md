# Vite Starter Light

A modern, lightweight React template using Vite, optimized for both development and production environments.

## 🚀 Features

- ⚡️ **Vite** - Lightning fast build tool
- ⚛️ **React 18** with TypeScript
- 🎨 **Tailwind CSS** - With shadcn/ui components
- 🧪 **Testing** - Jest and React Testing Library
- 📝 **ESLint & Prettier** - Code linting and formatting
- 🔄 **Husky & lint-staged** - Git hooks for code quality
- 📋 **Commitlint** - Standardized commit conventions
- 🔍 **Type Safety** - Strict TypeScript configuration
- 📱 **Responsive Design** - Mobile-first approach with Tailwind
- 🎯 **Accessibility** - ARIA-compliant components from shadcn/ui

## 📦 Project Structure

```
src/
├── assets/        # Images, fonts, and other static resources
├── components/    # Reusable React components
├── lib/          # Utilities and helper functions
├── types/        # TypeScript type definitions
├── __tests__/    # Unit and integration tests
└── test-utils/   # Testing utilities and helpers
```

## 🛠️ Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm test` - Run tests
- `pnpm test:watch` - Run tests in watch mode
- `pnpm test:coverage` - Generate test coverage report
- `pnpm lint` - Check and fix linting errors
- `pnpm format` - Format code with Prettier
- `pnpm clean` - Clean build artifacts

## 🚦 Getting Started

1. Clone the project

```bash
git clone [repository-url]
cd vite-starter-light
```

2. Install dependencies

```bash
pnpm install
```

3. Start development server

```bash
pnpm dev
```

## 📝 Commit Convention

This project follows conventional commits. Supported commit types:

- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation changes
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `test`: Adding or updating tests
- `chore`: Maintenance tasks

## 🧪 Testing

Testing is configured with:

- Jest as the test runner
- React Testing Library for component testing
- Coverage reports via `pnpm test:coverage`
- Test utilities for common testing patterns
- Snapshot testing support

## 📚 Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Testing**: Jest + React Testing Library
- **Linting**: ESLint
- **Formatting**: Prettier
- **Git Hooks**: Husky + lint-staged
- **Commit Convention**: Commitlint
- **Package Manager**: pnpm
- **Development Experience**: Hot Module Replacement (HMR)

## 📂 File Organization

- `public/` - Static files served directly
- `src/assets/` - Resources imported in code
- `src/components/` - Reusable React components
- `src/lib/` - Utilities and business logic
- `src/types/` - Global TypeScript types
- `src/__tests__/` - Unit and integration tests

## 🔧 Configuration Files

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `eslint.config.js` - ESLint rules
- `.prettierrc` - Prettier formatting rules
- `jest.config.cjs` - Jest testing configuration
