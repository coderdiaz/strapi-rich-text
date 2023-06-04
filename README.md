## Strapi Rich Text

A Strapi v4 custom fields to add richness and emphasis to short and long texts.

![Blueprint](https://github.com/coderdiaz/strapi-rich-text/raw/main/blueprint.jpg)

### ⚡ Features

- [New] Custom fields: Enable capturing of a formatted text value (bold, clear formatting).

### ✨ Install

```sh
# Using yarn
yarn add strapi-rich-text

# Or using npm
npm i -S strapi-rich-text
```

Then, you'll need to build your admin panel.

```sh
# Using yarn
yarn build

# Or using npm
npm run build
```

### Usage

The `value` is stored in `HTML` format by default, allowing it to be injected into any element. The HTML code is sanitized to ensure that no malicious JavaScript code can be executed, providing peace of mind.

#### React/Next.js

```tsx
<h1 dangerouslySetInnerHTML={{ __html: yourFieldName }} />
<div dangerouslySetInnerHTML={{ __html: yourFieldName }} />
```

#### Vue

```html
<h1 v-html="yourFieldName" />
<div v-html="yourFieldName" />
```

#### Svelte

```html
<h1>{@html yourFieldName}</h1>
<div>{@html yourFieldName}</div>
```

### Roadmap

- [ ] Replace the deprecated `execCommand` method with the `Selection` and `Range` APIs for improved functionality.
- [ ] Add new translations for the available languages in Strapi to ensure users have access to a localized version of the platform..
- [ ] Add functionality to enable content to be saved in Markdown format..
- [ ] Migrate to TypeScript.

### How to contribute
1. Clone the repository in the `src/plugins` folder within Strapi..
2. Enable the plugin in your configuration file `config/plugins.js` by adding the next code.
```js
export default {
  'strapi-rich-text': {
    enabled: true,
    resolve: './src/plugins/strapi-rich-text',
  },
};
```
3. To test the plugin in development mode, you can use the `--watch-admin` command.
```sh
yarn develop --watch-admin
```
4. Head over to the URL and have a great time!

Copyright &copy; 2023 Javier Diaz Chamorro
