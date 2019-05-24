import { request } from '../../config/http-request'

const API_DO_HIRUMITSU = 'http://10.3.0.70:8762'
const TEST_TOKEN = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGhvcml0aWVzIjpbIlJPTEVfMCJdLCJpYXQiOjE1NTg2NTcxNDgsImV4cCI6MTU1ODcwMDM0OH0.t6Q3Vt01pwpMLtXC5Zyjl_rZWmYxshd3uhqXJKCjBJ6eIFWr6E0pKe0-2KPluP6AGWCCv4m27n7Pr30DJTGFIw'
const DIRECTORY = 'Test'

export const saveEditorTest = async (note) => {
  return await request({
    url: `${API_DO_HIRUMITSU}/kirby/note`,
    method: 'post',
    headers: { Authorization: TEST_TOKEN},
    data: {
      path: DIRECTORY,
      content: note,
    }

  })
}

export const getUserNotes = async () => {
  return await request({
    url: `${API_DO_HIRUMITSU}/kirby/note?path=${DIRECTORY}`,
    method: 'get',
    headers: { Authorization: TEST_TOKEN},
  })
}