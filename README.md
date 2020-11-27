# Vue Easy Spinner

A simple flexible spinner component for Vue.js 3.

All of the (SVGs)[/package/resources] can use directly in browser which support for [SVG2](https://www.w3.org/TR/SVG2/).

[live demo](https://uxfan.com/vue-easy-spinner/)

## Install

```bash
npm install --save vue-easy-spinner
```

## Usage

### Global component

entry file

```js
import { createApp } from 'vue';
import easySpinner from 'vue-easy-spinner';

createApp(App)
  .use(easySpinner, {
    /*options*/
    prefix: 'easy',
  })
  .mount('#app');
```

```vue
<template>
  <easy-spinner />
</template>
```

### Local component

```vue
<template>
  <easy-spinner />
</template>
```

```js
import Spinner from 'vue-easy-spinner/package/Spinner.vue';

export default {
  components: { Spinner },
};
```

### Single import

```js
import Circular from 'vue-easy-spinner/package/components/circular.vue';

export default {
  components: { Circular },
};
```

### props

| name  | desc             | type          | values              | default |
| :---- | :--------------- | :------------ | :------------------ | :------ |
| type  | kinds of spinner | String        | spins\circular\dots | spins   |
| size  | size of spinner  | String\Number | -                   | -       |
| color | color of spinner | String        | -                   | -       |
