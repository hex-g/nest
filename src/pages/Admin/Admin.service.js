import { request } from '../../config/http-request'

const API = 'https://hiveapi.bolognini.me/pokedex/'
const TOKEN = localStorage.getItem('access_token')

// eslint-disable-next-line import/prefer-default-export
export const submitForm = async (entity, data) => request({
  url: `${API}${entity}`,
  headers: { Authorization: TOKEN, 'Content-Type': 'multipart/form-data' },
  method: 'post',
  data
})
