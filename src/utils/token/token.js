import { ACCESS_TOKEN } from '../../config/constants'

export const getToken = () => (
  localStorage.getItem(ACCESS_TOKEN)
)

export const handleLogout = () => {
  localStorage.clear()
  window.location.href = '/'
}
