---
title: "TypeScript Best Practices"
description: "Tips and patterns for writing clean, maintainable TypeScript code in real-world projects."
date: 2025-02-10
tags: ["TypeScript", "Best Practices", "Software Engineering"]
---

TypeScript supercharges JavaScript with static types, making your code safer and more maintainable.
Here are the practices I find most valuable day-to-day.

## 1. Prefer `interface` for Object Shapes

Use `interface` for defining the shape of objects — it's more extendable and gives better error messages.

```typescript
// ✅ Preferred
interface User {
  id: number;
  name: string;
  email: string;
}

// Use type for unions, intersections, or utility types
type Status = 'active' | 'inactive' | 'pending';
```

## 2. Avoid `any` — Use `unknown` Instead

`any` disables type checking entirely. `unknown` is the safer alternative when you genuinely don't know the type.

```typescript
// ❌ Avoid
function process(data: any) { /* ... */ }

// ✅ Better
function process(data: unknown) {
  if (typeof data === 'string') {
    console.log(data.toUpperCase());
  }
}
```

## 3. Use `const` Assertions for Literal Types

```typescript
const config = {
  endpoint: '/api/v1',
  timeout: 5000,
} as const;

// config.endpoint is now '/api/v1', not string
```

## 4. Utility Types Are Your Friends

TypeScript ships with powerful utility types:

```typescript
interface User { id: number; name: string; email: string; }

type PartialUser = Partial<User>;         // All optional
type RequiredUser = Required<User>;       // All required
type UserPreview = Pick<User, 'id' | 'name'>;  // Subset
type UserWithoutId = Omit<User, 'id'>;    // Exclude fields
type ReadonlyUser = Readonly<User>;       // Immutable
```

## 5. Strict Mode is Worth It

Always enable `strict: true` in your `tsconfig.json`. It catches the most bugs.

```json
{
  "compilerOptions": {
    "strict": true,
    "noUncheckedIndexedAccess": true
  }
}
```

## Wrapping Up

These practices help keep TypeScript code clean, readable, and bug-free. The investment in proper types pays dividends in maintainability and developer confidence.
