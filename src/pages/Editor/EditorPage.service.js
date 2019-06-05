import { request } from '../../config/http-request'

const API = '104.198.143.12'
const TOKEN =
  'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9BRE1JTiJdLCJpYXQiOjE1NTk2MTQzMjcsImV4cCI6MTU1OTY1NzUyN30.xaHBHuxeAgMcr1iolfE02Xg3sAfHu33k74BgBFS83OZsrrCZWLg8UsHyyODi4dSN05qAXztN3L1VHWDAESsJPg'
const API_MOCK = 'https://api.myjson.com/bins/byi87'
const DIRECTORY = 'Test'

export const saveEditorTest = async note => {
  return await request({
    url: `${API_MOCK}`,
    method: 'put',
    data: {
      content: note,
      path: DIRECTORY,
    },
  })
}

export const getUserNotes = async () => {
  return await request({
    url: `${API_MOCK}`,
    method: 'get',
  })
}

export const getDirectories = async () => {
  return await request({
    url: `https://api.myjson.com/bins/da8o3`,
    headers: { Authorization: TOKEN },
    method: 'get',
  })
}
