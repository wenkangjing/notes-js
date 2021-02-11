https://basarat.gitbooks.io/typescript/docs/types/migrating.html

## Steps

- Add a `tsconfig.json`.
- Change your source code file extensions from `.js` to `.ts`. Start suppressing errors using `any`.
- Write new code in TypeScript and make as little use of `any` as possible.
- Go back to the old code and start adding type annotations and fix identified bugs.
- Use `ambient definitions` for third party JavaScript code. (`declare` keyword)

## Suppressing Errors

TypeScript will immediately start TypeChecking your code and your original JavaScript code might not be as neat as you thought it was and hence you get diagnostic errors. Many of these errors you can suppress with using any e.g.:

```typescript
var foo = 123;
var bar = 'hey';

bar = foo; // ERROR: cannot assign a number to a string

// to

var foo = 123;
var bar = 'hey';

bar = foo as any; // Okay!
```


```typescript
function foo() {
    return 1;
}
var bar = 'hey';
bar = foo(); // ERROR: cannot assign a number to a string

// to

function foo(): any { // Added `any`
    return 1;
}
var bar = 'hey';
bar = foo(); // Okay!

```

3rd global variable

```typescript
declare var $: any;
```


3rd module

```typescript
declare module "cheerio";

// to

import * as $ from "cheerio";
```