# Issue with ESM packages like `clsx`

To reproduce:

```
pnpm install
pnpm exec jest
```

Error message:
```
TypeError: clsx is not a function
```

It should be noted that the code will work if the component is written with a CJS import:
```diff
- import clsx from 'clsx';
+ const clsx = require('clsx');
```
