# Chronos AI Workspace

This repository is a **pnpm monorepo** exported from Replit. The main business website is the frontend package at:

- `artifacts/chronos-ai`

If you just want to run the website that matches the screenshot, run that package with the required environment variables (`PORT` and `BASE_PATH`).

---

## 1) Prerequisites

- **Node.js 24.x** (recommended, matches `replit.md`)
- **pnpm** (workspace enforces pnpm usage)

Check versions:

```bash
node -v
pnpm -v
```

If pnpm is missing, install it globally:

```bash
npm install -g pnpm
```

---

## 2) Install dependencies (workspace root)

From the repository root:

```bash
pnpm install
```

This installs dependencies for all workspace packages.

---

## 3) Run the Chronos AI website (development)

From the repository root:

```bash
PORT=5173 BASE_PATH=/ pnpm --filter @workspace/chronos-ai run dev
```

Then open:

- `http://localhost:5173/`

### Why these env vars are required

The Vite config for this package throws an error unless both are set:

- `PORT` → local server port (for example, `5173`)
- `BASE_PATH` → deployment base path (`/` for normal local use)

If you see an error like _"PORT environment variable is required"_ or _"BASE_PATH environment variable is required"_, run the command above exactly as shown.

---

## 4) Build and preview production output

Build the website package:

```bash
PORT=4173 BASE_PATH=/ pnpm --filter @workspace/chronos-ai run build
```

Preview the production build:

```bash
PORT=4173 BASE_PATH=/ pnpm --filter @workspace/chronos-ai run serve
```

Then open:

- `http://localhost:4173/`

---

## 5) Useful workspace commands

Run full workspace typecheck:

```bash
pnpm run typecheck
```

Run full workspace build:

```bash
pnpm run build
```

---

## 6) Project structure (quick map)

- `artifacts/chronos-ai` → main marketing website (React + Vite)
- `artifacts/mockup-sandbox` → sandbox UI package
- `artifacts/api-server` → API server artifact
- `lib/*` → shared libraries (API clients, DB schema, etc.)
- `scripts` → utility scripts

For your business site specifically, focus on `artifacts/chronos-ai`.

---

## 7) Troubleshooting

### `Use pnpm instead`
The root `preinstall` script blocks npm/yarn. Use `pnpm install`.

### Port already in use
Use another port:

```bash
PORT=5180 BASE_PATH=/ pnpm --filter @workspace/chronos-ai run dev
```

### Site loads but routes/assets look broken
Make sure `BASE_PATH=/` for local development.

---

## 8) Matching the provided design

The current `artifacts/chronos-ai` app already contains the dark hero layout shown in your screenshot (top nav with **Services / How It Works / Why Us / Contact**, bold heading, and consultation CTA). If your local output looks different, verify you are running the correct package (`@workspace/chronos-ai`) and not another artifact.
