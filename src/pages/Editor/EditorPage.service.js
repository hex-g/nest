import { request } from '../../config/http-request'

const API = 'http://104.198.143.12:8762'
const TOKEN = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9BRE1JTiJdLCJpYXQiOjE1NjA4MDY2NDYsImV4cCI6MTU2MDg0OTg0Nn0.yFSM1Gpv1v0ruRc5j7PgnkNpMOJYtdjXwy1-VmZ03FOnZyynA03RPW37TtXBsOHSlfnjDcLSGUvndABC28TLIg'

export const saveEditorText = async (note, path) => {
  return await request({
    url: `${API}/kirby/note`,
    headers: { Authorization: TOKEN, 'Content-Type': 'application/json' },
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
    headers: { Authorization: TOKEN },
    method: 'get',
  })
}

export const deleteUserNote = async path => {
  return await request({
    url: `${API}/kirby/note?path=${encodeURIComponent(path)}`,
    headers: { Authorization: TOKEN },
    method: 'delete',
  })
}

export const getDirectories = async () => {
  return await request({
    url: `${API}/kirby/tree`,
    headers: { Authorization: TOKEN },
    method: 'get',
  })
}
