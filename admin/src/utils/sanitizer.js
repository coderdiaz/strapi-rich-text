import sanitizeHtml from 'sanitize-html'

const config = {
  allowedTags: ['b', 'i', 'strong'],
}

export const sanitizer = (html) => sanitizeHtml(html, config)
