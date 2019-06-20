import { request } from '../../config/http-request'

const API = 'http://104.198.143.12:8762/pokedex/'
const TOKEN = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9BRE1JTiJdLCJpYXQiOjE1NjA5MTA0NjIsImV4cCI6MTU2MDk1MzY2Mn0.HY6Dl7lYGdlCKmN6OhOq5OdGIRHjV2Qs097rBA2X-ysqJbI-xGMvqwEgcJGuUmGU1Pgq3xV9ws1ZH_Zkg_gFow'

export const submitForm = async (entity, data) => {
  return await request({
    url: `${API}${entity}`,
    headers: { Authorization: TOKEN, 'Content-Type': 'multipart/form-data' },
    method: 'post',
    data: data,
  })
}
