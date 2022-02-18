# Issue with `user-event`

It seems like the default export of `user-event@14.0.0-beta.11` is an object that contains a field `default` that points to the actual desired object which contains methods like `.setup()`.

How to reproduce:
```
pnpm install
pnpm test
```

Run `pnpm add -D @testing-library/user-event@14.0.0-beta.4` to see the error disappear
