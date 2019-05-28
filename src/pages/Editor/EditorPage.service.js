import { request } from '../../config/http-request'

const API_DO_HIRUMITSU = 'http://10.3.0.70:8762'
const TEST_TOKEN = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGhvcml0aWVzIjpbIlJPTEVfMCJdLCJpYXQiOjE1NTg5OTI0MTYsImV4cCI6MTU1OTAzNTYxNn0.zlYKLcjHkh86oWYz5dE2KxNEOK2QEg5Pibx_YwIqpvL-zVzMr_4sfixxBr4Goo4n61GVrMydTRgv9qJOalnZ4Q'
const DIRECTORY = 'Test'

export const saveEditorTest = async (note) => {
  return await request({
    url: `${API_DO_HIRUMITSU}/kirby/note`,
    method: 'post',
    headers: { Authorization: TEST_TOKEN },
    data: {
      content: note,
      path: DIRECTORY,
    }

  })
}

export const getUserNotes = async () => {
  return await request({
    url: `${API_DO_HIRUMITSU}/kirby/note?path=${DIRECTORY}`,
    method: 'get',
    headers: { Authorization: TEST_TOKEN },
  })
}