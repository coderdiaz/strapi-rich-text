import { prefixPluginTranslations } from '@strapi/helper-plugin';
import pluginId from './pluginId';

export default {
  register(app) {
    app.customFields.register({
      name: 'rich-short-text',
      pluginId,
      type: 'string',
      inputSize: {
        default: 6,
        isResizable: true
      },
      intlLabel: {
        id: 'strapi-rich-text.short.label',
        defaultMessage: 'Rich Short Text'
      },
      intlDescription: {
        id: 'strapi-rich-text.short.description',
        defaultMessage: 'Best for short texts. It also enables richness on the field.'
      },
      components: {
        Input: async () => import(/* webpackChunkName: "rich-short-input" */ './components/ShortTextInput')
      },
      options: {
        advanced: [
          {
            sectionTitle: {
              id: 'global.settings',
              defaultMessage: 'Settings'
            },
            items: [
              {
                name: 'required',
                type: 'checkbox',
                intlLabel: {
                  id: 'strapi-rich-text.options.advanced.required.label',
                  defaultMessage: 'Required field'
                },
                description: {
                  id: 'strapi-rich-text.options.advanced.required.description',
                  defaultMessage: `You won't be able to create an entry if this field is empty`
                }
              }
            ]
          }
        ],
        validator: (args) => ({
          format: yup.string().required({
            id: 'strapi-rich-text.options.advanced.required.description',
            defaultMessage: `You won't be able to create an entry if this field is empty`
          })
        })
      }
    });
    app.customFields.register({
      name: 'rich-long-text',
      pluginId,
      type: 'string',
      inputSize: {
        default: 6,
        isResizable: true
      },
      intlLabel: {
        id: 'strapi-rich-text.long.label',
        defaultMessage: 'Rich Long Text'
      },
      intlDescription: {
        id: 'strapi-rich-text.long.description',
        defaultMessage: 'Best for long texts. It also enables richness on the field.'
      },
      components: {
        Input: async () => import(/* webpackChunkName: "rich-long-input" */ './components/LongTextInput')
      },
      options: {
        advanced: [
          {
            sectionTitle: {
              id: 'global.settings',
              defaultMessage: 'Settings'
            },
            items: [
              {
                name: 'required',
                type: 'checkbox',
                intlLabel: {
                  id: 'strapi-rich-text.options.advanced.required.label',
                  defaultMessage: 'Required field'
                },
                description: {
                  id: 'strapi-rich-text.options.advanced.required.description',
                  defaultMessage: `You won't be able to create an entry if this field is empty`
                }
              }
            ]
          }
        ],
        validator: (args) => ({
          format: yup.string().required({
            id: 'strapi-rich-text.options.advanced.required.description',
            defaultMessage: `You won't be able to create an entry if this field is empty`
          })
        })
      }
    });
  },
  bootstrap(app) {},
  async registerTrads({ locales }) {
    const importedTrads = await Promise.all(
      locales.map((locale) => {
        return import(/* webpackChunkName: "translation-[request]" */ `./translations/${locale}.json`)
          .then(({ default: data }) => {
            return {
              data: prefixPluginTranslations(data, pluginId),
              locale
            };
          })
          .catch(() => {
            return {
              data: {},
              locale
            };
          });
      })
    );

    return Promise.resolve(importedTrads);
  }
};
