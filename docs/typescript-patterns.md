# TypeScript Patterns & Best Practices

This guide documents the TypeScript patterns used throughout the BRITMUN XI codebase. These patterns ensure type safety, especially with strict TypeScript configuration enabled.

## Table of Contents

- [Overview](#overview)
- [Index Signatures with Union Constraints](#index-signatures-with-union-constraints)
- [Generic Intersection Types](#generic-intersection-types)
- [The `satisfies` Operator](#the-satisfies-operator)
- [Type Guards & Safe Property Access](#type-guards--safe-property-access)
- [Strict Array Access](#strict-array-access)
- [Best Practices Summary](#best-practices-summary)

---

## Overview

Our TypeScript configuration is strict:
- `strict: true` - All strict type checks enabled
- `noUncheckedIndexedAccess: true` - Array/object access returns `T | undefined`
- `checkJs: true` - Type check JavaScript files
- `forceConsistentCasingInFileNames: true`

These settings catch bugs at compile time but require specific patterns to work effectively.

---

## Index Signatures with Union Constraints

### Problem
Standard index signatures allow any key:
```typescript
type Colors = {
  [key: string]: string;  // Any string key allowed
};

const colors: Colors = { "100": "#fff", "200": "#eee" };
colors["999"];  // No error, but we don't have this key!
```

### Solution
Use mapped types with union constraints:
```typescript
type ColorScale = {
  [K in 100 | 300 | 500 | 700 | 900]: string;
};

const colors: ColorScale = {
  100: "#fff",
  300: "#eee",
  500: "#ddd",
  700: "#ccc",
  900: "#bbb"
};

colors[500];  // ✓ Type-safe access
colors[200];  // ✗ Compile error - not a valid key
```

### Benefits
1. **Type-safe indexed access** - Invalid keys caught at compile time
2. **Better autocomplete** - IDE shows only valid keys (100, 300, 500, 700, 900)
3. **Refactoring safety** - Removing a key shows all usages
4. **Works with `noUncheckedIndexedAccess`** - No false undefined warnings

### Usage in Codebase
See `src/lib/data/default-properties.ts` for `ColorScale` definition and usage.

---

## Generic Intersection Types

### Problem
Repeating common properties across multiple types:
```typescript
type FontWeights = {
  light: number;
  regular: number;
  bold: number;
  config?: PropertyConfig;  // Repeated everywhere
};

type FontSizes = {
  1: string;
  2: string;
  config?: PropertyConfig;  // Repeated again
};
```

### Solution
Use generics with intersection types:
```typescript
type PropertyGroup<T extends Record<string, unknown>> = T & {
  config?: PropertyConfig;
};

type FontWeights = PropertyGroup<{
  light: number;
  regular: number;
  bold: number;
}>;

type FontSizes = PropertyGroup<{
  [K in 1 | 2 | 3 | 4 | 5]: string;
}>;
```

### How It Works
- `T extends Record<string, unknown>` - Generic constrained to object types
- `T & { config?: PropertyConfig }` - Intersection combines both types
- Result: Original type + optional config property

### Benefits
1. **DRY principle** - Define common properties once
2. **Type inference preserved** - All original type information maintained
3. **Easy to extend** - Add new common properties in one place

### Usage in Codebase
See `PropertyGroup<T>` in `src/lib/data/default-properties.ts`.

---

## The `satisfies` Operator

### Problem
Choosing between type safety and literal type preservation:

**Option 1: Just `as const`**
```typescript
const obj = { color: "#934599" } as const;
// ✓ Preserves literal type ("#934599" not string)
// ✗ No structure validation - typos won't be caught
```

**Option 2: Type annotation**
```typescript
const obj: Schema = { color: "#934599" };
// ✓ Validates structure
// ✗ Loses literal types (becomes string not "#934599")
```

### Solution
Use `as const satisfies`:
```typescript
interface Schema {
  color: string;
  size: number;
}

const obj = {
  color: "#934599",
  size: 16
} as const satisfies Schema;

// ✓ Preserves literal types ("#934599", 16)
// ✓ Validates structure (typos caught)
// ✓ Zero runtime cost
// ✓ Full autocomplete
```

### Why This Matters for Design Tokens

Design tokens need **exact literal values** (not just `string`) for:
- Autocomplete in CSS-in-JS
- Type narrowing in conditionals
- Compile-time validation of token references

```typescript
export const DefaultProperties = {
  color: {
    primary: {
      500: "#934599",  // Literal type preserved
      700: "#6b2f73"
    }
  }
} as const satisfies DefaultPropertiesSchema;

// Now this works:
type PrimaryColor = typeof DefaultProperties.color.primary[500];
// Type is "#934599", not string!
```

### Benefits
1. **Best of both worlds** - Structure validation AND literal types
2. **Refactoring safety** - Schema changes show all affected code
3. **Better error messages** - Violations pinpoint exact location
4. **IDE support** - Autocomplete works perfectly

### Usage in Codebase
See `DefaultProperties` in `src/lib/data/default-properties.ts`.

---

## Type Guards & Safe Property Access

### Problem
Navigating nested objects with strict TypeScript:
```typescript
const props = DefaultProperties as any;  // ❌ Unsafe!
const config = props[rootKey]?.[subKey]?.config;  // No type safety
```

### Solution
Use type guards and proper type narrowing:
```typescript
function getPropertyConfig(
  rootKey: keyof typeof DefaultProperties,
  subKey?: string,
): PropertyConfig | undefined {
  const rootGroup = DefaultProperties[rootKey];

  // Type guard: Check if rootGroup has config
  if (
    typeof rootGroup === "object" &&
    rootGroup !== null &&
    "config" in rootGroup
  ) {
    // Try more specific config if subKey provided
    if (subKey && subKey in rootGroup) {
      const subGroup = rootGroup[subKey as keyof typeof rootGroup];

      // Type guard: Check if subGroup has config
      if (
        typeof subGroup === "object" &&
        subGroup !== null &&
        "config" in subGroup
      ) {
        return subGroup.config as PropertyConfig;
      }
    }

    // Fall back to root-level config
    return (rootGroup as { config?: PropertyConfig }).config;
  }

  return undefined;
}
```

### Type Guard Pattern
```typescript
// 1. Check if value is an object
typeof value === "object" && value !== null

// 2. Check if object has specific property
"propertyName" in value

// 3. Narrow the type after checks
value as SpecificType
```

### Why Not Use `as any`?
1. **Refactoring breaks silently** - Rename property, no errors shown
2. **No autocomplete** - IDE can't help
3. **Runtime safety lost** - Might access undefined properties
4. **Type checking disabled** - Defeats purpose of TypeScript

### Benefits of Type Guards
1. **TypeScript can verify correctness** - Type checker follows logic
2. **Refactoring is safe** - Errors show if structure changes
3. **Autocomplete works** - IDE knows what properties exist
4. **Runtime safety** - Checks before accessing properties
5. **Self-documenting** - Code shows exactly what's expected

### Usage in Codebase
See `getPropertyConfig()` in `src/lib/scripts/register-properties.ts`.

---

## Strict Array Access

### Problem
With `noUncheckedIndexedAccess: true`, array access returns `T | undefined`:
```typescript
const match = str.match(/regex/);
const [_, value, unit] = match;  // ❌ Might be undefined

const coords = [1, 2, 3];
const x = coords[0];  // Type is `number | undefined`
```

### Solution 1: Validate Before Destructuring
```typescript
const match = str.match(/regex/);

if (!match || !match[1] || !match[2]) {
  // Handle error
  return fallback;
}

// Now safe to use
const value = match[1];  // Type is `string`
const unit = match[2];
```

### Solution 2: Non-Null Assertions (Use Sparingly)
```typescript
// Only use if you're CERTAIN the index exists
const coords = [1, 2, 3, 4] as const;
const x = coords[0]!;  // Non-null assertion
```

### Solution 3: Type Assertions with Validation
```typescript
const coords = coordString.split(",").map(parseFloat);

if (coords.length !== 4 || coords.some((n) => Number.isNaN(n))) {
  throw new Error("Expected 4 numeric coordinates");
}

// Now safe to assert
return [coords[0], coords[1], coords[2], coords[3]] as [
  number,
  number,
  number,
  number,
];
```

### Usage in Codebase
- See `parseCssTime()` in `src/lib/scripts/media.ts`
- See `parseBezierCoords()` in `src/lib/scripts/transition.ts`

---

## Best Practices Summary

### ✅ DO

- Use mapped types with union constraints for fixed key sets
- Use `as const satisfies` for validated literal types
- Write type guards instead of using `as any`
- Validate arrays before accessing indices
- Leverage TypeScript's type narrowing
- Add assertions AFTER validation, not before

### ❌ DON'T

- Use `as any` to bypass type checks
- Use non-null assertions (`!`) without validation
- Destructure arrays/regex matches without checking
- Use `@ts-ignore` or `@ts-expect-error` casually
- Make type annotations looser to avoid errors

### 💡 When Stuck

1. **Read the error message carefully** - It usually tells you what's wrong
2. **Add validation** - Check before accessing/destructuring
3. **Use type guards** - Help TypeScript understand your logic
4. **Ask: "Could this be undefined at runtime?"** - If yes, handle it
5. **Prefer explicit checks over type assertions** - Safer and clearer

---

## Further Reading

- [TypeScript Handbook: Type Guards](https://www.typescriptlang.org/docs/handbook/2/narrowing.html)
- [TypeScript 4.9: satisfies operator](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html#the-satisfies-operator)
- [Mapped Types](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html)
- [Generic Constraints](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints)

---

## Questions?

If you encounter TypeScript errors you don't understand:
1. Check this guide for relevant patterns
2. Read the error message carefully - it's usually specific
3. Search the codebase for similar patterns
4. Consult the TypeScript handbook for the specific feature

Remember: Strict TypeScript catches bugs before they reach production. The extra effort upfront pays off in reliability and maintainability.
