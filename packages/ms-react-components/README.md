# ms-react-components

> Reusable React components

[![NPM](https://img.shields.io/npm/v/ms-react-components.svg)](https://www.npmjs.com/package/ms-react-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Caution!

These components are intended for my personal use only. You can still install and use them, but I don't recommend it as I do not plan to maintain the package too often, and I may introduce breaking changes.

Additionally, I use React for my personal projects only, and not as part of my day job, so I'm far from being skilled with it. The package will not follow best-practices and will contain a sub-par implementations.

## Install

```bash
npm install --save ms-react-components
```

## Usage

```tsx
import React, { Component } from "react";

import { ModalLoading } from "ms-react-components";
import "ms-react-components/index.css";

class Example extends Component {
  render() {
    return <ModalLoading />;
  }
}
```

## References

- https://dev.to/nicolaserny/create-a-react-component-library-with-vite-and-typescript-1ih9
- https://www.elitmus.com/blog/technology/creating-an-npm-package-from-my-react-component/
