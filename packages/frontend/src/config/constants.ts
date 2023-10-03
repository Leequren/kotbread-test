export const DOMAIN = 'kotbread-test'

export const LOCATION_SEARCH = window.location.search.split('?')[1]

export const API_URL =
  import.meta.env.VITE_NODE_ENV === 'production'
    ? `https://${DOMAIN}`
    : 'http://127.0.0.1:5000'
