<!-- markdownlint-disable MD033 MD036 MD041 -->

# pattern-runner

![npm](https://badgen.net/npm/v/pattern-runner)
![packagephobia/install](https://badgen.net/packagephobia/install/pattern-runner)
![packagephobia/publish](https://badgen.net/packagephobia/publish/pattern-runner)

Pattern runner for [patterns.run](https://patterns.run)

## Installing

```sh
# using npm
npm install pattern-runner

# using yarn
yarn add pattern-runner
```

## Example usage

```js
import { patternRunner } from "pattern-runner";

// https://patterns.run/pattern/square
const source = `for (let i = 0; i < size; i++) {
 for (let j = 0; j < size; j++) {
   print("* ");
 }
 newline();
}`;

patternRunner(source);
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

patternRunner(source, 3);
// * * *
// * * *
// * * *
```

## API

TODO

## License

[MIT License, Copyright (c) 2021 Griko Nibras](./LICENSE)
