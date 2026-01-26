# BRITMUN XI Website

Official website for British School of Bahrain Model United Nations Conference XI.
Built with SvelteKit 2, Svelte 5, and TypeScript.

## Quick Start

```bash
bun install    # Install dependencies
bun dev        # Start dev server (http://localhost:5173)
bun run build      # Build for production
```

## Documentation

| Guide | Description |
|-------|-------------|
| [Development Guide](docs/development-guide.md) | Daily workflow, common tasks, troubleshooting |
| [CSS Guide](docs/css-guide.md) | Design tokens, styling patterns |
| [SvelteKit Guide](docs/sveltekit-guide.md) | Component patterns, Svelte 5 runes |
| [TypeScript Patterns](docs/typescript-patterns.md) | Type safety patterns |
| [Contributing](CONTRIBUTING.md) | Commit format, handoff checklist |

## Content Files

| Content | File |
|---------|------|
| FAQs | `src/lib/data/home/faqs.ts` |
| Testimonials | `src/lib/data/home/testimonials.ts` |
| Councils | `src/lib/data/councils/index.ts` |
| Colors/Design | `src/lib/data/default-properties.ts` |

## Deployment

Push to GitHub triggers automatic Netlify deployment.

```bash
git push    # Auto-deploys to production
```

## Links

- **Live Site:** [Add URL]
- **Netlify Dashboard:** [Add URL]