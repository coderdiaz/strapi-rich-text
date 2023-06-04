import sanitizeHtml from 'sanitize-html';

const DEFAULT_ALLOWED_TAGS = ['b', 'i', 'strong']

export const shortTextConfig = {
  allowedTags: DEFAULT_ALLOWED_TAGS,
};

export const longTextConfig = {
  allowedTags: [...DEFAULT_ALLOWED_TAGS, 'p', 'br'],
};

export const sanitizer = (html, config) => sanitizeHtml(html, config);
