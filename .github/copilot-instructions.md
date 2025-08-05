---
applyTo: "**"
---


# GitHub Copilot Usage Guidelines for Blueprint

## 🧠 General Principles & Clean Code

- Apply KISS, YAGNI, SOLID, and DRY principles at all times.
- Every file must start with a commented header describing context and purpose.
- Comment every function, React component, and complex logic block.
- Use explicit, descriptive names in English only.
- Structure folders in kebab-case.
- Use PascalCase for components, types, and interfaces.
- Use camelCase for variables and functions.
- Use ALL_CAPS for constants.
- Prefer named exports over default exports.
- Avoid magic numbers and strings; use constants or enums.
- Keep functions and components small and focused.
- Remove unused code and imports.

## ⚛️ React & TypeScript Best Practices

- Use functional components and React hooks.
- Type all props, state, and function signatures explicitly.
- Prefer React.FC for component type annotations.
- Use useEffect, useCallback, and useMemo appropriately to optimize performance.
- Co-locate component styles and tests with the component file when possible.
- Use context and custom hooks for shared logic.
- Avoid prop drilling; use context or state management if needed.
- Use error boundaries for critical UI sections.

## 🛠️ Vite & Project Structure

- Use Vite conventions for fast builds and hot reloads.
- Place static assets in the public/ directory.
- Keep src/ organized by feature or domain (feature folders).
- Place shared hooks in src/hooks/, shared components in src/components/.
- Use environment variables via import.meta.env and document their usage.

## 🧪 Testing

- Write unit and integration tests for all components and hooks.
- Use descriptive test names and group related tests with describe blocks.
- Mock external dependencies and APIs in tests.

## 📝 Documentation & Comments

- Document all public APIs, exported functions, and complex logic.
- Use JSDoc or TypeScript doc comments for types and interfaces.
- Keep README.md and code comments up to date.

## 🧹 Linting & Formatting

- Follow ESLint and Prettier rules; do not disable rules without strong justification.
- Fix all lint and type errors before committing.

## 🔒 Security & Best Practices

- Never commit secrets or credentials.
- Sanitize and validate all user input.
- Use parameterized queries for any SQL or database access.

## 🏷️ Git & Pull Requests

- Write clear, concise commit messages in English.
- Reference related issues in pull requests.
- Ensure all checks pass before merging.