import { request } from '../../config/http-request'
import { getToken } from '../../utils/token/token'

const API = 'https://hiveapi.bolognini.me'

export const saveEditorText = async (note, path) => {
  return await request({
    url: `${API}/kirby/note`,
    headers: { Authorization: getToken(), 'Content-Type': 'application/json' },
    method: 'post',
    data: {
      path,
      content: note,
    },
  })
}

export const getUserNote = async path => {
  return await request({
    url: `${API}/kirby/note?path=${encodeURIComponent(path)}`,
    headers: { Authorization: getToken() },
    method: 'get',
  })
}

export const deleteUserNote = async path => {
  return await request({
    url: `${API}/kirby/note?path=${encodeURIComponent(path)}`,
    headers: { Authorization: getToken() },
    method: 'delete',
  })
}

export const getDirectories = async () => {
  return await request({
    url: `${API}/kirby/tree`,
    headers: { Authorization: getToken() },
    method: 'get',
  })
}
