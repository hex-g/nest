import { request } from '../../config/http-request'

const API = 'https://hiveapi.bolognini.me/pokedex/'
const TOKEN = localStorage.getItem('access_token')

export const submitForm = async (entity, data) => {

  return await request({
    url: `${API}${entity}`,
    headers: { Authorization: TOKEN, 'Content-Type': 'multipart/form-data' },
    method: 'post',
    data: data,
  })
}
