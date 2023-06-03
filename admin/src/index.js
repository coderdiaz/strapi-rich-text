import { prefixPluginTranslations } from '@strapi/helper-plugin';
import pluginId from './pluginId';

export default {
  register(app) {
    app.customFields.register({
      name: 'rich-short-text',
      pluginId,
      type: 'string',
      intlLabel: {
        id: 'strapi-rich-text.short.label',
        defaultMessage: 'Rich Short Text'
      },
      intlDescription: {
        id: 'strapi-rich-text.short.description',
        defaultMessage: 'Best for short texts. It also enables richness on the field.'
      },
      components: {
        Input: async () => import(/* webpackChunkName: "rich-short-input" */ './components/ShortTextInput'),
      },
    });
    app.customFields.register({
      name: 'rich-long-text',
      pluginId,
      type: 'string',
      intlLabel: {
        id: 'strapi-rich-text.long.label',
        defaultMessage: 'Rich Long Text'
      },
      intlDescription: {
        id: 'strapi-rich-text.long.description',
        defaultMessage: 'Best for long texts. It also enables richness on the field.'
      },
      components: {
        Input: async () => import(/* webpackChunkName: "rich-long-input" */ './components/LongTextInput'),
      },
    });
  },
  bootstrap(app) {},
  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(
          /* webpackChunkName: "translation-[request]" */ `./translations/${locale}.json`
        )
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale,
            };
          })
          .catch(() => {
            return {
              data: {},
              locale,
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  },
};
