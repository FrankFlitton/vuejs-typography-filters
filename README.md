# VuejsTypographyFilters

[![npm](https://img.shields.io/npm/v/vuejs-typography-filters.svg)](https://www.npmjs.com/package/vuejs-typography-filters) [![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

This package is WIP.

A collection of filters to help you control your type and own your layout.
These practical and lightweight filters will help you deliver your interface without compromising on typographic handling.

Make those typos vanish from your app!

## Filters

- [typoJsonRichText](#typoJsonRichText)
- [typoLowerCase](#typoLowerCase)
- [typoStripTags](#typoStripTags)
- [typoUpperCase](#typoUpperCase)
- [typoWidow](#typoWidow)

## Installation

```bash
npm install --save vuejs-typography-filters
```

## Usage

```javascript
import Vue from 'vue';
import VuejsTypographyFilters from 'vuejs-typography-filters'

// Use all filters and directives.
Vue.use(VuejsTypographyFilters);
```

**or**

```javascript
import Vue from 'vue';
import { typoJsonRichText, typoWidow, typoStripTags } from 'vuejs-typography-filters';

// Import only what you need.
Vue.use(typoJsonRichText);
Vue.use(typoWidow);
Vue.use(typoStripTags);
```

# Typeogrphy Control Filters

## Filters

### typoJsonRichText

> `import { typoJsonRichText } from 'vuejs-typography-filters';`

This filter converts URI encoded JSON to HTML rich text.

*Syntax*

`typoJsonRichText`


```html
<p>{{ '%3Cp%3EDesign%20to%20create%20a%20truly%20unique%20experience.%3C%2Fp%3E' | typoJsonRichText }}</p>
<!-- <p>Design to create a truly unique experience.</p>  -->
```

```javascript
const msg1 = this.$typoJsonRichText('%3Cp%3EDesign%20to%20create%20a%20truly%20unique%20experience.%3C%2Fp%3E')

console.log(msg1) // <p>Design to create a truly unique experience.</p>
```

------

### typoLowerCase

> `import { typoLowerCase } from 'vuejs-typography-filters';`

This filter converts the input to lowercase and trims the text.

*Syntax*

`typoLowerCase`


```html
<p>{{ 'LoWERcase StrInG' | typoLowerCase }}</p>
<!-- lowercase string -->
```

```javascript
const msg1 = this.$typoLowerCase('LoWERcase StrInG')

console.log(msg1) // lowercase string
```

------

### typoStripTags

> `import { typoStripTags } from 'vuejs-typography-filters';`

This filter converts URI encoded JSON to HTML rich text.

*Syntax*

`typoStripTags`


```html
<p>{{ '<span>This text should not have <strong>bolded characters from spans</strong>.</span>' | typoStripTags }}</p>
<!-- This text should not have bolded characters from spans. -->
```

```javascript
const msg1 = this.$typoStripTags('<span>This text should not have <strong>bolded characters from spans</strong>.</span>')

console.log(msg1) // <p>This text should not have bolded characters from spans.</p>
```

------

### typoUpperCase

> `import { typoUpperCase } from 'vuejs-typography-filters';`

This filter converts the input to lowercase and trims the text.

*Syntax*

`typoUpperCase`


```html
<p>{{ 'I need attention!' | typoUpperCase }}</p>
<!-- 	I NEED ATTENTION! -->
```

```javascript
const msg1 = this.$typoLowerCase('I need attention!')

console.log(msg1) // I NEED ATTENTION!
```

------

### typoWidow

> `import { typoWidow } from 'vuejs-typography-filters';`

This filter adds a non-breaking space before the last word of a block of block of text only if the last word is larger than `n`.

*Syntax*

`typoWidow(length)`

```html
<p>{{ 'This text has a typoWidow at the end' | typoWidow }}</p>
<!-- This text has a typoWidow at
the&nbsp;end -->

<p>{{ 'This text has a typoWidow at the end' | typoWidow(3) }}</p>
<!-- This text has a typoWidow at the
end -->
```

```javascript
const msg1 = this.$typoWidow('This text has a typoWidow at the end.')
const msg2 = this.$typoWidow('This text has a typoWidow at the end.', 3, 'end')

console.log(msg1) // This text has a typoWidow at the&nbsp;end.
console.log(msg2) // This text has a typoWidow at the end.
```

**API**

**option** | **value** | **default** | **required** | **description**
--- | --- | --- | --- | ---
`length` | any number | -1 | NO | Indicates the length of the string to be chopped off.

------

## License

[MIT](http://opensource.org/licenses/MIT)
