# CSS Patterns Used in BRITMUN

This guide explains the CSS architecture and patterns used in the BRITMUN codebase. Every example comes from the actual project.

## CSS Custom Properties (Variables)

### Basic Usage

**From [`src/lib/components/home/Faq.svelte:36`](https://github.com/ali-afk/BRITMUN-XI-Main/blob/v0.6.0/src/lib/components/home/Faq.svelte#L36):**

```css
button {
  padding: var(--space-4);
  span {
    font: var(--fw-light) var(--fs-4) / var(--lh-2) var(--font-body);
  }
}
```

**Why:** Change values in one place (`:root`), applies everywhere. Never hardcode values.

### Available Variables

**From [`src/lib/styles/variables.css`](https://github.com/ali-afk/BRITMUN-XI-Main/blob/v0.6.0/src/lib/styles/variables.css):**

**Spacing (responsive):**

```css
--space-1  /* Small  (0.4rem - 0.6rem)  */
--space-2  /* Medium (0.8rem - 1.2rem)  */
--space-3  /* ...    (1.2rem - 1.6rem)  */
--space-4  /* Large  (1.6rem - 2.4rem)  */
--space-5  /* ...    (2.4rem - 4rem)    */
```

**Font sizes (responsive):**

```css
--fs-1  /* Smallest (1.2rem - 1.4rem) */
--fs-2  /* Small    (1.4rem - 1.6rem) */
--fs-3  /* Body     (1.6rem - 1.8rem) */
--fs-4  /* Large    (1.8rem - 2.2rem) */
--fs-5  /* Larger   (2.2rem - 2.8rem) */
--fs-6  /* Heading  (2.8rem - 4rem)   */
--fs-7  /* Hero     (3.5rem - 6.5rem) */
```

**Colors:**

```css
--color-primary-500  /* Main purple    */
--color-primary-700  /* Darker purple  */
--color-base-900     /* Almost black   */
--color-base-700     /* Dark gray      */
--color-base-500     /* Medium gray    */
--color-base-300     /* Light gray     */
--color-base-100     /* Almost white   */
```

## Fluid Typography

**From [`src/lib/styles/variables.css:12`](https://github.com/ali-afk/BRITMUN-XI-Main/blob/v0.6.0/src/lib/styles/variables.css#L12):**

```css
--fs-4: clamp(1.8rem, 1.7rem + 0.5vw, 2.2rem);
```

**How it works:**

- Minimum: 1.8rem (on small screens)
- Grows: 1.7rem + 0.5vw (scales with viewport)
- Maximum: 2.2rem (on large screens)

**Why:** Text automatically scales between mobile and desktop. No media queries needed.

## Color Mixing

**From [`src/lib/styles/variables.css:32`](https://github.com/ali-afk/BRITMUN-XI-Main/blob/v0.6.0/src/lib/styles/variables.css#L32):**

```css
--color-base-900: color-mix(
  in srgb,
  #000,
  var(--color-primary-500) var(--mix-strength)
);
```

**What it does:** Mixes black (#000) with primary color (5%). Creates tinted blacks that match the theme.

**More examples:**

```css
/* Tinted background */
--bg-card: color-mix(in srgb, var(--color-base-100), var(--accent) 5%);

/* Tinted shadow */
--shadow-color: color-mix(in srgb, var(--color-base-900), transparent 80%);
```

**Why:** All grays match the site's color theme. Change primary color, everything updates.

## Scoped Styles

**From [`src/lib/components/home/Faq.svelte:31`](https://github.com/ali-afk/BRITMUN-XI-Main/blob/v0.6.0/src/lib/components/home/Faq.svelte#L31):**

```svelte
<article class="wrapper">
  <button>Question</button>
</article>

<style>
  article {
    button {
      padding: var(--space-4);
      background: transparent;
    }
  }
</style>
```

**Why:** Styles only apply to this component. Can't accidentally break other components.

## Nested Selectors

**From [`src/lib/components/home/Faq.svelte:35-56`](https://github.com/ali-afk/BRITMUN-XI-Main/blob/v0.6.0/src/lib/components/home/Faq.svelte#L35-L56):**

```css
article {
  button {
    padding: var(--space-4);

    span {
      font: var(--fw-light) var(--fs-4) / var(--lh-2) var(--font-body);
    }

    img {
      width: var(--fs-4);

      &.active {
        transform: rotate(45deg);
      }
    }
  }
}
```

**Equivalent to:**

```css
article { }
article button { }
article button span { }
article button img { }
article button img.active { }
```

**Why:** Easier to read, shows structure, less repetition.

## The & Selector

**From example above:**

```css
img {
  &.active {
    transform: rotate(45deg);
  }
}
```

**Compiles to:** `img.active { ... }`

**Use cases:**

```css
.button {
  /* Regular button */

  &:hover {
    /* Button on hover */
  }

  &.primary {
    /* Button with "primary" class */
  }

  &:disabled {
    /* Disabled button */
  }
}
```

## Context Variables

**From [`src/lib/components/home/Faq.svelte:33`](https://github.com/ali-afk/BRITMUN-XI-Main/blob/v0.6.0/src/lib/components/home/Faq.svelte#L33):**

```css
article {
  --color-context: var(--bg-card);

  button {
    /* Can use var(--color-context) here */
  }
}
```

**Why:** Set variables that only exist within a component. Child elements can use them.

## Transitions

**From [`src/lib/components/home/Faq.svelte:51`](https://github.com/ali-afk/BRITMUN-XI-Main/blob/v0.6.0/src/lib/components/home/Faq.svelte#L51):**

```css
img {
  transition-property: transform;

  &.active {
    transform: rotate(45deg);
  }
}
```

**Pattern:**

1. Define `transition-property` (what to animate)
2. Change the property when state changes (`.active` class)
3. Browser smoothly animates between states

**Complete example:**

```css
.element {
  transition-property: transform, opacity;
  transition-duration: 300ms;
  transition-timing-function: ease-out;
}

/* Shorthand: */
.element {
  transition: transform 300ms ease-out, opacity 300ms ease-out;
}
```

## Responsive Design

### No Media Queries Needed

Most responsive design uses fluid values:

```css
:root {
  /* Automatically scales 0.8rem → 1.2rem based on viewport */
  --space-2: clamp(0.8rem, 0.7rem + 0.3vw, 1.2rem);
}
```

### When You Need Media Queries

**Pattern:**

```css
.grid {
  display: grid;
  grid-template-columns: 1fr; /* Mobile: stacked */

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr; /* Tablet: 2 columns */
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr 1fr; /* Desktop: 3 columns */
  }
}
```

**Available breakpoints:**

```css
--bp-1: 480px;  /* Small phone */
--bp-2: 768px;  /* Tablet */
--bp-3: 1024px; /* Desktop */
--bp-4: 1280px; /* Large desktop */
```

## Layout Patterns

### Flexbox for Alignment

```css
.button-row {
  display: flex;
  justify-content: space-between; /* Space items apart */
  align-items: center;             /* Center vertically */
  gap: var(--space-3);             /* Space between items */
}
```

**Common patterns:**

```css
/* Center everything */
display: flex;
justify-content: center;
align-items: center;

/* Space items evenly */
display: flex;
justify-content: space-between;

/* Stack items with gap */
display: flex;
flex-direction: column;
gap: var(--space-4);
```

### Grid for Layouts

```css
.testimonial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--space-5);
}
```

**What it does:** Creates columns that are at least 300px wide, automatically wraps to new rows.

## Typography Patterns

**From [`src/lib/components/home/Faq.svelte:45`](https://github.com/ali-afk/BRITMUN-XI-Main/blob/v0.6.0/src/lib/components/home/Faq.svelte#L45):**

```css
span {
  font: var(--fw-light) var(--fs-4) / var(--lh-2) var(--font-body);
}
```

**Shorthand format:**

```css
font: [weight] [size] / [line-height] [family];
```

**Expanded:**

```css
font-weight: var(--fw-light);    /* 300 */
font-size: var(--fs-4);          /* 1.8rem - 2.2rem */
line-height: var(--lh-2);        /* 1.3 */
font-family: var(--font-body);   /* Average, serif */
```

**Available values:**

```css
/* Fonts */
--font-head: Girassol, ui-serif, serif;  /* For headings */
--font-body: Average, ui-serif, serif;   /* For text */

/* Line heights */
--lh-1: 1.1;  /* Tight (large headings) */
--lh-2: 1.3;  /* Medium (subheadings) */
--lh-3: 1.6;  /* Comfortable (body text) */
--lh-4: 1.8;  /* Loose (small text) */
```

## Color Patterns

**From [`src/lib/components/home/TestimonialList.svelte:23`](https://github.com/ali-afk/BRITMUN-XI-Main/blob/v0.6.0/src/lib/components/home/TestimonialList.svelte#L23):**

```css
h1 {
  color: var(--color-primary-700);
}
```

**Semantic color usage:**

```css
/* Text colors */
color: var(--color-base-900);      /* Primary text */
color: var(--color-base-700);      /* Secondary text */
color: var(--text-mute);           /* Muted text */

/* Backgrounds */
background: var(--bg-main);        /* Page background */
background: var(--bg-card);        /* Card background */
background: var(--bg-contrast);    /* Contrast section */

/* Interactive */
color: var(--link);                /* Links */
background: var(--btn-primary);    /* Primary button */
```

## Shadows

**From [`src/lib/styles/variables.css:73-75`](https://github.com/ali-afk/BRITMUN-XI-Main/blob/v0.6.0/src/lib/styles/variables.css#L73-L75):**

```css
--shadow-weak: 0 2px 4px var(--shadow-color);
--shadow-strong: 0 10px 40px var(--shadow-color);
```

**Usage:**

```css
.card {
  box-shadow: var(--shadow-weak);

  &:hover {
    box-shadow: var(--shadow-strong);
  }
}
```

**Format:** `[x-offset] [y-offset] [blur] [color]`

## Accessibility

### Reduced Motion

```css
.element {
  transition: transform 300ms;

  @media (prefers-reduced-motion: reduce) {
    transition: none; /* Disable for users who prefer less motion */
  }
}
```

**Why:** Some users get motion sickness from animations. Respect their preferences.

### Focus Styles

```css
button:focus-visible {
  outline: 2px solid var(--color-primary-500);
  outline-offset: 2px;
}
```

**Why:** Keyboard users need to see what's focused. Never remove focus styles without replacing them.

## Common Patterns

### Card Component

```css
.card {
  background: var(--bg-card);
  border-radius: var(--space-2);
  padding: var(--space-4);
  box-shadow: var(--shadow-weak);

  &:hover {
    box-shadow: var(--shadow-strong);
    transform: var(--scale-hover);
  }
}
```

### Button Component

```css
button {
  padding: var(--space-3) var(--space-5);
  font: var(--fw-regular) var(--fs-3) / var(--lh-3) var(--font-body);
  background: var(--btn-primary);
  color: var(--color-base-100);
  border: none;
  border-radius: var(--space-2);
  cursor: pointer;

  &:hover {
    transform: var(--scale-hover);
  }

  &:active {
    transform: var(--scale-active);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
```

### Stack Layout (Vertical Spacing)

```css
.stack {
  display: flex;
  flex-direction: column;
  gap: var(--space-5);
}
```

## Design Token System

**From [`src/lib/data/default-properties.ts`](https://github.com/ali-afk/BRITMUN-XI-Main/blob/v0.6.0/src/lib/data/default-properties.ts):**

All CSS variables are generated from TypeScript. This ensures type safety and a single source of truth.

**How it works:**

1. Define tokens in `default-properties.ts`
2. Register as CSS properties in `register-properties.ts`
3. Use in CSS as `var(--property-name)`

**Why:** Change the primary color once, entire site updates. Type-safe, can't use undefined tokens.

## Quick Reference

| Pattern | Syntax | Example |
|---------|--------|---------|
| Variable | `var(--name)` | `color: var(--color-primary-500)` |
| Nesting | Inside selector | `article { button { } }` |
| Parent ref | `&` | `&:hover`, `&.active` |
| Fluid size | `clamp()` | `clamp(1rem, 2vw, 3rem)` |
| Color mix | `color-mix()` | `color-mix(in srgb, red, blue 50%)` |
| Flexbox | `display: flex` | `justify-content`, `align-items` |
| Grid | `display: grid` | `grid-template-columns` |
| Transition | `transition:` | `transition: transform 300ms` |

## Common Mistakes

### ❌ Wrong: Hardcoded values

```css
padding: 20px;
color: #934599;
font-size: 18px;
```

### ✅ Right: Design tokens

```css
padding: var(--space-4);
color: var(--color-primary-500);
font-size: var(--fs-4);
```

### ❌ Wrong: No transition property

```css
.element {
  transform: scale(1);
}

.element:hover {
  transform: scale(1.1);
  transition: transform 300ms; /* Too late! */
}
```

### ✅ Right: Transition on base element

```css
.element {
  transform: scale(1);
  transition: transform 300ms; /* Define before hover */
}

.element:hover {
  transform: scale(1.1);
}
```

## Practice Tasks

1. **Create a card component:**
   - Use design tokens for spacing
   - Add hover effect
   - Include shadow

2. **Make it responsive:**
   - Use clamp() for font sizes
   - Adjust padding for mobile

3. **Add interactivity:**
   - Smooth transition on hover
   - Scale up slightly
   - Respect reduced motion

## Learning More

- **CSS Variables:** <https://developer.mozilla.org/en-US/docs/Web/CSS/-->*
- **clamp():** <https://developer.mozilla.org/en-US/docs/Web/CSS/clamp>
- **color-mix():** <https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/color-mix>
- **Flexbox:** <https://css-tricks.com/snippets/css/a-guide-to-flexbox/>
- **Grid:** <https://css-tricks.com/snippets/css/complete-guide-grid/>
