# VuejsTypographyFilters

[![npm](https://img.shields.io/npm/v/vuejs-typography-filters.svg)](https://www.npmjs.com/package/vuejs-typography-filters) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

> A collection of filters to help you control your type and own your layout!

## Installation

```bash
npm install --save vuejs-typography-filters
```

## Usage

### Bundler (Webpack, Rollup)

```js
import Vue from 'vue'
import VuejsTypographyFilters from 'vuejs-typography-filters'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'vuejs-typography-filters/dist/vuejs-typography-filters.css'

Vue.use(VuejsTypographyFilters)
```

### Browser

```html
<!-- Include after Vue -->
<!-- Local files -->
<link rel="stylesheet" href="vuejs-typography-filters/dist/vuejs-typography-filters.css"></link>
<script src="vuejs-typography-filters/dist/vuejs-typography-filters.js"></script>

<!-- From CDN -->
<link rel="stylesheet" href="https://unpkg.com/vuejs-typography-filters/dist/vuejs-typography-filters.css"></link>
<script src="https://unpkg.com/vuejs-typography-filters"></script>
```

## Development

### Launch visual tests

```bash
npm run dev
```

### Launch Karma with coverage

```bash
npm run dev:coverage
```

### Build

Bundle the js and css of to the `dist` folder:

```bash
npm run build
```


## Publishing

The `prepublish` hook will ensure dist files are created before publishing. This
way you don't need to commit them in your repository.

```bash
# Bump the version first
# It'll also commit it and create a tag
npm version
# Push the bumped package and tags
git push --follow-tags
# Ship it 🚀
npm publish
```

## License

[MIT](http://opensource.org/licenses/MIT)
