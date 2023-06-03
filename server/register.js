'use strict';

module.exports = ({ strapi }) => {
  strapi.customFields.register([
    {
      name: 'rich-short-text',
      plugin: 'strapi-rich-text',
      type: 'string',
    },
    {
      name: 'rich-long-text',
      plugin: 'strapi-rich-text',
      type: 'string',
    },
  ]);
};
