# SvelteKit Patterns

Svelte 5 and SvelteKit patterns used in the BRITMUN codebase.

## File-Based Routing

```bash
src/routes/
├── +page.svelte        → /
├── +layout.svelte      → Wraps all pages
└── councils/
    └── +page.svelte    → /councils
```

**Layout wraps all pages:**

```svelte
<Header />
<a href="#main-content" class="skip-link">Skip to main content</a>
<main>{@render children()}</main>
```

Note: Footer was removed. Skip-link improves keyboard accessibility.

## Svelte 5 Runes

### $state - Reactive Variables

**From [`Faq.svelte:10`](https://github.com/ali-afk/BritMUN-BH/blob/v0.7.1/src/lib/components/home/Faq.svelte#L10):**

```svelte
<script lang="ts">
  let isOpen = $state(false);
</script>

<button onclick={() => (isOpen = !isOpen)}>Toggle</button>
{#if isOpen}<div>Content</div>{/if}
```

### $props - Component Properties

**From [`Faq.svelte:9`](https://github.com/ali-afk/BritMUN-BH/blob/v0.7.1/src/lib/components/home/Faq.svelte#L9):**

```svelte
<script lang="ts">
  let { question, children } = $props();
</script>

<button>{question}</button>
<div>{@render children()}</div>
```

**With inline types:**

```svelte
let { question, children }: { question: string; children: Snippet } = $props();
```

**With interface extension (for complex props):**

```svelte
<script lang="ts">
import { type TestimonialData } from "$data/home";
import type { ColorDegrees } from "$types/colors";

interface TestimonialProps extends TestimonialData {
  color: ColorDegrees;
  direction: "left" | "right";
}

let { color, title, year, comment, direction }: TestimonialProps = $props();
</script>
```

### $derived - Computed Values

```svelte
let count = $state(0);
let doubled = $derived(count * 2);
```

## Path Aliases

```svelte
import { Header } from "$components";
import { faqs } from "$data/home";
import { Logo } from "$assets";
import { parseCssTime } from "$scripts/utils";
```

**Aliases:**

- `$components`,
- `$data`,
- `$assets`,
- `$scripts`,
- `$types`
(defined in `svelte.config.js`)

## onMount

**From [`+layout.svelte:11`](https://github.com/ali-afk/BritMUN-BH/blob/v0.7.1/src/routes/+layout.svelte#L11):**

```svelte
import { onMount } from "svelte";

onMount(() => {
  registerProperties();
  document.documentElement.classList.add("document-loaded");
});
```

Use for browser-only APIs. Don't use for data fetching (use load functions).

## Server-Side Data Loading

Pages load data via `+page.server.ts`, then pass it to components:

**`+page.server.ts`:**

```typescript
import { testimonials } from "$data/home";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
  return { testimonials };
};
```

**`+page.svelte`:**

```svelte
<script lang="ts">
import { type PageProps } from "./$types";
let { data }: PageProps = $props();
</script>

<TestimonialList testimonialData={data.testimonials} />
```

## Loops with #each

**From `TestimonialList.svelte`:**

```svelte
{#each testimonialData as content, i}
  <Testimonial
    {...content}
    color={ColorScale[i % 5] ?? 500}
    direction={i % 2 === 0 ? 'right' : 'left'}
  />
{/each}
```

- `{...content}` spreads all properties as props
- `ColorScale[i % 5]` cycles through color degrees (100, 300, 500, 700, 900)
- Components handle color lookup internally

## Conditionals with #if

**From [`Faq.svelte:24`](https://github.com/ali-afk/BritMUN-BH/blob/v0.7.1/src/lib/components/home/Faq.svelte#L24):**

```svelte
{#if isOpen}
  <div transition:standard={slide}>Content</div>
{/if}
```

## Transitions

**From [`Faq.svelte:25`](https://github.com/ali-afk/BritMUN-BH/blob/v0.7.1/src/lib/components/home/Faq.svelte#L25):**

```svelte
import { slide } from "$scripts/transition";

<div transition:standard={slide}>Slides in/out</div>
```

Custom transitions respect `prefers-reduced-motion`.

## Snippet Rendering

```svelte
let { children } = $props();

<div class="card">{@render children()}</div>
```

**Usage:**

```svelte
<Card><h2>Title</h2><p>Content</p></Card>
```

Replaces slots from Svelte 4.

## Event Handling

**From [`Faq.svelte:15`](https://github.com/ali-afk/BritMUN-BH/blob/v0.7.1/src/lib/components/home/Faq.svelte#L15):**

```svelte
<button onclick={() => (isOpen = !isOpen)} type="button">Toggle</button>
```

- Use `onclick` (not `on:click`)
- Always set `type="button"` (prevents form submission)

## Accessibility

**From [`Faq.svelte:17-18`](https://github.com/ali-afk/BritMUN-BH/blob/v0.7.1/src/lib/components/home/Faq.svelte#L17-L18):**

```svelte
<button aria-expanded={isOpen} aria-controls="{contentId}">
  <img src={icon} alt="" aria-hidden="true">
</button>
```

- `aria-expanded` for toggles
- `aria-hidden="true"` + empty `alt=""` for decorative images

## svelte:head

**From [`+layout.svelte:20`](https://github.com/ali-afk/BritMUN-BH/blob/v0.7.1/src/routes/+layout.svelte#L20):**

```svelte
<svelte:head>
  <title>BRITMUN XI | BSB</title>
  <meta name="description" content="..." />
</svelte:head>
```

## Barrel Exports

**From [`index.ts:1`](https://github.com/ali-afk/BritMUN-BH/blob/v0.7.1/src/lib/components/home/index.ts#L1):**

```typescript
export { default as Faq } from "./Faq.svelte";
export { default as FaqList } from "./FaqList.svelte";
```

**Import:**

```svelte
import { Faq, FaqList } from "$components/home";
```

## Quick Reference

| Pattern | Syntax |
| --------- | -------- |
| State | `let x = $state(0)` |
| Props | `let { title } = $props()` |
| Computed | `let x = $derived(y * 2)` |
| Loop | `{#each items as item, i}` |
| Condition | `{#if show}...{/if}` |
| Event | `onclick={() => {}}` |
| Lifecycle | `onMount(() => {})` |
| Slot content | `{@render children()}` |
