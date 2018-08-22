# tailwindcss-inset

> `top`, `right`, `bottom`, and `left` utilities for Tailwind CSS

## Installation

```bash
$ npm install --save-dev tailwindcss-inset
```

Then add `tailwindcss-inset` to your Tailwind configuration:

```js
"plugins": [
  require('tailwindcss-inset')({
    variants: ['responsive'], // default: []
    insets: {
      '1/2': '50%',
      'full': '100%'
    }
  })
]
```

## Example

#### Configuration:

```js
{
  variants: [],
  insets: {
    'full': '100%'
  }
}
```

#### Generated utilities:

```css
.inset-full {
  top: 100%;
  right: 100%;
  bottom: 100%;
  left: 100%;
}
.inset-t-full {
  top: 100%;
}
.inset-r-full {
  right: 100%;
}
.inset-b-full {
  bottom: 100%;
}
.inset-l-full {
  left: 100%;
}
```
