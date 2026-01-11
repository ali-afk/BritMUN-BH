# Contributing to BRITMUN Website

Welcome to the BRITMUN website project! This guide will help you understand how
to work with this codebase, whether you're continuing development this year or
inheriting it for future conferences.

## Table of Contents

- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Style & Conventions](#code-style--conventions)
- [Git Commit Guidelines](#git-commit-guidelines)
- [Adding New Features](#adding-new-features)
- [Common Modifications](#common-modifications)
- [Best Practices](#best-practices)
- [Year-to-Year Hand-off](#year-to-year-hand-off)

## Getting Started

### First Time Setup

1. **Read the README:** Start with `README.md` for installation and basic usage
2. **Explore the codebase:** Spend 30 minutes clicking through files to understand structure
3. **Run the dev server:** Get `pnpm dev` working before making changes
4. **Make a test change:** Edit an FAQ, see it update live - understand the workflow

### Understanding the Architecture

This project has three main parts:

1. **Content** (`src/lib/data/`) - Where you'll spend most of your time
   - FAQs, testimonials, council information
   - Design tokens (colors, spacing, fonts)

2. **Components** (`src/lib/components/`) - Reusable UI pieces
   - Header, Footer, FAQ items, Testimonials
   - Usually you edit content, not components

3. **Pages** (`src/routes/`) - Actual site pages
   - Homepage, councils page, etc.
   - Uses components + content

### Key Concepts

**Path Aliases:** Instead of `../../../lib/data/faqs`, use `$data/home/faqs`

- `$components` = `src/lib/components`
- `$data` = `src/lib/data`
- `$assets` = `src/lib/assets`
- `$scripts` = `src/lib/scripts`

**Hot Reload:** Save a file → browser updates instantly (no refresh needed)

**TypeScript:** Provides autocomplete and catches errors before they reach users

## Development Workflow

### Daily Development

```bash
# 1. Pull latest changes
git pull

# 2. Start dev server
pnpm dev

# 3. Make changes, see them live
# Edit files in src/

# 4. Test your changes
# Check in browser, test on mobile

# 5. Commit and push
git add .
git commit
# (pre-commit hook auto-formats your code)
git push
# (Netlify auto-deploys)
```

### Making Changes

**For Content Changes:**

1. Find the relevant file in `src/lib/data/`
2. Edit the array/object
3. Save → see changes instantly
4. Commit when satisfied

**For Visual Changes:**

1. Find the component in `src/lib/components/`
2. Edit the HTML/CSS in the `.svelte` file
3. Save → see changes instantly
4. Test on different screen sizes
5. Commit when satisfied

### Testing Your Changes

**Manual Testing Checklist:**

- [ ] Works on desktop (Chrome, Firefox, Safari)
- [ ] Works on mobile (test with browser dev tools)
- [ ] All links work
- [ ] Images load correctly
- [ ] No console errors (press F12)
- [ ] Text is readable (good contrast)
- [ ] Animations respect reduced motion (test in browser settings)

## Code Style & Conventions

### Automatic Formatting

Code is automatically formatted when you commit (via Biome). Don't fight it:

- Use tabs (not spaces)
- Double quotes for strings
- Trailing commas in arrays/objects

If you want to format manually: `pnpm fix-all`

### Naming Conventions

**Files:**

- Components: `PascalCase.svelte` (e.g., `HeroImage.svelte`)
- Scripts: `kebab-case.ts` (e.g., `register-properties.ts`)
- Data: `kebab-case.ts` (e.g., `default-properties.ts`)

**Variables/Functions:**

- `camelCase` for everything: `const heroImage = ...`
- Descriptive names: `isMenuOpen` not `flag`

**CSS:**

- Use existing variables: `var(--color-primary-500)`
- Class names: `.hero-section` not `.hero_section` or `.heroSection`

### TypeScript Types

Always define types for data:

```typescript
// ✅ Good
interface Council {
  name: string;
  type: "GA" | "Crisis" | "Specialized";
  chairs: string[];
}

export const councils: Council[] = [...];

// ❌ Bad
export const councils = [...];  // No type = easy to introduce bugs
```

### Component Structure

Standard Svelte component pattern:

```svelte
<script lang="ts">
  // 1. Imports
  import { something } from '$data';

  // 2. Props (if any)
  let { title, children } = $props<{ title: string }>();

  // 3. State
  let isOpen = $state(false);

  // 4. Logic/effects
  function handleClick() { ... }
</script>

<!-- 5. HTML -->
<div>
  <h1>{title}</h1>
  {@render children()}
</div>

<!-- 6. Styles (scoped to this component) -->
<style>
  div {
    padding: var(--space-3);
  }
</style>
```

## Git Commit Guidelines

This project uses structured commit messages. A template is provided in `.gitmessage`.

### Commit Message Format

```.md
<type>[+type]...: <short summary>

--- Changes ---
- Specific change 1
- Specific change 2

Context:
Why this change was needed
```

### Commit Types

| Type | When to Use | Example |
| ------ | ------------- | --------- |
| `feat` | New feature | `feat: add council registration form` |
| `fix` | Bug fix | `fix: mobile menu not closing on link click` |
| `content` | Content updates | `content: update FAQs for BRITMUN XII` |
| `style` | Visual/CSS changes | `style: improve testimonial card spacing` |
| `refactor` | Code improvement (no behavior change) | `refactor: simplify header scroll logic` |
| `config` | Configuration changes | `config: update Netlify build settings` |
| `chore` | Maintenance tasks | `chore: update dependencies` |

### Examples

```bash
# Single type
git commit -m "content: add 2025 council descriptions"

# Multiple types
git commit -m "feat+style: add footer with social links"

# With detailed description
git commit  # Opens editor with template
```

### Gold Standard

- **One logical change per commit:** Don't mix feature + bug fix in same commit
- **Descriptive messages:** "fix header bug" → "fix: header hiding on small scroll movements"
- **Commit often:** Small commits are better than giant ones
- **Test before committing:** Make sure it works!

## Adding New Features

### Adding a New Page

1. **Create route folder:**

   ```bash
   mkdir src/routes/about
   ```

2. **Add page file:**

   ```svelte
   <!-- src/routes/about/+page.svelte -->
   <script lang="ts">
     import { Header, Footer } from '$components';
   </script>

   <Header />
   <main>
     <h1>About BRITMUN</h1>
     <p>Content here...</p>
   </main>
   <Footer />
   ```

3. **Add to navigation:**
   Edit `src/lib/components/Header.svelte` to add link

4. **Test:**
   - Visit `http://localhost:5173/about`
   - Check all screen sizes
   - Ensure navigation works

### Adding a New Component

1. **Create component file:**

   ```svelte
   <!-- src/lib/components/home/CountdownTimer.svelte -->
   <script lang="ts">
     let { targetDate } = $props<{ targetDate: Date }>();

     let timeLeft = $state('...');

     $effect(() => {
       // Calculate time left...
     });
   </script>

   <div class="countdown">
     {timeLeft}
   </div>

   <style>
     .countdown {
       font-size: var(--fs-5);
       color: var(--color-primary-500);
     }
   </style>
   ```

2. **Export from barrel file:**

   ```typescript
   // src/lib/components/home/index.ts
   export { default as CountdownTimer } from './CountdownTimer.svelte';
   ```

3. **Use in page:**

   ```svelte
   <script>
     import { CountdownTimer } from '$components/home';
   </script>

   <CountdownTimer targetDate={new Date('2025-03-15')} />
   ```

### Adding Form Handling

For registration forms, use Netlify Forms (no backend needed):

```svelte
<form netlify name="registration">
  <input type="text" name="name" required />
  <input type="email" name="email" required />
  <select name="role">
    <option>Delegate</option>
    <option>Chair</option>
    <option>Press</option>
  </select>
  <button type="submit">Register</button>
</form>
```

Netlify automatically collects submissions (see Netlify dashboard).

## Common Modifications

### Updating Colors

```typescript
// src/lib/data/default-properties.ts
export const DefaultProperties = {
  color: {
    primary: {
      500: "#934599",  // Change this
      700: "#7a3a7f",  // And this
    },
  },
};
```

Changes apply globally across entire site.

### Adding FAQ

```typescript
// src/lib/data/home/faqs.ts
export const faqs: Faq[] = [
  {
    question: "What should I bring to BRITMUN?",
    answer: "Bring your laptop, notepad, pens, and delegate pass..."
  },
  // Add more here
];
```

### Changing Hero Image

1. **Optimize image first:**

   ```bash
   # Install Sharp (one time)
   npm install -g sharp-cli

   # Convert image
   sharp my-image.jpg \
     --resize 1920 \
     --webp \
     --quality 85 \
     --output hero.webp
   ```

2. **Replace file:**
   - Put `hero.webp` in `src/lib/assets/home/`
   - Update import in `src/lib/components/home/HeroImage.svelte`

### Adding Council

```typescript
// src/lib/data/councils/index.ts
export const councils: Council[] = [
  {
    name: "United Nations Security Council",
    type: "Crisis",
    image: "/councils/unsc.png",  // Place in static/councils/
    topic: "The Situation in Syria (2025)",
    description: "The UNSC maintains international peace...",
    chairs: ["Chair Name", "Co-Chair Name"]
  },
  // Add more councils here
];
```

## Best Practices

### Accessibility

**Always maintain these:**

- `alt` text on all images (describe what's in the image)
- ARIA labels on interactive elements (`aria-expanded`, `aria-controls`)
- Semantic HTML (`<button>` for buttons, not `<div onclick>`)
- Sufficient color contrast (test with browser tools)
- Respect `prefers-reduced-motion` (already built in)

**Why?** Ensures site works for delegates with:

- Visual impairments (screen readers)
- Motor disabilities (keyboard navigation)
- Vestibular disorders (motion sensitivity)

### Performance

**Keep the site fast:**

- Optimize images before committing (target <500KB per image)
- Use lazy loading: `<img loading="lazy">`
- Don't commit node_modules or build artifacts
- Test on slow connections (use browser throttling)

**Why?** Many delegates browse on mobile with limited data.

### Security

**Avoid these vulnerabilities:**

- ❌ `{@html userInput}` - Can inject malicious scripts
- ❌ `<a href={userInput}>` - Can link to dangerous sites
- ✅ Sanitize user input if you must use it
- ✅ Use `rel="noopener noreferrer"` on external links

### Maintainability

**Think about next year's team:**

- Comment complex logic (simple code doesn't need comments)
- Don't over-engineer (simple solutions are better)
- Document architectural decisions
- Keep dependencies updated
- Don't leave commented-out code

**Golden Rule:**
> "Will a student who doesn't know this framework understand what I did?"

## Year-to-Year Hand-off

### Preparing for Hand-off

**2-3 months before hand-off:**

1. **Update all content:**
   - [ ] Remove old conference dates
   - [ ] Archive old testimonials
   - [ ] Clear councils (or mark as previous year)
   - [ ] Update FAQ answers

2. **Document customizations:**
   - [ ] Note any non-standard changes
   - [ ] List external services used (Netlify, analytics, etc.)
   - [ ] Write down credentials locations (don't commit passwords!)

3. **Clean up codebase:**
   - [ ] Remove unused files (*.bak, old images)
   - [ ] Fix TODOs and FIXMEs
   - [ ] Update dependencies: `pnpm update`
   - [ ] Run full build: `pnpm build`

4. **Test everything:**
   - [ ] All pages load
   - [ ] All links work
   - [ ] Mobile responsive
   - [ ] Forms submit correctly
   - [ ] Images optimized

### Hand-off Meeting

**Schedule a 2-hour session with next year's team:**

1. **First 30 min - Overview:**
   - Walk through README together
   - Show live site vs local development
   - Demonstrate hot reload

2. **Next 30 min - Hands-on:**
   - Have them make a simple change (edit an FAQ)
   - Have them commit and see it deploy
   - Explain the git workflow

3. **Next 30 min - Common tasks:**
   - Show how to add councils
   - Show how to optimize images
   - Show how to change colors
   - Show how to add a new page

4. **Final 30 min - Troubleshooting & access:**
   - Walk through common issues
   - Transfer GitHub access
   - Transfer Netlify access
   - Share contact for questions

### Access Checklist

Transfer these credentials securely:

- [ ] GitHub repository access (add as collaborators)
- [ ] Netlify account access (add as team members)
- [ ] Domain registrar (if custom domain)
- [ ] Email for forms (if using form notifications)
- [ ] Analytics account (if using Google Analytics/Plausible)
- [ ] Any API keys (store in Netlify env vars, not in code)

### Documentation to Update

Create a hand-off document with:

- List of current MUN team members with technical knowledge
- Contact information for emergency help
- List of external services and where credentials are stored
- Timeline of when site needs updates (registration opens, conference dates, etc.)
- Known issues or planned improvements
- Budget for services (domain, analytics, etc.)

## Getting Help

### Resources

- **SvelteKit Docs:** <https://kit.svelte.dev/docs>
- **Svelte 5 Docs:** <https://svelte-5-preview.vercel.app/docs>
- **MDN (CSS/HTML):** <https://developer.mozilla.org>
- **TypeScript Docs:** <https://www.typescriptlang.org/docs>

### When Stuck

1. **Read the error message** - It usually tells you what's wrong
2. **Check browser console** - Press `F12`, look for red errors
3. **Search the error** - Copy/paste into Google
4. **Ask in Svelte Discord** - Friendly community
5. **Check GitHub Issues** - Others may have had the same problem

### Common Error Solutions

#### "Cannot find module"**

```bash
pnpm exec svelte-kit sync
```

#### "Port already in use"

```bash
# Kill the process using the port
killall node
pnpm dev
```

#### "Type error"

```bash
# Run type checker
pnpm watch
# Fix the errors it shows
```

## Final Notes

### Philosophy

This website serves BRITMUN attendees - students deciding whether to register,
parents evaluating if it's worthwhile, delegates looking for information.
The technical sophistication is a means to that end, not the end itself.

**Prioritize:**

1. **Correct information** - Dates, times, costs, contacts
2. **Ease of use** - Fast, mobile-friendly, accessible
3. **Clear content** - Answer questions before they're asked
4. **Maintainability** - Next year's team can update it

**Don't prioritize:**

- Impressive technical features users don't need
- Complex architectures that confuse maintainers
- Cutting-edge tech that lacks documentation
- Clever code that's hard to understand

### Your Responsibility

As a maintainer of this project, you're responsible for:

- **Keeping content accurate** - Wrong dates/prices harm delegates
- **Maintaining accessibility** - Exclude no one from attending
- **Ensuring performance** - Respect users' data and time
- **Enabling successors** - Make their job easy

### Acknowledgments

Thank you for contributing to BRITMUN! The work you do on this website directly
impacts hundreds of students' conference experiences.
Take pride in maintaining it well.

**Good luck with BRITMUN XII and beyond!** 🎓

---

*Questions? Issues? Suggestions? Open a GitHub issue or discussion.*
