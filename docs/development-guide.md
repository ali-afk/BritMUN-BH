# Developer Maintenance Guide

Practical guide for maintaining and developing the BRITMUN website. Focus on common tasks, workflows, and project-specific patterns.

## Daily Development Workflow

```bash
# Start your day
git pull                    # Get latest changes
pnpm dev                    # Start dev server (http://localhost:5173)

# Make changes
# Edit files → See changes instantly in browser

# Before committing
pnpm fix-all                # Format and lint entire codebase
# OR rely on pre-commit hook to format staged files

# Commit (uses template from .gitmessage)
git add .
git commit                  # Opens editor with template
# OR
git commit -m "content: update FAQs for BRITMUN XII"

# Deploy
git push                    # Auto-deploys to Netlify
```

## Project Organization

### Where Everything Lives

```
src/
├── lib/
│   ├── components/          # UI components
│   │   ├── Header.svelte        → Navigation bar
│   │   ├── Footer.svelte        → Site footer
│   │   └── home/                → Homepage-specific components
│   │       ├── Faq.svelte           → Single FAQ accordion
│   │       ├── FaqList.svelte       → FAQ section
│   │       ├── Testimonial.svelte   → Single testimonial card
│   │       └── TestimonialList.svelte → Testimonials section
│   ├── data/                # Content and configuration
│   │   ├── default-properties.ts → Design tokens (colors, spacing, fonts)
│   │   └── home/                 → Homepage content
│   │       ├── faqs.ts               → FAQ data
│   │       └── testimonials.ts       → Testimonial data
│   ├── scripts/             # Utility functions
│   │   ├── utils.ts              → General utilities
│   │   ├── media.ts              → Media query utilities
│   │   ├── transition.ts         → Animation transitions
│   │   └── register-properties.ts → CSS property registration
│   ├── assets/              # Images, icons
│   └── styles/              # Global CSS
│       └── variables.css         → CSS custom properties
└── routes/                  # Pages (file-based routing)
    ├── +page.svelte             → Homepage (/)
    ├── +layout.svelte           → Site-wide layout
    └── councils/
        └── +page.svelte         → Councils page (/councils)

static/                      # Files served as-is
├── favicon.png
├── robots.txt
└── councils/                # Council images
```

### Component Pattern

**List component** (renders data):

```svelte
<!-- src/lib/components/home/FaqList.svelte -->
<script lang="ts">
  import { faqs } from "$data/home/faqs";
  import Faq from "./Faq.svelte";
</script>

{#each faqs as faq}
  <Faq question={faq.question}>
    {faq.answer}
  </Faq>
{/each}
```

**Individual component** (reusable):

```svelte
<!-- src/lib/components/home/Faq.svelte -->
<script lang="ts">
  let { question, children } = $props();
  let isOpen = $state(false);
</script>

<article>
  <button onclick={() => (isOpen = !isOpen)}>
    {question}
  </button>
  {#if isOpen}
    <div>{@render children()}</div>
  {/if}
</article>
```

## Common Tasks

### Add FAQ

**File:** `src/lib/data/home/faqs.ts`

```typescript
export const faqs: Faq[] = [
  // Add new FAQ here
  {
    question: "What should I bring to BRITMUN?",
    answer: "Bring your laptop, notepad, pens, and delegate pass...",
  },
  // Existing FAQs...
];
```

**That's it.** The homepage automatically displays it.

### Add Testimonial

**File:** `src/lib/data/home/testimonials.ts`

```typescript
export const testimonials: Testimonial[] = [
  {
    title: "Security Council Chair",
    year: "2024",
    comment: "BRITMUN was an incredible experience that...",
  },
  // Add more testimonials here
];
```

### Add Council

**File:** `src/lib/data/councils/index.ts`

```typescript
export const councils: Council[] = [
  {
    name: "United Nations Security Council",
    type: "Crisis",
    image: "/councils/unsc.png",  // Place image in static/councils/
    topic: "The Situation in Ukraine (2022)",
    description: "The UNSC is responsible for maintaining international peace...",
    chairs: ["Chair Name", "Co-Chair Name"],
  },
  // Add more councils here
];
```

**Image setup:**

1. Optimize image: `pnpm dlx sharp input.jpg --resize 800 --webp --quality 85 --output unsc.webp`
2. Place in `static/councils/unsc.webp`
3. Reference as `/councils/unsc.webp` (paths relative to static/)

### Change Colors

**File:** `src/lib/data/default-properties.ts`

```typescript
export const DefaultProperties = {
  color: {
    primary: {
      500: "#934599",  // Main brand color
      700: "#7a3a7f",  // Darker shade
    },
    // ...
  },
} as const satisfies DefaultPropertiesSchema;
```

**What updates automatically:**

- All text using `var(--color-primary-500)`
- All buttons using primary colors
- All tinted grays (via color-mix)
- Theme color in browser tab

### Add New Page

**1. Create route folder:**

```bash
mkdir src/routes/about
```

**2. Create page file:**

```svelte
<!-- src/routes/about/+page.svelte -->
<script lang="ts">
  import { Header, Footer } from "$components";
</script>

<svelte:head>
  <title>About BRITMUN | British School of Bahrain</title>
</svelte:head>

<main>
  <section class="container">
    <h1>About BRITMUN</h1>
    <p>
      BRITMUN is the annual Model United Nations conference
      hosted by the British School of Bahrain...
    </p>
  </section>
</main>

<style>
  .container {
    max-width: var(--container-max);
    margin-inline: auto;
    padding: var(--space-6);
  }

  h1 {
    font: var(--fw-bold) var(--fs-6) / var(--lh-1) var(--font-head);
    color: var(--color-primary-700);
    margin-bottom: var(--space-4);
  }
</style>
```

**3. Add to navigation:**

Edit `src/lib/components/Header.svelte`:

```svelte
<nav>
  <a href="/">Home</a>
  <a href="/about">About</a>  <!-- Add this -->
  <a href="/councils">Councils</a>
</nav>
```

**4. Visit:** `http://localhost:5173/about`

### Add Component

**1. Create component file:**

```svelte
<!-- src/lib/components/home/CountdownTimer.svelte -->
<script lang="ts">
  import { onMount } from "svelte";

  let { targetDate } = $props<{ targetDate: Date }>();
  let timeLeft = $state("Calculating...");

  function updateCountdown() {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const diff = target - now;

    if (diff < 0) {
      timeLeft = "Event started!";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    timeLeft = `${days} days, ${hours} hours`;
  }

  onMount(() => {
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000 * 60); // Update every minute
    return () => clearInterval(interval);
  });
</script>

<div class="countdown">
  <p>Conference starts in:</p>
  <p class="time">{timeLeft}</p>
</div>

<style>
  .countdown {
    text-align: center;
    padding: var(--space-5);
    background: var(--bg-card);
    border-radius: var(--space-3);
  }

  .time {
    font: var(--fw-bold) var(--fs-5) / var(--lh-2) var(--font-head);
    color: var(--color-primary-700);
  }
</style>
```

**2. Export from barrel:**

```typescript
// src/lib/components/home/index.ts
export { default as CountdownTimer } from "./CountdownTimer.svelte";
```

**3. Use in page:**

```svelte
<script lang="ts">
  import { CountdownTimer } from "$components/home";
</script>

<CountdownTimer targetDate={new Date("2025-03-15")} />
```

## Image Optimization

### Using Sharp CLI

```bash
# Resize and convert to WebP
pnpm dlx sharp input.jpg --resize 1920 --webp --quality 85 --output hero.webp
```

### Image Guidelines

| Type | Max Width | Max Size | Quality | Format |
|------|-----------|----------|---------|--------|
| Hero image | 1920px | 500KB | 80-85 | WebP |
| Council images | 800px | 200KB | 85 | WebP |
| Logos | 400px | 50KB | 90 | WebP/PNG |
| Icons | 64px | 10KB | 90 | SVG/PNG |

### Where to Place Images

```
static/               → Served at root (/)
├── favicon.png       → Accessible at /favicon.png
├── social-preview.png → /social-preview.png
└── councils/
    └── unsc.webp     → /councils/unsc.webp

src/lib/assets/       → Bundled with app, processed by Vite
└── home/
    └── hero.webp     → import hero from "$assets/home/hero.webp"
```

**Rule of thumb:**

- Static assets (logos, favicons, council images) → `static/`
- Component assets (hero images, backgrounds) → `src/lib/assets/`

## Git Workflow

### Commit Types

| Type | Use For | Example |
|------|---------|---------|
| `content` | Content updates | `content: update FAQs for 2025` |
| `feat` | New features | `feat: add council registration form` |
| `fix` | Bug fixes | `fix: mobile menu not closing` |
| `style` | Visual changes | `style: improve testimonial spacing` |
| `update` | Improve existing | `update: enhance form validation` |
| `refactor` | Code cleanup | `refactor: simplify header logic` |
| `docs` | Documentation | `docs: add image optimization guide` |
| `config` | Configuration | `config: update build settings` |
| `chore` | Maintenance | `chore: update dependencies` |

### Commit Message Template

```
content: update FAQs and testimonials for BRITMUN XII

--- Changes ---
- Updated FAQ answers to reflect 2025 conference
- Added 3 new testimonials from BRITMUN XI
- Removed outdated FAQs about venue

Context:
Preparing website content for BRITMUN XII registration launch.
Need to remove all references to 2024 conference.
```

### Branch Strategy

```bash
# Main branch: production
# Dev branch: staging

# Create feature branch
git checkout -b feature/add-countdown-timer

# Make changes
git add .
git commit -m "feat: add countdown timer to homepage"

# Push and create PR
git push -u origin feature/add-countdown-timer

# After review, merge to dev
# After testing, merge dev to main
```

## Troubleshooting

### Dev server won't start

```bash
# Kill existing processes
killall node

# Clear build cache
rm -rf .svelte-kit

# Reinstall dependencies
pnpm install

# Try again
pnpm dev
```

### Changes not appearing

```bash
# 1. Hard refresh browser
# Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

# 2. Restart dev server
# Ctrl+C then pnpm dev

# 3. Clear SvelteKit cache
rm -rf .svelte-kit
pnpm dev
```

### Build fails

```bash
# Check for type errors
pnpm watch

# Fix formatting
pnpm fix-all

# Clear and rebuild
rm -rf .svelte-kit node_modules
pnpm install
pnpm build
```

### Git commit blocked

Pre-commit hooks run automatically. If they fail:

```bash
# Format manually
pnpm fix-all

# Check what changed
git diff

# Try commit again
git commit -m "your message"
```

### Type errors in IDE

```bash
# Regenerate SvelteKit types
pnpm exec svelte-kit sync

# Restart TypeScript server in VS Code
# Cmd+Shift+P → "TypeScript: Restart TS Server"
```

## Testing Before Deploy

### Manual Testing Checklist

- [ ] Homepage loads correctly
- [ ] Navigation works (all links)
- [ ] FAQs expand/collapse
- [ ] Testimonials display properly
- [ ] Images load (check browser console for 404s)
- [ ] Mobile responsive (use browser dev tools)
- [ ] Accessibility (tab through page with keyboard)
- [ ] No console errors (F12 → Console tab)

### Build Test

```bash
# Build for production
pnpm build

# Preview production build
pnpm preview

# Visit http://localhost:4173
# Test the production build before deploying
```

### Cross-Browser Testing

Test in:

- Chrome/Edge (Chromium)
- Firefox
- Safari (if on Mac)

**Minimum versions:**

- Chrome 111+
- Safari 16.4+
- Firefox 113+

## Deployment

### Automatic (Recommended)

```bash
git push
```

Netlify detects the push and deploys automatically. Check Netlify dashboard for build status.

### Manual (via Netlify CLI)

```bash
# Login (one-time)
netlify login

# Deploy
netlify deploy --prod
```

## Performance Tips

### Lazy Load Images

```svelte
<img src="/councils/unsc.webp" alt="UNSC Logo" loading="lazy" />
```

Delays loading until image is near viewport.

### Optimize Fonts

Fonts are already optimized, but if adding new ones:

```html
<link rel="preload" href="/fonts/average.woff2" as="font" type="font/woff2" crossorigin />
```

### Code Splitting

Already automatic. SvelteKit splits code by route:

- Homepage code loads first
- Councils page code loads when needed

## Year-to-Year Handoff

### Content Updates

**Before new conference:**

```typescript
// Update conference year
// Update dates
// Clear old testimonials
// Update FAQ answers
// Clear council descriptions (or mark as previous year)
```

**Files to update:**

- `src/lib/data/home/faqs.ts`
- `src/lib/data/home/testimonials.ts`
- `src/lib/data/councils/index.ts`
- `src/routes/+layout.svelte` (meta tags)
- `static/social-preview.png` (social media image)

### Access Transfer

- [ ] GitHub repository access
- [ ] Netlify account access
- [ ] Domain registrar (if custom domain)
- [ ] Any API keys (stored in Netlify env vars)

### Knowledge Transfer

Schedule session with next year's team:

1. Walk through this guide (30 min)
2. Demo making changes (30 min)
3. Show troubleshooting (15 min)
4. Answer questions (15 min)

## Dependencies

### Update Dependencies

```bash
# Check for updates
pnpm outdated

# Update all (careful, test after)
pnpm update

# Update specific package
pnpm update svelte@latest
```

### Key Dependencies

- **SvelteKit** - Framework
- **Vite** - Build tool
- **TypeScript** - Type checking
- **Biome** - Linting and formatting
- **LightningCSS** - CSS processing

## Environment

### Required Software

- Node.js 18+
- pnpm 8+
- Git
- Code editor (VS Code recommended)

### Recommended VS Code Extensions

- Svelte for VS Code
- Biome (replaces ESLint + Prettier)
- TypeScript and JavaScript Language Features (built-in)

### Configuration Files

| File | Purpose |
|------|---------|
| `svelte.config.js` | SvelteKit configuration |
| `vite.config.ts` | Build tool settings |
| `tsconfig.json` | TypeScript compiler options |
| `biome.json` | Linting and formatting rules |
| `.gitignore` | Files to exclude from Git |
| `.gitmessage` | Commit message template |
| `package.json` | Dependencies and scripts |

## Quick Command Reference

```bash
# Development
pnpm dev          # Start dev server
pnpm build        # Build for production
pnpm preview      # Preview production build
pnpm watch        # Run type checking in watch mode

# Code Quality
pnpm fix          # Format and lint staged files
pnpm fix-all      # Format and lint entire codebase

# Git
git status        # Check what changed
git add .         # Stage all changes
git commit        # Commit with template
git push          # Deploy to production
git pull          # Get latest changes

# Troubleshooting
killall node                    # Kill Node processes
rm -rf .svelte-kit             # Clear build cache
rm -rf node_modules            # Clear dependencies
pnpm install                    # Reinstall dependencies
pnpm exec svelte-kit sync     # Regenerate types
```

## Getting Help

1. **Check docs:** Review this guide and other docs in `/docs`
2. **Browser console:** Press F12, check Console and Network tabs
3. **Type errors:** Look at the error message, usually points to the issue
4. **Search:** Copy error message and search online
5. **Community:** Svelte Discord, Stack Overflow

## Next Steps

1. Read [SvelteKit Guide](./sveltekit-guide.md) for component patterns
2. Read [CSS Guide](./css-guide.md) for styling patterns
3. Read [TypeScript Patterns](./typescript-patterns.md) for type safety
4. Make a small change (add an FAQ) to understand the workflow
5. Explore the codebase - click through files to see how they connect
