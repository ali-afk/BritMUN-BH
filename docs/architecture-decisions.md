# Architecture Decisions

This document explains non-obvious implementation choices in the codebase.
These patterns may seem confusing at first glance but exist for specific reasons.

## Svelte Component Patterns

### Exclusive FAQ Accordion via `name` Attribute

```svelte
<details bind:open={isOpen} name="faq">
```

**What:** The `name` attribute on `<details>` creates mutually
exclusive accordions - opening one FAQ automatically
closes all others with the same name.

**Why:** Native HTML solution requires no JavaScript, works even if JS fails
to load, and provides better performance than a custom implementation.

**How:** All `<details>` elements sharing the same `name` value behave
like radio buttons.

### Three-State Boolean for Mobile Detection

```typescript
let isMobile = $state<boolean | null>(null);

// Later:
{#if isMobile !== null && (isMenuOpen || !isMobile)}
```

**What:** `isMobile` is initialized as `null` instead of `false`.

**Why:** During SSR and before hydration, we don't know the viewport size.
Using `null` as a third state prevents:

- Desktop links briefly flashing on mobile before JS hydrates
- Mobile hamburger briefly appearing on desktop

**How:** `null` = "unknown", `false` = "definitely desktop",
`true` = "definitely mobile". The null-check ensures nothing renders
until we know the actual state.

### Route Change Closes Mobile Menu

```typescript
$effect(() => {
    page.url.pathname;
    isMenuOpen = false;
});
```

**What:** Reading `page.url.pathname` without using it triggers menu close on navigation.

**Why:** Svelte 5's `$effect` automatically tracks reactive dependencies
that are read inside it. By reading `pathname`, the effect re-runs on every navigation.

**How:** Don't remove the seemingly useless
`page.url.pathname;` line - it triggers $effect() on change.

### Curried Transition Function

```svelte
<div transition:standard={slide}>
```

**What:** Transitions are wrapped through `standard()` instead of
using `transition:slide` directly.

**Why:** Centralizes all transition behavior:

- Consistent easing from design tokens
- Consistent duration from design tokens
- Automatic `prefers-reduced-motion` support (sets duration to 0)

**How:** `standard` is a higher-order function that receives the
transition function as an argument, applies default parameters,
and returns the configured transition.

### Conditional Class Binding

```svelte
<article
    class:reverse={direction === 'right'}
    class="wrapper card row lift--strong"
>
```

**What:** `class:reverse` appears before the main `class` attribute.

**Why:** Svelte's `class:name` directive is the idiomatic way for
boolean class toggles. More readable than ternary expressions,
separates static from dynamic classes.

**How:** Order doesn't matter - Svelte merges all class directives
with the class attribute.

### FAQ Content Uses `{@html}` for Rich Text

```svelte
{#each faqs as faq}
    <Faq question={faq.question}>{@html faq.answer}</Faq>
{/each}
```

**What:** FAQ answers are rendered as raw HTML, allowing links and formatting.

**Why:** FAQ content is developer-controlled (in TypeScript file), not user-generated,
so XSS risk is acceptable. Allows rich formatting without a markdown parser.

**How:** Keep FAQ content in `faqs.ts`. If content ever comes from
a CMS or user input, this must be sanitized or converted to a different approach.

### Color Cycling with Modulo

```svelte
{#each testimonialData as content, i}
    <Testimonial
        color={ColorScale[i % 5] ?? 500}
        direction={i % 2 === 0 ? 'right' : 'left'}
    />
{/each}
```

**What:** Testimonials cycle through 5 color intensities (100→300→500→700→900→100...).

**Why:** Creates visual rhythm without manual color assignment. Add a new testimonial
and it automatically gets the "next" color in the sequence.

**How:** `ColorScale` is `[100, 300, 500, 700, 900]`. Modulo 5 cycles through indices.
The `?? 500` fallback handles edge cases.

## JavaScript Patterns

### `generateId()` Uses Counter + Random

```typescript
let idCounter = 0;

export function generateId(prefix: string = "id"): string {
    idCounter++;
    return `${prefix}-${idCounter}-${Math.random().toString(36).substring(2, 5)}`;
}
```

**What:** IDs combine an incrementing counter with a random suffix.

**Why:** Belt-and-suspenders approach:

- Counter alone: guaranteed unique within session, but predictable
- Random alone: could theoretically collide
- Both together: virtually impossible to collide

**How:** Produces IDs like `content-1-x7f`, `content-2-k9p`.

### `{ passive: true }` on Event Listeners

```typescript
document.addEventListener("mouseover", handler, { passive: true });
```

**What:** Marks event handlers as passive.

**Why:** Signals "this handler will never call `preventDefault()`", allowing
browser optimizations. Good practice for handlers that only read, don't prevent.

**How:** Always add `{ passive: true }` for handlers that don't need to
prevent default behavior.

### `$app/state` vs `$app/stores`

```typescript
import { page } from "$app/state";  // Svelte 5 way
// NOT: import { page } from "$app/stores";  // Svelte 4 way
```

**What:** Using the runes-based `$app/state` module.

**Why:** Svelte 5 introduced runes-based state management. `$app/state` is the modern,
runes-compatible approach - no store subscription boilerplate needed.

**How:** Access directly as `page.url` instead of `$page.url`.

## CSS/Styling Patterns

### Dormant `optimiseInteractive()` Code

```typescript
// In interactive.ts
export function optimiseInteractive() {
    const toggleLayer = (target: HTMLElement, enabled: boolean) => {
        if (!target.classList.contains("interactive")) return;
        // ...
    };
}
```

**What:** This function exists but targets `.interactive` class which isn't used.

**Why:** Temporarily disabled. May be removed if better solutions exist or if it
causes issues (e.g., blurry fonts from GPU layer promotion).

**How:** Currently a no-op. The CSS-based GPU hints in `.card`/`.btn`
serve a similar purpose.

### Document Loading Shimmer

```typescript
onMount(() => {
    registerProperties();
    document.documentElement.classList.add("document-loaded");
});
```

```css
html:not(.document-loaded) body::before {
    /* shimmer animation */
}
```

**What:** Shows a shimmer animation until JavaScript executes.

**Why:** CSS properties are registered via JS. Before that runs, token-based colors
might not work correctly. The shimmer masks the "flash" of unregistered properties.
Hardcoded color is necessary because design tokens aren't available yet.

**How:** The class toggle hides the shimmer once JS is ready.

**Potential improvement:** Use CSS `@property` at-rule declarations
generated at build time to eliminate the JS dependency entirely.

### Selective `loading="lazy"` on Images

```svelte
<!-- Council cards: below fold, many images -->
<img src={council.image} loading="lazy">

<!-- Hero: above fold, should load immediately -->
<img src={Hero} alt="">  <!-- No loading="lazy" -->
```

**What:** Only below-fold images use lazy loading.

**Why:**

- Hero/above-fold images should load immediately (affects LCP)
- Below-fold images (council cards) benefit from deferred loading
- Rule: lazy load below-fold, eagerly load above-fold
