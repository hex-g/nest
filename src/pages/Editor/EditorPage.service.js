import { request } from '../../config/http-request'

// const API = '104.198.143.12'
const API_MOCK = 'https://api.myjson.com/bins/byi87'
const DIRECTORY = 'Test'

export const saveEditorTest = async (note) => {
  return await request({
    url: `${API_MOCK}`,
    method: 'put',
    data: {
      content: note,
      path: DIRECTORY,
    }

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
    url: `https://api.myjson.com/bins/1f2wdz`,
    method: 'get'
  })
}