import { request } from '../../config/http-request'

const API_DO_HIRUMITSU = 'http://www.mocky.io/v2/5ce7fa33350000c516cf6315'
const TEST_TOKEN = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGhvcml0aWVzIjpbIlJPTEVfMCJdLCJpYXQiOjE1NTg2NTcxNDgsImV4cCI6MTU1ODcwMDM0OH0.t6Q3Vt01pwpMLtXC5Zyjl_rZWmYxshd3uhqXJKCjBJ6eIFWr6E0pKe0-2KPluP6AGWCCv4m27n7Pr30DJTGFIw'
const DIRECTORY = 'Test'

export const saveEditorTest = async (note) => {
  return await request({
    url: API_DO_HIRUMITSU,
    method: 'put',
    data: {
      note,
    }

  })
}

export const getUserNotes = async () => {
  return await request({
    url: API_DO_HIRUMITSU,
    method: 'get',
  })
}