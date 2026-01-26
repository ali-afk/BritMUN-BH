# SvelteKit Patterns

Svelte 5 and SvelteKit patterns used in the BRITMUN codebase.

## File-Based Routing

```
src/routes/
├── +page.svelte        → /
├── +layout.svelte      → Wraps all pages
└── councils/
    └── +page.svelte    → /councils
```

**Layout wraps all pages:**

```svelte
<Header />
<main>{@render children()}</main>
<Footer />
```

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

**With types:**

```svelte
let { question, answer = "Default" } =
$props<{ question: string; answer?: string }>();
```

### $derived - Computed Values

```svelte
let count = $state(0);
let doubled = $derived(count * 2);
```

## Path Aliases

```svelte
import { Header } from "$components";
import { faqs } from "$data/home/faqs";
import logo from "$assets/logo.png";
import { parseCssTime } from "$scripts/utils";
```

**Aliases:** `$components`, `$data`, `$assets`, `$scripts` (defined in `svelte.config.js`)

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

## Loops with #each

**From [`TestimonialList.svelte:11`](https://github.com/ali-afk/BritMUN-BH/blob/v0.7.1/src/lib/components/home/TestimonialList.svelte#L11):**

```svelte
{#each testimonials as data, i}
  <Testimonial
    {...data}
    color={cycleColors(DefaultProperties.color.primary, i)}
    direction={i % 2 === 0 ? 'right' : 'left'}
  />
{/each}
```

- `{...data}` spreads all properties as props
- `i` is the index for alternating styles

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
