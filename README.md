# BRITMUN XI Website

The official website for British School of Bahrain Model United Nations
Conference XI - a modern, accessible, and performant web application
built with SvelteKit.

## Table of Contents

- [Quick Start](#quick-start)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Development](#development)
- [Content Management](#content-management)
- [Project Structure](#project-structure)
- [Deployment](#deployment)
- [Architecture Overview](#architecture-overview)
- [Common Tasks](#common-tasks)
- [Troubleshooting](#troubleshooting)
- [For Future MUN Teams](#for-future-mun-teams)

## Quick Start

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

The site will be available at `http://localhost:5173`

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **pnpm** (v8 or higher) - Install with: `npm install -g pnpm`
- **Git** - [Download](https://git-scm.com/)
- A code editor (VS Code recommended with Svelte and Biome extensions)

### Checking Your Installation

```bash
node --version   # Should show v18+
pnpm --version   # Should show v8+
git --version    # Any recent version
```

## Installation

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd BRITMUN-XI-Main
   ```

2. **Install dependencies:**

   ```bash
   pnpm install
   ```

3. **Start the development server:**

   ```bash
   pnpm dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:5173`

## Development

### Available Scripts

| Command | Description |
| --------- | ------------- |
| `pnpm dev` | Start development server with hot reload |
| `pnpm build` | Build for production (output in `.svelte-kit/`) |
| `pnpm preview` | Preview production build locally |
| `pnpm fix` | Format and lint staged files (runs on commit) |
| `pnpm fix-all` | Format and lint entire codebase |
| `pnpm watch` | Run type checking in watch mode |

### Development Workflow

1. **Make changes** to files in `src/`
2. **See changes instantly** in your browser (hot reload)
3. **Commit your work** (pre-commit hooks will auto-format code)
4. **Push to deploy** (Netlify will auto-deploy)

## Content Management

### Adding/Editing FAQs

**File:** `src/lib/data/home/faqs.ts`

```typescript
export const faqs: Faq[] = [
  {
    question: "What is BRITMUN?",
    answer: "British School of Bahrain Model United Nations..."
  },
  // Add more FAQs here
];
```

**Steps:**

1. Open `src/lib/data/home/faqs.ts`
2. Add/edit objects in the `faqs` array
3. Save the file
4. Changes appear instantly in dev mode

### Adding/Editing Testimonials

**File:** `src/lib/data/home/testimonials.ts`

```typescript
export const testimonials: Testimonial[] = [
  {
    title: "Security Council Chair",
    year: "2024",
    comment: "BRITMUN was an amazing experience..."
  },
  // Add more testimonials here
];
```

### Adding Council Information

**File:** `src/lib/data/councils/index.ts`

```typescript
interface Council {
  name: string;
  type: "GA" | "Crisis" | "Specialized";
  image: string;
  topic: string;
  description: string;
  chairs: string[];
}

export const councils: Council[] = [
  {
    name: "United Nations Security Council",
    type: "Crisis",
    image: "/councils/unsc.png",  // Image path from static/
    topic: "The Situation in Ukraine (2022)",
    description: "The UNSC is responsible for...",
    chairs: ["Chair Name", "Co-Chair Name"]
  },
  // Add more councils here
];
```

**Adding Council Images:**

1. Place images in `static/councils/`
2. Reference them as `/councils/filename.png` in the data
3. Use descriptive filenames (e.g., `unsc.png`, not `image1.png`)

### Changing Colors/Branding

**File:** `src/lib/data/default-properties.ts`

```typescript
export default {
  color: {
    primary: {
      500: "#934599",  // Main purple color
      700: "#7a3a7f",  // Darker shade
    },
    // ...
  }
}
```

**Note:** The color system is advanced. Test thoroughly after changes
and read the [Architecture Overview](#architecture-overview) section.

## Project Structure

```
BRITMUN-XI-Main/
├── src/
│   ├── routes/              # Pages (file-based routing)
│   │   ├── +page.svelte     # Homepage (/)
│   │   ├── +layout.svelte   # Site-wide layout
│   │   └── councils/        # /councils page
│   ├── lib/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── Header.svelte
│   │   │   ├── Footer.svelte
│   │   │   └── home/        # Homepage components
│   │   ├── data/            # Content & configuration
│   │   │   ├── default-properties.ts  # Design tokens
│   │   │   ├── home/        # Homepage data
│   │   │   └── councils/    # Council data
│   │   ├── scripts/         # Utility functions
│   │   ├── assets/          # Images
│   │   └── styles/          # Global CSS
│   └── app.html             # HTML template
├── static/                  # Static files (served at root)
│   ├── favicon.png
│   └── robots.txt
├── package.json             # Dependencies & scripts
├── svelte.config.js         # SvelteKit configuration
├── vite.config.ts           # Build tool configuration
└── tsconfig.json            # TypeScript configuration
```

### Import Aliases

These shortcuts make imports cleaner:

```typescript
import { Header } from "$components";           // instead of ../../lib/components
import { faqs } from "$data/home/faqs";         // instead of ../../lib/data/home/faqs
import logo from "$assets/logo.png";            // instead of ../../lib/assets/logo.png
import { parseCssTime } from "$scripts/utils";  // instead of ../../lib/scripts/utils
```

## Deployment

### Automatic Deployment (Netlify)

The site automatically deploys when you push to GitHub:

1. **Make changes** and commit:

   ```bash
   git add .
   git commit -m "feat: add new council"
   git push
   ```

2. **Netlify detects** the push and builds automatically

3. **Site updates** in 1-2 minutes at your Netlify URL

### Manual Deployment

```bash
# Build the site
pnpm build

# Test the build locally
pnpm preview

# Deploy (if configured with Netlify CLI)
netlify deploy --prod
```

### Build Requirements

- Node.js 18+
- pnpm package manager
- Output: `.svelte-kit/netlify/`

## Architecture Overview

### Technology Stack

- **Framework:** SvelteKit 2 with Svelte 5 (Runes)
- **Language:** TypeScript
- **Styling:** CSS with custom properties (CSS variables)
- **Build Tool:** Vite with LightningCSS
- **Deployment:** Netlify (serverless)
- **Linting/Formatting:** Biome
- **Fonts:** Average (serif), Girassol (display)

### Key Design Decisions

#### 1. Design Token System

The project uses a sophisticated CSS custom property system:

- **Tokens defined in:** `src/lib/data/default-properties.ts`
- **Registered at runtime:** `src/lib/scripts/register-properties.ts`
- **Used in CSS:** `var(--color-primary-500)`

**Why this approach?**

- Single source of truth for design values (don't hardcode values ever)
- Type-safe CSS (browser validates property types)
- Enables smooth color transitions
- Automatic contrast calculation for accessibility

**Trade-off:** Complex for beginners. See troubleshooting if you encounter issues.

#### 2. Svelte 5 Runes

This project uses the latest Svelte syntax:

```svelte
<script>
  let count = $state(0);           // Reactive state
  let doubled = $derived(count * 2); // Computed value

  $effect(() => {
    console.log(count);            // Runs when count changes
  });

 // or better yet
 $inspect(count);                 // Automatically logs changes
</script>
```

**Why Svelte 5?**

- More intuitive reactivity
- Better TypeScript support
- Future-proof

**Trade-off:** Very new, fewer online resources. See [Svelte 5 docs](https://svelte-5-preview.vercel.app/docs/introduction).

#### 3. Accessibility First

This site prioritizes accessibility:

- ARIA labels for screen readers
- Keyboard navigation support
- Respects `prefers-reduced-motion`
- Semantic HTML
- Sufficient color contrast

**Don't remove accessibility features**

### CSS Architecture

The site uses:

- **CSS Layers:** `@layer base, layout, components, utilities`
- **Custom Properties:** `var(--color-primary-500)`, `var(--space-3)`
- **oklch() Colors:** Modern color space (requires Chrome 111+, Safari 16.4+, Firefox 113+)
- **Fluid Typography:** `clamp()` for responsive text sizing

### Browser Support

| Browser | Minimum Version |
| --------- | ---------------- |
| Chrome | 111+ |
| Safari | 16.4+ |
| Firefox | 113+ |
| Edge | 111+ |

**Note:** IE11 is not supported.

## Common Tasks

### Changing the Hero Image

1. **Optimize your image first:**

   ```bash
   # Convert and resize
   pnpm dlx sharp input.png --resize 1920 --webp --quality 85 --output hero.webp
   ```

2. **Replace the file:**
   - Place in `src/lib/assets/home/`
   - Update import in `src/lib/components/home/HeroImage.svelte`

3. **Recommended specs:**
   - Format: WebP
   - Max width: 1920px
   - Max size: 500KB
   - Quality: 80-85%

### Adding a New Page

1. **Create route folder:**

   ```bash
   mkdir -p src/routes/about
   ```

2. **Add page component:**

   ```svelte
   <!-- src/routes/about/+page.svelte -->
   <h1>About BRITMUN</h1>
   <p>Content here...</p>
   ```

3. **Add to navigation:**
   Edit `src/lib/components/Header.svelte` to add link

### Updating Contact Information

Edit in multiple places:

- **Footer:** `src/lib/components/Footer.svelte`
- **FAQs:** `src/lib/data/home/faqs.ts`
- **Meta tags:** `src/routes/+layout.svelte` or `src/app.html`

### Changing Conference Dates

Update in:

1. Homepage content
2. FAQs
3. Footer
4. Social preview image (`static/social-preview.png`)

## Troubleshooting

### "Cannot find module" errors

```bash
# Regenerate SvelteKit types
pnpm exec svelte-kit sync
```

### Changes not appearing

1. **Hard refresh:** Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. **Restart dev server:** Ctrl+C, then `pnpm dev`
3. **Clear `.svelte-kit`:**

   ```bash
   rm -rf .svelte-kit
   pnpm dev
   ```

### CSS property registration errors

Check browser console for messages. If properties fail to register:

1. **Syntax error:** Check `default-properties.ts` for typos
2. **Browser support:** Ensure using Chrome 111+, Safari 16.4+, or Firefox 113+
3. **Fallbacks exist:** Site should still work, just without smooth transitions

### Build fails

```bash
# Clear everything and reinstall
rm -rf node_modules .svelte-kit
pnpm install
pnpm build
```

### Type errors

```bash
# Run type checking
pnpm watch

# Fix auto-fixable issues
pnpm fix-all
```

### Git commit blocked

Pre-commit hooks run formatting. If they fail:

```bash
# Format manually
pnpm fix-all

# Try commit again
git commit -m "your message"
```

## For Future MUN Teams

### Handoff Checklist

When passing this project to next year's team:

- [ ] Walk through this README together
- [ ] Show how to edit FAQs, testimonials, and councils
- [ ] Demonstrate local development setup
- [ ] Explain deployment process (push to GitHub → auto-deploys)
- [ ] Share Netlify login credentials (securely)
- [ ] Transfer GitHub repository access
- [ ] Update council images for new year
- [ ] Archive old testimonials, add new ones
- [ ] Update conference dates throughout

### Simplification Suggestions

If the architecture is too complex, consider:

1. **Simplify CSS system:** Remove `register-properties.ts`, use plain CSS variables
2. **Use Svelte 4:** More online resources available
3. **Add CMS:** Consider Decap CMS (formerly Netlify CMS) for non-technical content editing

### Learning Resources

- **SvelteKit:** <https://kit.svelte.dev/docs>
- **Svelte 5:** <https://svelte-5-preview.vercel.app/docs>
- **TypeScript:** <https://www.typescriptlang.org/docs>
- **MDN (CSS):** <https://developer.mozilla.org/en-US/docs/Web/CSS>

### Getting Help

1. **Read error messages carefully** - they usually tell you what's wrong
2. **Check browser console** - F12 in Chrome/Firefox
3. **Search GitHub issues** - Many problems already solved
4. **Ask in Svelte Discord** - Friendly community
5. **Stack Overflow** - Tag questions with `sveltejs`

### Maintenance Philosophy

> **"Simple code that works is better than clever code that confuses."**

When adding features:

- Prioritize content over technical complexity
- Test on mobile devices (many delegates browse on phones)
- Don't remove accessibility features
- Document your changes
- Keep it maintainable for students, not just professional developers

### Final Notes

This website was built with care and technical excellence.
The architecture might seem complex, but it provides:

- **Accessibility** for all delegates
- **Performance** even on slow networks
- **Maintainability** through clear separation of concerns
- **Flexibility** to adapt to future needs

Your job is to preserve these qualities while adapting
the content for BRITMUN XII, XIII, and beyond.

**Good luck, and thank you for continuing the BRITMUN legacy!** 🎓

---

## Quick Reference

### Content Files to Edit

| What to Update | File Location |
| ---------------- | --------------- |
| FAQs | `src/lib/data/home/faqs.ts` |
| Testimonials | `src/lib/data/home/testimonials.ts` |
| Councils | `src/lib/data/councils/index.ts` |
| Colors | `src/lib/data/default-properties.ts` |
| Header/Nav | `src/lib/components/Header.svelte` |
| Footer | `src/lib/components/Footer.svelte` |

### Commands Cheat Sheet

```bash
pnpm dev        # Start dev server
pnpm build      # Build for production
pnpm preview    # Test production build
pnpm fix-all    # Fix formatting/linting
git add .       # Stage all changes
git commit      # Commit (auto-formats)
git push        # Deploy to Netlify
```

### Emergency Contacts

- **Repository:** [Add GitHub URL]
- **Live Site:** [Add Netlify URL]
- **Netlify Dashboard:** [Add Netlify dashboard URL]

---
