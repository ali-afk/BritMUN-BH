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
│   │   ├── imageProperties.ts # LoadPriority for image loading
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

1. Add optimized image to `src/lib/assets/councils/` (WebP, max 800px width)
2. Export from barrel: `src/lib/assets/councils/index.ts`
3. Get image dimensions: `identify your-image.webp` (returns WxH)
4. Add to `src/lib/data/councils/council-categories.ts`:

```typescript
import { Unsc } from "$assets/councils";

export const councilCategories: CouncilCategory[] = [
  {
    name: "General Assembly",
    councils: [
      {
        name: "UN Security Council",
        image: Unsc,
        backgroundGuide: "https://drive.google.com/...",
        width: 800,   // Required: actual image width
        height: 681,  // Required: actual image height
      },
    ],
  },
];
```

**Important:** `width` and `height` are required for CLS optimization.
Use actual image dimensions (not display size).

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
2. Add to navigation in `src/lib/components/NavLinks.svelte`

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

### Barrel Export Pattern

Directories use `index.ts` files to centralize exports:

```typescript
// src/lib/components/home/index.ts
export { default as FaqList } from "./FaqList.svelte";
export { default as Testimonial } from "./Testimonial.svelte";

// src/lib/assets/councils/index.ts
export { default as Unsc } from "./unsc.png";
export { default as Iaea } from "./iaea.png";
```

**Benefits:**

- Cleaner imports: `"$components/home"` instead of `"$components/home/FaqList.svelte"`
- Internal file structure can change without breaking imports
- Encapsulates implementation details

**Conventions:**

- Component exports: Match filename (`FaqList.svelte` → `FaqList`)
- Asset exports: PascalCase regardless of filename (`unsc.png` → `Unsc`)

**Important:** New components/assets must be manually added to `index.ts`.
This is easy to forget - if an import fails, check the barrel export first.

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
