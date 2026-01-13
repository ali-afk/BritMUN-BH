# SvelteKit Patterns Used in BRITMUN

This guide shows the SvelteKit patterns actually used in the BRITMUN codebase. Each pattern includes real examples from the project.

## File-Based Routing

SvelteKit uses the file structure to create routes automatically.

```
src/routes/
├── +page.svelte        → / (homepage)
├── +layout.svelte      → Wraps all pages
└── councils/
    └── +page.svelte    → /councils
```

**From [`src/routes/+layout.svelte`](https://github.com/ali-afk/BRITMUN-XI-Main/blob/v0.6.0/src/routes/+layout.svelte):**
```svelte
<script lang="ts">
  let { children } = $props();
</script>

<Header />
<main>{@render children()}</main>
<Footer />
```

The layout wraps every page. `{@render children()}` displays the page content.

## Svelte 5 Runes

### $state - Reactive Variables

**From [`src/lib/components/home/Faq.svelte:9`](https://github.com/ali-afk/BRITMUN-XI-Main/blob/v0.6.0/src/lib/components/home/Faq.svelte#L9):**
```svelte
<script lang="ts">
  let isOpen = $state(false);
</script>

<button onclick={() => (isOpen = !isOpen)}>
  Toggle FAQ
</button>

{#if isOpen}
  <div>Answer content</div>
{/if}
```

**Why:** $state() makes variables reactive. When `isOpen` changes, the UI updates automatically.

### $props - Component Properties

**From `src/lib/components/home/Faq.svelte:8`:**
```svelte
<script lang="ts">
  let { question, children } = $props();
</script>

<button>{question}</button>
<div>{@render children()}</div>
```

**Usage:**
```svelte
<Faq question="What is BRITMUN?">
  British School of Bahrain Model United Nations
</Faq>
```

**Why:** Type-safe props with destructuring. Cleaner than Svelte 4's `export let`.

### $derived - Computed Values

**Example pattern:**
```svelte
<script lang="ts">
  let count = $state(0);
  let doubled = $derived(count * 2);
</script>

<p>{count} × 2 = {doubled}</p>
```

**Why:** Automatically recalculates when dependencies change.

## Path Aliases

Never use relative imports. Use these shortcuts:

```svelte
<script lang="ts">
  // ✅ DO: Use aliases
  import { Header } from "$components";
  import { faqs } from "$data/home/faqs";
  import logo from "$assets/logo.png";
  import { parseCssTime } from "$scripts/utils";

  // ❌ DON'T: Use relative paths
  import { Header } from "../../lib/components";
  import { faqs } from "../../lib/data/home/faqs";
</script>
```

**Defined in `svelte.config.js`:**
- `$components` = `src/lib/components`
- `$data` = `src/lib/data`
- `$assets` = `src/lib/assets`
- `$scripts` = `src/lib/scripts`

## Lifecycle - onMount

**From [`src/routes/+layout.svelte:10`](https://github.com/ali-afk/BRITMUN-XI-Main/blob/v0.6.0/src/routes/+layout.svelte#L10):**
```svelte
<script lang="ts">
  import { onMount } from "svelte";
  import { registerProperties } from "$scripts/register-properties";

  onMount(() => {
    registerProperties();
    document.documentElement.classList.add("document-loaded");
  });
</script>
```

**Why:** Runs after the component is added to the DOM. Use for:
- Browser-only APIs (document, window)
- Initializing JavaScript libraries
- Registering CSS properties

**Don't use for:**
- Data fetching (use load functions instead)
- Setting initial state (do it directly)

## Loops with #each

**From [`src/lib/components/home/TestimonialList.svelte:12`](https://github.com/ali-afk/BRITMUN-XI-Main/blob/v0.6.0/src/lib/components/home/TestimonialList.svelte#L12):**
```svelte
<script lang="ts">
  import { testimonials } from "$data/home/";
</script>

{#each testimonials as data, i}
  <Testimonial
    {...data}
    color={colors[cycleColorIndices(i)]}
    direction={i % 2 === 0 ? 'right' : 'left'}
  />
{/each}
```

**Pattern breakdown:**
- `testimonials` = array to loop over
- `data` = current item
- `i` = index (0, 1, 2, ...)
- `{...data}` = spread all properties as props
- Alternate direction based on even/odd index

## Conditionals with #if

**From [`src/lib/components/home/Faq.svelte:23`](https://github.com/ali-afk/BRITMUN-XI-Main/blob/v0.6.0/src/lib/components/home/Faq.svelte#L23):**
```svelte
{#if isOpen}
  <div transition:slide id="{contentId}">
    <hr aria-hidden="true">
    <p>{@render children()}</p>
  </div>
{/if}
```

**Pattern:** Content only renders when `isOpen` is true. Completely removed from DOM when false.

## Transitions

**From [`src/lib/components/home/Faq.svelte:24`](https://github.com/ali-afk/BRITMUN-XI-Main/blob/v0.6.0/src/lib/components/home/Faq.svelte#L24):**
```svelte
<script lang="ts">
  import { slide } from "$scripts/transition";
</script>

<div transition:slide>
  Content that slides in/out
</div>
```

**Custom transition in [`src/lib/scripts/transition.ts`](https://github.com/ali-afk/BRITMUN-XI-Main/blob/v0.6.0/src/lib/scripts/transition.ts):**
```typescript
export function slide(node: HTMLElement, params?: TransitionParams) {
  // Returns { duration, easing, css }
  // Applied when element enters/leaves DOM
}
```

**Why:** Smooth animations when showing/hiding elements. Respects `prefers-reduced-motion`.

## Snippet Rendering

**Pattern used throughout:**
```svelte
<script lang="ts">
  let { children } = $props();
</script>

<div class="card">
  {@render children()}
</div>
```

**Usage:**
```svelte
<Card>
  <h2>Title</h2>
  <p>Content here</p>
</Card>
```

**Why:** Pass HTML content to components. Replaces slots from Svelte 4.

## Event Handling

**From [`src/lib/components/home/Faq.svelte:14`](https://github.com/ali-afk/BRITMUN-XI-Main/blob/v0.6.0/src/lib/components/home/Faq.svelte#L14):**
```svelte
<button
  onclick={() => (isOpen = !isOpen)}
  type="button"
>
  Toggle
</button>
```

**Pattern:**
- Use `onclick` (not `on:click`)
- Always set `type="button"` (prevents form submission)
- Inline handlers for simple logic
- Extract functions for complex logic

## Accessibility Patterns

**From [`src/lib/components/home/Faq.svelte:16-18`](https://github.com/ali-afk/BRITMUN-XI-Main/blob/v0.6.0/src/lib/components/home/Faq.svelte#L16-L18):**
```svelte
<button
  aria-expanded={isOpen}
  aria-controls="{contentId}"
>
  <span>{question}</span>
  <img src={toggleIcon} alt="" aria-hidden="true">
</button>
```

**Always include:**
- `aria-expanded` for toggles
- `aria-controls` to link button to content
- `aria-hidden="true"` for decorative images
- Empty `alt=""` for decorative images
- Descriptive `alt` for meaningful images

## Component Structure

**Standard pattern:**
```svelte
<script lang="ts">
  // 1. Imports
  import { Something } from "$components";

  // 2. Props
  let { title, count = 0 } = $props<{ title: string; count?: number }>();

  // 3. State
  let isActive = $state(false);

  // 4. Derived values
  let doubled = $derived(count * 2);

  // 5. Functions
  function handleClick() {
    isActive = !isActive;
  }

  // 6. Lifecycle
  onMount(() => {
    console.log("Component mounted");
  });
</script>

<!-- 7. HTML -->
<div class="wrapper">
  <h1>{title}</h1>
  <button onclick={handleClick}>Click me</button>
</div>

<!-- 8. Styles (scoped to this component) -->
<style>
  .wrapper {
    padding: var(--space-4);
  }
</style>
```

## Metadata with svelte:head

**From [`src/routes/+layout.svelte:19`](https://github.com/ali-afk/BRITMUN-XI-Main/blob/v0.6.0/src/routes/+layout.svelte#L19):**
```svelte
<svelte:head>
  <title>BRITMUN XI | British School of Bahrain</title>

  <meta name="description" content="Join BRITMUN XI..." />
  <meta property="og:title" content="BRITMUN XI" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>
```

**Why:** Sets page title and meta tags for SEO and social sharing.

## Dynamic Imports

**Pattern for barrel exports:**
```typescript
// src/lib/components/home/index.ts
export { default as Faq } from "./Faq.svelte";
export { default as FaqList } from "./FaqList.svelte";
export { default as Testimonial } from "./Testimonial.svelte";
```

**Usage:**
```svelte
<script lang="ts">
  import { Faq, FaqList } from "$components/home";
</script>
```

**Why:** Import multiple components from one path.

## TypeScript in Components

**From `src/lib/components/home/Faq.svelte:8`:**
```svelte
<script lang="ts">
  let { question, children } = $props();
</script>
```

**With types:**
```svelte
<script lang="ts">
  interface Props {
    question: string;
    answer?: string;
  }

  let { question, answer = "No answer provided" } = $props<Props>();
</script>
```

**Why:** Type safety, autocomplete, catches errors early.

## Common Mistakes

### ❌ Wrong: Old Svelte 4 syntax
```svelte
<script>
  export let count;
  $: doubled = count * 2;
</script>
```

### ✅ Right: Svelte 5 runes
```svelte
<script>
  let { count } = $props();
  let doubled = $derived(count * 2);
</script>
```

### ❌ Wrong: Relative imports
```svelte
import { Header } from "../../components/Header.svelte";
```

### ✅ Right: Path aliases
```svelte
import { Header } from "$components";
```

### ❌ Wrong: Button without type
```svelte
<button onclick={handleClick}>Click</button>
```

### ✅ Right: Explicit type
```svelte
<button type="button" onclick={handleClick}>Click</button>
```

## Quick Reference

| Pattern | Syntax | Example |
|---------|--------|---------|
| Reactive state | `$state()` | `let count = $state(0)` |
| Props | `$props()` | `let { title } = $props()` |
| Computed | `$derived()` | `let doubled = $derived(count * 2)` |
| Loop | `#each` | `{#each items as item}` |
| Condition | `#if` | `{#if show}...{/if}` |
| Event | `onclick` | `<button onclick={() => {}}>` |
| Lifecycle | `onMount` | `onMount(() => { ... })` |
| Render slot | `{@render}` | `{@render children()}` |

## Learning More

- **SvelteKit docs:** https://kit.svelte.dev/docs
- **Svelte 5 docs:** https://svelte-5-preview.vercel.app/docs
- **Svelte 5 migration:** https://svelte-5-preview.vercel.app/docs/migration

## Practice

Try these tasks to practice:

1. **Create a simple counter component:**
   - Use $state for count
   - Add increment/decrement buttons
   - Display the count

2. **Make it reusable:**
   - Accept initial count as prop
   - Add step size prop (increment by 1, 5, 10, etc.)
   - Style it with scoped CSS

3. **Add interactivity:**
   - Use $derived to show "even" or "odd"
   - Add a reset button
   - Use transitions when count changes
