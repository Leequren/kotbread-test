import { LOCATION_SEARCH } from 'src/config/constants'

export const getLocationSearch = (): string => {
  try {
    if (!LOCATION_SEARCH?.includes('vk_access_token'))
      return localStorage.getItem('token') || ''
    localStorage.setItem('token', LOCATION_SEARCH)
    return LOCATION_SEARCH
  } catch (e) {
    return LOCATION_SEARCH || ''
  }
}
