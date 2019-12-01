import { request, REQUEST_ADDRESS } from '../../config/http-request'
import { getToken } from '../../utils/token/token'

const API = REQUEST_ADDRESS

export const saveEditorText = async (note, path) => request({
  url: `${API}/kirby/note`,
  headers: { Authorization: getToken(), 'Content-Type': 'application/json' },
  method: 'post',
  data: {
    path,
    content: note
  }
})

export const getUserNote = async path => request({
  url: `${API}/kirby/note?path=${encodeURIComponent(path)}`,
  headers: { Authorization: getToken() },
  method: 'get'
})

export const deleteUserNote = async path => request({
  url: `${API}/kirby/note?path=${encodeURIComponent(path)}`,
  headers: { Authorization: getToken() },
  method: 'delete'
})

export const getDirectories = async () => request({
  url: `${API}/kirby/tree`,
  headers: { Authorization: getToken() },
  method: 'get'
})
