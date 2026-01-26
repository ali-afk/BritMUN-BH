# Contributing

## Getting Started

1. Read the [Development Guide](docs/development-guide.md) for setup and workflow
2. Run `bun dev` and make a test change to verify your setup
3. Review the guides in `docs/` for patterns used in this codebase

## Code Style

Formatting is automatic via Biome (runs on commit). Key conventions:

- **Tabs** for indentation
- **Double quotes** for strings
- **PascalCase.svelte** for components, **kebab-case.ts** for scripts
- Always use design tokens: `var(--color-primary-500)`, not hardcoded values

See [CSS Guide](docs/css-guide.md) and [SvelteKit Guide](docs/sveltekit-guide.md) for patterns.

## Commit Messages

Format: `<type>[+type]: <summary>`

| Type | Use For |
|------|---------|
| `feat` | New feature |
| `feat-rm` | Remove feature |
| `fix` | Bug fix |
| `update` | Improve existing feature |
| `content` | Content updates |
| `style` | Visual/CSS changes |
| `refactor` | Code cleanup (no behavior change) |
| `docs` | Documentation |
| `config` | Configuration |
| `chore` | Maintenance |
| `misc` | Other |

Examples:
```bash
git commit -m "content: update FAQs for BRITMUN XII"
git commit -m "feat+style: add countdown timer with animations"
```

## Year-to-Year Handoff

### Before Handoff
- [ ] Update/clear conference-specific content
- [ ] Document any custom changes made
- [ ] Run `bun update` and `bun build` to verify everything works
- [ ] List external services and where credentials are stored

### Transfer Access
- [ ] GitHub repository (add as collaborators)
- [ ] Netlify account (add as team members)
- [ ] Domain registrar (if applicable)
- [ ] Any API keys (in Netlify env vars)

### Handoff Meeting (2 hours)
1. Walk through README and docs together
2. Have them make and deploy a simple change
3. Show common tasks (add FAQ, change colors, add page)
4. Walk through troubleshooting, transfer access

## Resources


| Guide | Description |
|-------|-------------|
| [Development Guide](docs/development-guide.md) | Daily workflow, common tasks, troubleshooting |
| [CSS Guide](docs/css-guide.md) | Design tokens, styling patterns |
| [SvelteKit Guide](docs/sveltekit-guide.md) | Component patterns, Svelte 5 runes |
| [TypeScript Patterns](docs/typescript-patterns.md) | Type safety patterns |

