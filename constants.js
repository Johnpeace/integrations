export const LANGUAGE = process.env.LANGUAGE
export const API =
  process.env.NODE_ENV === 'production'
    ? 'https://marketplace.commercetools.com/api'
    : 'http://localhost:8080/api'
export const SITE =
  process.env.NODE_ENV === 'production'
    ? 'https://marketplace.commercetools.com/'
    : 'http://localhost:8080/'
