import { request } from '../../config/http-request'

const API = 'http://104.198.143.12:8762'
const TOKEN = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9BRE1JTiJdLCJpYXQiOjE1NTk4NTY2NjgsImV4cCI6MTU1OTg5OTg2OH0.9NEB4z7R8v2_n0NphMzVaLFpzh92MgQhRjlXvboK91S4A1A4JH94Ixwe5AR9nz-FQJGNUalYTsLu96IdaHhfMQ'

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
    url: `${API}/kirby/note?path=${path}`,
    headers: { Authorization: TOKEN, 'Content-Type': 'application/json' },
    method: 'get',
  })
}

export const deleteUserNote = async path => {
  return await request({
    url: `${API}/kirby/note?path=${path}`,
    headers: { Authorization: TOKEN },
    method: 'delete',
  })
}

export const getDirectories = async () => {
  return await request({
    url: `${API}/kirby/tree`,
    headers: { Authorization: TOKEN, 'Content-Type': 'application/json' },
    method: 'get',
  })
}
