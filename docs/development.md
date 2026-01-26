# Development Guide

## Quick Start

```bash
git pull                    # Get latest
bun dev                     # Dev server at localhost:5173
bun fix-all                 # Format and fix code
git push                    # Auto-deploys to Netlify
```

## Project Structure

```bash
src/
├── lib/
│   ├── components/         # UI components
│   ├── data/               # Content files
│   │   ├── default-properties.ts  # Design tokens
│   │   ├── home/           # Homepage data (faqs, testimonials)
│   │   └── councils/       # Council data (categories, documents)
│   ├── types/              # Reusable TypeScript types
│   │   ├── colors.ts       # ColorScale, ColorDegrees, ColorRecord
│   │   └── properties.ts   # PropertyConfig, PropertyNode
│   ├── scripts/            # Utilities
│   ├── assets/             # Images (bundled, with barrel exports)
│   └── styles/             # Global CSS
└── routes/                 # Pages
    ├── +page.svelte        # Homepage (/)
    ├── +page.server.ts     # Homepage data loader
    ├── +layout.svelte      # Site layout (Header only)
    └── councils/
        ├── +page.svelte    # Councils page
        └── +page.server.ts # Councils data loader

static/                     # Files served as-is (/favicon.png)
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

Edit `src/lib/data/councils/council-categories.ts`:

```typescript
import { Unsc } from "$assets/councils";

export const councilCategories: CouncilCategory[] = [
  {
    name: "General Assembly",
    councils: [
      {
        name: "UN Security Council",
        image: Unsc,  // Import from $assets/councils barrel export
        backgroundGuide: "/404"
      },
    ],
  },
];
```

Note: Council images use barrel exports from `$assets/councils` (PascalCase names).

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
bunx sharp-cli input.jpg --resize 800 --webp --quality 85 --output output.webp
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

See [CONTRIBUTING](../CONTRIBUTING.md) for commit message format.

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
# Or manual: bun netlify deploy --prod
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
