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

## Development Guide

Created with the following guide: https://dev.to/nicolaserny/create-a-react-component-library-with-vite-and-typescript-1ih9

To build package run `cd packages/ms-react-components` and then `npm run build`

To build the test site `cd sites/test-site` and then `npm run dev`

## Publishing new version

To publish the package, execute the following steps

1. first update the package version in `packages/ms-react-components/package.json`

```bash
cd packages/ms-react-components/
npm run build
npm run prepack
npm login
npm publish
```
