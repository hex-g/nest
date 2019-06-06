import { request } from '../../config/http-request'

const API = 'http://104.198.143.12:8762'
const TOKEN = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiYXV0aG9yaXRpZXMiOlsiUk9MRV9BRE1JTiJdLCJpYXQiOjE1NTk3NjcwNTIsImV4cCI6MTU1OTgxMDI1Mn0.Rgex-w6l_vfRdmt9_7y7-xTpDEycHFa7wm3f3qNPriQz7vAFofdjNlqVCOpRDTHZli-BHrimHM6Flo_Q5jR2cg'

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
