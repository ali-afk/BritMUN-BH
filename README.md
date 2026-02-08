# BRITMUN XI Website

[![Netlify Status](https://api.netlify.com/api/v1/badges/17ce0c9b-2b75-4631-9e54-a518e7032654/deploy-status)](https://app.netlify.com/projects/britmun/deploys)

Official website for British School of Bahrain Model United Nations Conference XI.
Built with SvelteKit 2, Svelte 5, and TypeScript.

## Quick Start

```bash
bun install    # Install dependencies
bun dev        # Start dev server (http://localhost:5173)
bun run build  # Build for production
```

## Documentation

### Getting Started

| Guide | Description |
| ------- | ------------- |
| [Development Guide](docs/development.md) | Daily workflow, common tasks, troubleshooting |
| [Updating for Next Conference](docs/updating-for-next-conference.md) | Step-by-step guide for BritMUN XII handoff |

### Features & Implementation

| Guide | Description |
| ------- | ------------- |
| [PWA & Web Standards](docs/pwa-web-standards.md) | Service worker, manifest, web endpoints |
| [SEO Strategy](docs/seo-strategy.md) | Meta tags, structured data, keywords |
| [CSS Guide](docs/css.md) | Design tokens, styling patterns |
| [Color System](docs/color-system.md) | OKLCH auto-contrast explained |

### Development

| Guide | Description |
| ------- | ------------- |
| [SvelteKit Guide](docs/sveltekit.md) | Component patterns, Svelte 5 runes |
| [TypeScript Patterns](docs/typescript.md) | Type safety patterns |
| [Architecture Decisions](docs/architecture-decisions.md) | Non-obvious implementation choices |
| [Contributing](CONTRIBUTING.md) | Commit format, handoff checklist |

## Content Files

| Content | File |
| --------- | ------ |
| FAQs | `src/lib/data/home/faqs.ts` |
| Testimonials | `src/lib/data/home/testimonials.ts` |
| Councils | `src/lib/data/councils/categories.ts` |
| Council Images | `src/lib/data/councils/images.ts` |
| Design Tokens | `src/lib/data/design-tokens.ts` |

## Deployment

Push to GitHub (main, dev) triggers automatic Netlify deployment.

```bash
git push    # Auto-deploys to production
```

## Links

- **Live Site:** [https://britmun.netlify.app/]
- **Netlify Dashboard:** [https://app.netlify.com/teams/britmun/projects]
