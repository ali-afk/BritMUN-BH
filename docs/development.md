# Development Guide

## Quick Start

```bash
git pull                    # Get latest
bun dev                     # Dev server at localhost:5173
bun fix-all                 # Format and fix code
git push                    # Auto-deploys to Netlify
```

## Project Structure

```
src/
├── lib/
│   ├── components/         # UI components
│   ├── data/               # Content files
│   │   ├── default-properties.ts  # Design tokens
│   ├── scripts/            # Utilities
│   ├── assets/             # Images (bundled)
│   └── styles/             # Global CSS
└── routes/                 # Pages
    ├── +page.svelte        # Homepage (/)
    ├── +layout.svelte      # Site layout
    └── councils/+page.svelte

static/                     # Files served as-is (/favicon.png, /councils/*)
```

## Common Tasks

### Add FAQ

Edit `src/lib/data/home/faqs.ts`:

```typescript
export const faqs: Faq[] = [
 {
  question: "What should I bring?",
  answer: "Laptop, notepad, delegate pass..."
 },
];
```

### Add Testimonial

Edit `src/lib/data/home/testimonials.ts`:

```typescript
export const testimonials: Testimonial[] = [
  { title: "SC Chair", year: "2024", comment: "Amazing experience..." },
];
```

### Add Council

Edit `src/lib/data/councils/index.ts`:

```typescript
export const councils: Council[] = [
 {
  name: "UN Security Council",
  image: "/councils/unsc.webp",
  backgroundGuide: "/404"
 },
];
```

### Change Colors

Edit `src/lib/data/default-properties.ts`:

```typescript
color: {
  primary: {
    500: "#934599",  // Main brand
    700: "#7a3a7f",  // Dark variant
  },
}
```

All themed elements update automatically.

### Add Page

1. Create `src/routes/about/+page.svelte`
2. Add to navigation in `Header.svelte`

```svelte
<svelte:head>
  <title>About | BRITMUN</title>
</svelte:head>

<section class="container">
  <h1>About</h1>
</section>

<style>
.container {
 max-width: var(--container-max);
 margin-inline: auto;
 padding: var(--space-6);
}
</style>
```

### Add Component

1. Create `src/lib/components/[page]/NewComponent.svelte`
2. Export from `src/lib/components/[page]/index.ts`
3. Import with `import { NewComponent } from "$components/[page]"`

## Image Optimization

```bash
bunx sharp input.jpg --resize 800 --webp --quality 85 --output output.webp
```

| Type | Max Width | Format |
| ------ | ----------- | -------- |
| Hero | 1920px | WebP |
| Council | 800px | WebP |
| Logo | 400px | WebP/PNG |

**Placement:** Static assets → `static/`, component assets → `src/lib/assets/`

## Git Workflow

```bash
git checkout -b feature/my-feature
# make changes
git commit -m "feat: add feature"
git push -u origin feature/my-feature
# Create PR, merge to dev, then main
```

See [CONTRIBUTING.md](../CONTRIBUTING.md) for commit message format.

## Troubleshooting

```bash
# Dev server issues
killall node && rm -rf .svelte-kit && bun install && bun dev

# Build issues
bun watch                   # Check type errors
bun fix-all                 # Fix formatting
rm -rf .svelte-kit node_modules && bun install && bun build

# IDE type errors
bun exec svelte-kit sync    # Regenerate types
```

## Testing Checklist

- [ ] Homepage loads
- [ ] Navigation works
- [ ] FAQs expand/collapse
- [ ] Images load (no 404s in console)
- [ ] Mobile responsive
- [ ] `bun build && bun preview` works

## Deployment

```bash
git push                    # Auto-deploys to Netlify
# Or manual: netlify deploy --prod
```

## Environment

**Required:** Node.js 18+, Bun 1+, Git

**VS Code Extensions:** Svelte for VS Code, Biome

**Config Files:** `svelte.config.js`, `vite.config.ts`, `tsconfig.json`, `biome.json`

## Commands

```bash
bun dev          # Dev server
bun build        # Production build
bun preview      # Preview build
bun watch        # Type checking
bun fix-all      # Format + lint
```
