import { ACCESS_TOKEN } from '../../config/constants'

export const getToken = () => {
  return localStorage.getItem(ACCESS_TOKEN)
}

export const handleLogout = () => {
  localStorage.removeItem(ACCESS_TOKEN)
  window.location.reload()
}