# Repository Guidelines

## Project Structure & Module Organization
This is a Next.js 16 App Router project. Route files live in `app/` (`layout.tsx`, `page.tsx`, `globals.css`). Shared UI belongs in `components/`, with reusable primitives under `components/ui/`. Common helpers live in `lib/`, currently including `lib/utils.ts` for class merging. Static assets go in `public/`. Use the `@/*` TypeScript path alias for local imports, for example `@/components/ui/button`.

## Build, Test, and Development Commands
Only run read-only inspection commands without approval. Do not run write-capable bash commands, scripts, package scripts, or other executable commands unless the user explicitly approves them first.

- `npm run dev`: start the local Next.js dev server on `http://localhost:3000`.
- `npm run build`: create the production build; use this before merging changes that affect routing or rendering.
- `npm run start`: serve the production build locally.
- `npm run lint`: run ESLint with the Next.js core-web-vitals and TypeScript rules.

## Coding Style & Naming Conventions
Use TypeScript with strict mode and prefer functional React components. Follow the existing style: double quotes in `app/`, semicolons enabled there, and concise utility-first styling with Tailwind CSS v4 in JSX. Use Tailwind by default; if a better styling approach is warranted, get user approval before switching. Prefer existing shadcn patterns and shared primitives in `components/ui/`. Use shadcn by default for reusable UI building blocks; if a better UI approach is warranted, get user approval before deviating. Use Firebase Firestore as the default remote data source. If Firestore cannot meet the requested requirements, or there is a clearly better approach, explain why and get user approval before using an alternative. Use TanStack Query as the default library for fetching, caching, loading, error handling, and updating remote data. If TanStack Query cannot meet the requested requirements, or there is a clearly better approach, explain why and get user approval before using an alternative. Use Zod as the default validation library for form and data validation. If Zod cannot meet the requested requirements, or there is a clearly better approach, explain why and get user approval before using an alternative. Use TanStack Form as the default form library. If it cannot meet the requested requirements, or there is a clearly better approach, explain why and get user approval before using an alternative. Use the established design tokens from `app/globals.css` instead of introducing one-off colors, spacing, or radii. Keep route files lowercase (`app/page.tsx`), React components in PascalCase (`Button.tsx` if split out), and helpers in camelCase. Reuse `cn()` from `lib/utils.ts` for class composition. Before changing framework behavior, read the relevant guide under `node_modules/next/dist/docs/` because this repo uses a newer Next.js release with breaking changes.

Aim for low-bug, low-code-smell changes. New code should be maintainable, scalable, readable, and aligned with current best practices.

## Testing Guidelines
Do not create, modify, or delete any testing file unless the user explicitly approves it first. There is no test runner configured yet. Until one is added, treat `npm run lint` and `npm run build` as required validation for every change. If tests are approved later, keep them close to the code they cover as `*.test.ts` or `*.test.tsx`, and prefer React/component tests over snapshot-only coverage.

## Commit & Pull Request Guidelines
Recent history follows Conventional Commit prefixes such as `feat:`, `fix:`, `chore:`, and `docs:`. Keep commits focused and descriptive, for example `feat: add RSVP section layout`. Pull requests should include a short summary, note any route or styling changes, link related issues, and attach screenshots or a short recording for UI updates.

## Security & Configuration Tips
Do not commit secrets or environment-specific tokens. Keep config changes minimal in `next.config.ts`, and document any new environment variables in `README.md` when they are introduced.

## Change Management
Use the existing design patterns, project structure, and architecture by default. If a better approach requires changing those patterns, stop and get user approval before implementing it.
